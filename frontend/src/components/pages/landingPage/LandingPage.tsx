import "./LandingPage.css";
import HiddenDialog from "../../reusableComponents/hiddenDialog/HiddenDialog";
import Button from "../../reusableComponents/button/Button";
import Footer from "../../footer/Footer";
import HiddenDialogItem from "../../reusableComponents/HiddenDialogItem/HiddenDialogItem";
import PageNavigation from "../../pageNavigation/PageNavigation";
// @ts-ignore
import LandingPageImg from "../../assets/landingpageimg.jpg";

const LandingPage = () => {
  return (
    <>
      <div className="bg-white">
        <header className="header sticky z-10 top-0">
          <PageNavigation />
          {/* <nav
            className="flex items-center justify-between p-6 lg:px-8"
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
              <NavigationItem text="How it works" />
              <NavigationItem text="Product" />
              <NavigationItem text="Pricing" />
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <NavigationItem text="Log in">
                <span aria-hidden="true">&rarr;</span>
              </NavigationItem>
            </div>
          </nav> */}
          {/* "lg:hidden" */}
          <div className="hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-50"></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <HiddenDialog>
                <HiddenDialogItem text="How it works" />
                <HiddenDialogItem text="Product" />
                <HiddenDialogItem text="Price" />
              </HiddenDialog>
            </div>
          </div>
        </header>
        <div className="relative flex flex-column sm:flex-row gap-x-16 justify-center isolate px-6 pt-14 lg:px-8">
          <div className="w-2/4 h-screen max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Easily Schedule your Social Media Posts!
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Set and forget your content to be published automatically! Plan
                content at the time of your choice.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button text="Try for free" link="app" />
              </div>
            </div>
          </div>
          {/* LandingPage */}
          <div className="w-0 sm:w-2/4 h-screen">
            <img
              src={LandingPageImg}
              alt="people with clock"
              className="img-landing"
            ></img>
          </div>
        </div>

        {/* will need separate components */}
        <section id="about">HOW IT WORKS</section>
        <section id="product">PRODUCT</section>
        <section id="pricing">PRICING</section>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
