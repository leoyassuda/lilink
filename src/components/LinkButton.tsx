import React from "react";

interface LinkButtonProps {
  href: string;
  text: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, text }) => {
  return (
    <a
      href={href}
      className="block w-full px-4 py-2 text-center text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};

export default LinkButton;
