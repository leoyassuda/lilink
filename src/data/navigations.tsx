import React from "react";
import {
  IconBrandX,
  IconBrandInstagram,
  IconBrandThreads,
  IconBrandTiktok,
} from "@tabler/icons-react";

const navLinks: { title: string; icon: React.ReactNode; href: string }[] = [
  {
    title: "Instagram",
    icon: (
      <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "hhtps://www.instagram/leo_yassuda",
  },

  {
    title: "Threads",
    icon: (
      <IconBrandThreads className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.threads.net/@leo_yassuda",
  },
  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.twitter/leo_yassuda",
  },
  {
    title: "TikTok",
    icon: (
      <IconBrandTiktok className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.tiktok.com/@leo_yassuda",
  },
];

export default navLinks;
