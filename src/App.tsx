import React from "react";
import Profile from "./components/Profile";
import navLinks from "./data/navigations";
import { FloatingDock } from "./components/ui/floating-dock";
import { ExpandableCard } from "./components/ExpandCard";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center justify-items-center items-center flex-col py-2 sm:py-12 ">
      <div className="md:w-[512px]">
        <Profile />

        <div className="p-2 w-auto">
          <FloatingDock items={navLinks} />
        </div>

        <div className="p-2 w-full h-80 md:h-96 aspect-w-16 aspect-h-9">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/53O0UbUKHj4?si=H9bUBwDHsTr5TWOk"
            title="Maniac - Stray Kids - Dance Cover"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-3xl border-spacing-0"
          ></iframe>
        </div>

        <div className="p-2 w-full h-80 md:h-96">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/g00TOlI6eoA?si=Q7nN6GxK-2FV_qSv"
            title="Cry For Me - Twice - Dance Cover"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-3xl border-spacing-0"
          ></iframe>
        </div>

        <div className="p-2 w-full h-80 md:h-96">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/rI1HC9JfQ_0?si=RnC8cROE5dAI4adP"
            title="Over My Skin - Gabriel Shimoda Coreography"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-3xl border-spacing-0"
          ></iframe>
        </div>

        <div className="p-2">
          <ExpandableCard />
        </div>
      </div>
    </div>
  );
};

export default App;
