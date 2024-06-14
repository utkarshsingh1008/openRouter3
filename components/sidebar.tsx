import NextLink from "next/link";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import { start } from "repl";

function Sidebar() {
  return (
    <div className="hidden sm:block">
      <div style={{alignItems:"start"}} className="flex flex-col gap-2.5 ">
    <button>Principles</button>
    <button>Quick Start</button>
    <button>Supported Models</button>
    <button>Provider Routing</button>
    <button>Model Routing</button>
    <button>Auth PKCE</button>
    <button>API Keys</button>
    <button>Requests</button>
    <button>Responses</button>
    <button>Parameters</button>
    <button>Parameters API</button>
    <button>Prompt Transforms</button>
    <button>Error Handling</button>
    <button>Limits</button>
    <button>Other Frameworks</button>
    <button>3D Objects</button>
  </div>
    </div>
  );
}

export default Sidebar;
