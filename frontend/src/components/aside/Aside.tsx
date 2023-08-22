import "./Aside.css";
import MainNavigation from "../mainNavigation/MainNavigation";
import Logo from "../reusableComponents/logo/Logo";
import UserAvatar from "../userAvatar/UserAvatar";

const Aside = ({showSideBar}: any) => {
  return (
    <div
      className={`Aside fixed z-20 rounded-lg top-6 left-6 right-m md:top-m md:right-unset md:bottom-m md:bg-none bg-white/80 h-full transition-transform .3s ease-in-out md:translate-x-0 ${
        !showSideBar ? "-translate-x-full" : ""
      }`}
    >
      <div
        className={`hidden w-auto flex-col h-screen items-center justify-between md:flex navigation-menu AsideContainer 
        }`}
      >
        <Logo />
        <MainNavigation />
        <UserAvatar />
      </div>
    </div>
  );
};

export default Aside;
