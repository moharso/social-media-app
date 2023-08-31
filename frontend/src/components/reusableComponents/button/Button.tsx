import React from "react";
import {Link} from "react-router-dom";

type ButtonProps = {
  text: string;
  link: string;
};

const Button = ({text, link}: ButtonProps) => {
  return (
    <Link
      className="flex items-center font-semibold text-sm leading-none max-w-full transition duration-100 outline-none bg-blue-500  hover:bg-blue-600 focus:outline-none shadow-lg justify-center  text-white focus:ring-2 focus:bg-blue-500 focus:ring-offset-2 focus:text-white p-5 min-h-14 min-w-150 text-sm rounded-md"
      to={link}
    >
      <span>{text}</span>
    </Link>
  );
};

export default Button;
