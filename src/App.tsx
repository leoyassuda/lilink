import React from "react";
import Profile from "./components/Profile";
import LinkButton from "./components/LinkButton";
import links from "./data/links";
import { LinkPreview } from "./components/ui/link-preview";

const App: React.FC = () => {
  return (
    <div className="min-h-screen py-6 flex flex-col justify-center  sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0  shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10shadow-lg sm:rounded-3xl sm:p-20 justify-items-center">
          <Profile />
          <div className="mt-5 space-y-4">
            {links.map((link, index) => (
              <LinkButton key={index} href={link.url} text={link.text} />
            ))}
          </div>

          <div>
            <LinkPreview url="https://leoyassuda.com">
              Hover me to see preview
            </LinkPreview>
            <LinkPreview url="https://leoyassuda.com">
              <LinkButton href="https://leoyassuda.com" text="portifolio" />
            </LinkPreview>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
