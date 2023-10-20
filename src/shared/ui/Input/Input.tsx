import { classNames } from "shared/lib/classNames/classNames";
import React, {
  InputHTMLAttributes, ChangeEvent, memo, useState, useEffect, useRef, MutableRefObject,
} from "react";
import cls from "./Input.module.scss";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
    ref?: MutableRefObject<HTMLInputElement>
    className?: string;
    value?: string;
    onChange?: (value:string) => void;
    type?: string;
    placeholder?: string;
    autoFocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className, value, placeholder, onChange, autoFocus, type = "text", ...rest
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    onChange?.(val);
    setCaretPosition(val.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref?.current?.focus();
    }
  }, [autoFocus]);

  console.log(value);

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          onFocus={onFocus}
          onBlur={onBlur}
          className={cls.input}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onSelect={onSelect}
          {...rest}
        />
        {isFocused
                    && <span style={{ left: `${caretPosition * 9}px` }} className={cls.caret} />}
      </div>
    </div>
  );
});
