import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { SidebarItemType } from "../model/items";
import cls from "./SidebarItem.module.scss";

interface SidebarItemProps {
  item?: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  return (
    <AppLink theme={AppLinkTheme.SECONDARY} to={item.path}>
      <div className={cls.icon}>
        <item.Icon />
      </div>
      {!collapsed && <span className={cls.link}>{t(item.text)}</span>}
    </AppLink>
  );
});
