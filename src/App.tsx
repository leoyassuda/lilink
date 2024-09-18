import React from "react";
import Profile from "./components/Profile";
import LinkButton from "./components/LinkButton";
import links from "./data/links";
import navLinks from "./data/navigations";
import { FloatingDock } from "./components/ui/floating-dock";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center justify-items-center items-center flex-col py-2 sm:py-12 ">
      <div className="md:w-[512px]">
        <Profile />

        <div className="p-2 w-auto">
          <FloatingDock items={navLinks} />
        </div>

        <div className="p-2">
          <div>
            {links.map((link, index) => (
              // <LinkPreview key={index} url={link.url}>
              <LinkButton key={index} href={link.url} text={link.text} />
              // </LinkPreview>
            ))}
          </div>
        </div>

        <div className="p-2 w-full h-80 md:h-96">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/53O0UbUKHj4?si=H9bUBwDHsTr5TWOk"
            title="Maniac - Stray Kids - Dance Cover"
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
            title="Cry For Me - Twice - Dance Cover"
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
            src="https://www.youtube.com/embed/rI1HC9JfQ_0?si=RnC8cROE5dAI4adP"
            title="Over My Skin - Gabriel Shimoda Coreography"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="rounded-3xl"
          ></iframe>
        </div>

        <div className="p-2 w-full h-80 md:h-96">
          <iframe
            title="PlayLeoist - Jp. Ver."
            src="https://open.spotify.com/embed/playlist/0E1ANTyC88J0pG0HSsDEX8?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-3xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default App;
