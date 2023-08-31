import {Link} from "react-scroll";
import "./NavigationItem.css";

type HiddenDialogProps = {
  text?: string;
  children?: any;
  to: string;
};

const NavigationItem = ({text, children, to}: HiddenDialogProps) => {
  return (
    <Link
      activeClass="active"
      smooth
      spy={true}
      className="text-lg font-semibold leading-6 text-gray-900 cursor-pointer hover:text-blue-400 ease-in duration-300"
      to={to}
    >
      {text}
      {children}
    </Link>
  );
};

export default NavigationItem;
