import { classNames } from "shared/lib/classNames/classNames";
import { useState, memo } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { Button, ButtonSize, ThemeButton } from "shared/ui/Button/Button";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import cls from "./Sidebar.module.scss";
import { SidebarItemsList } from "../model/items";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        square
        size={ButtonSize.L}
        className={cls[ButtonSize.L]}
        theme={ThemeButton.BACKGROUND_INVERTED}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={cls.links}>
        {SidebarItemsList.map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <SidebarItem key={i} item={item} collapsed={collapsed} />
        ))}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
});
