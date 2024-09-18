import React from "react";

interface LinkButtonProps {
  href: string;
  text: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, text }) => {
  return (
    <div className="block w-full  py-2">
      <button className="p-[3px] relative w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl" />
        <div className="px-8 py-2  bg-black rounded-3xl relative group transition duration-200 text-white hover:bg-transparent">
          <a href={href} target="_blank" rel="noopener noreferrer">
            {text}
          </a>
        </div>
      </button>
    </div>
  );
};

export default LinkButton;
