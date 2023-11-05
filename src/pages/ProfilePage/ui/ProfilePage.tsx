import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { profileReducer } from "entities/Profile";

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();
  return (
    <DynamicModuleLoader reducers={{ profile: profileReducer }} removeAfterUnmount>
      <div className={classNames("", {}, [className])}>{t("PROFILE PAGE")}</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
