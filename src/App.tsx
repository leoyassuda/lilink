import React from "react";
import Profile from "./components/Profile";
import LinkButton from "./components/LinkButton";
import links from "./data/links";
import navLinks from "./data/navigations";
import { LinkPreview } from "./components/ui/link-preview";
import { FloatingDock } from "./components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-stretch flex-col py-2 sm:py-12">
      <div className="rounded-3xl grow sm:p-20 ">
        <Profile />

        <div className="p-2 w-full">
          <FloatingDock items={navLinks} />
        </div>

        <div className="grid justify-center justify-items-center">
          <div className="mt-5 space-y-3 ">
            {links.map((link, index) => (
              <LinkButton key={index} href={link.url} text={link.text} />
            ))}
          </div>
        </div>

        <div className="p-2 w-ful">
          <LinkPreview url="https://leoyassuda.com">
            <LinkButton href="https://leoyassuda.com" text="portifolio" />
          </LinkPreview>
        </div>

        <div className="p-2 w-full h-80 md:h-96">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/53O0UbUKHj4?si=H9bUBwDHsTr5TWOk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="rounded-3xl"
          ></iframe>
        </div>

        <div className="p-2 w-full h-80 md:h-96">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/g00TOlI6eoA?si=nlH9Tm1VWODZnSwj"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="rounded-3xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default App;
