import { lazy } from "react";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label:"Chat", href:"/chat"
    },
    {
      label: "Ranking",
      href: "/ranking",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Credits",
      href: "/credits",
    },
    // {
    //   label: "Login",
    //   href: "/login",
    // },
  ],
  
 
  navItemChat: [
	
  ],
};
