import Logo from "../reusableComponents/logo/Logo";
import HiddenButton from "../reusableComponents/hiddenButton/HiddenButton";
import NavigationItem from "../reusableComponents/navigationItem/NavigationItem";

const PageNavigation = () => {
  return (
    <nav
      className="flex items-center justify-between p-2 lg:px-8 shadow-sm"
      aria-label="Global"
    >
      <div className="flex lg:flex-1 -m-1.5 p-1.5 flex items-center">
        <Logo />
        <span className="text-lg font-semibold text-center text-slate-900">
          postsquare
        </span>
      </div>
      <div className="flex lg:hidden">
        <HiddenButton />
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <NavigationItem to="about">How it works</NavigationItem>
        <NavigationItem to="product">Product</NavigationItem>
        <NavigationItem to="pricing">Pricing</NavigationItem>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <NavigationItem text="Log in">
          <span aria-hidden="true">&rarr;</span>
        </NavigationItem>
      </div>
    </nav>
  );
};

export default PageNavigation;
