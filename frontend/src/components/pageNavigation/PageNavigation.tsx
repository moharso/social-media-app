import React, {useState} from "react";
import Logo from "../reusableComponents/logo/Logo";
import HiddenButton from "../reusableComponents/hiddenButton/HiddenButton";
import NavigationItem from "../reusableComponents/navigationItem/NavigationItem";
import NavButton from "../reusableComponents/navigationButton/NavButton";
import RegistrationForm from "../registrationForm/registrationForm";

enum FormMode {
  Registration,
  Login,
}

const PageNavigation = () => {
  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState(FormMode.Registration);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

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
        <NavButton
          buttonText="Log In/Sign up"
          variant="text"
          onClick={toggleForm}
        ></NavButton>
        {showForm && formMode === FormMode.Registration && (
          <RegistrationForm onClose={toggleForm} />
        )}
      </div>
    </nav>
  );
};

export default PageNavigation;
