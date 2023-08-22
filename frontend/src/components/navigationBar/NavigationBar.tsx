import HiddenButton from "../reusableComponents/hiddenButton/HiddenButton";

const NavigationBar = ({showSideBar, clickBtn}: any) => {
  // const [showSideBar, setShowModal] = useState(false);

  return (
    <nav className="bg-transparent text-zinc-500 flex items-center w-full fixed z-10 px-4 h-16">
      <div className="flex-grow"></div> {/** spacer */}
      <div className="md:hidden">
        <HiddenButton clickBtn={() => clickBtn()} />
      </div>
    </nav>
  );
};

export default NavigationBar;
