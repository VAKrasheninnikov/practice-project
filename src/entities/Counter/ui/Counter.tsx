import { Button } from "shared/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { counterActions } from "../model/slice/CounterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-counter">{counterValue}</h1>
      <Button data-testid="increment-button" onClick={increment}>
        {t("увеличить")}
      </Button>
      <Button data-testid="decrement-button" onClick={decrement}>
        {t("уменьшить")}
      </Button>
    </div>
  );
};
