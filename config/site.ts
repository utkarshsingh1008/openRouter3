import { lazy } from "react";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Browser",
      href: "/browser",
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
    {
      label: "Login",
      href: "/login",
    },
  ],
  navMenuItems: [
    { label: "Principles", href: "/principles" },
    { label: "Quick Start", href: "/quick-start" },
    { label: "Supported Models", href: "/supported-models" },
    { label: "Provider Routing", href: "/provider-routing" },
    { label: "Model Routing", href: "/model-routing" },
    { label: "OAuth PKCE", href: "/oauth-pkce" },
    { label: "API Keys", href: "/api-keys" },
    { label: "Requests", href: "/requests" },
    { label: "Responses", href: "/responses" },
    { label: "Parameters", href: "/parameters" },
    { label: "Parameters API", href: "/parameters-api" },
    { label: "Prompt Transforms", href: "/prompt-transforms" },
    { label: "Error Handling", href: "/error-handling" },
    { label: "Limits", href: "/limits" },
    { label: "Other Frameworks", href: "/other-frameworks" },
    { label: "3D Objects", href: "/3d-objects" },
  ],
  navItemChat: [
	{
		label:"Chat", href:"/chat"
	}
  ],
};
