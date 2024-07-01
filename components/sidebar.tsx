import NextLink from "next/link";
import Link from "next/link";
import clsx from "clsx";
import { start } from "repl";

function Sidebar() {
  return (
    <div className="hidden sm:block">
      <div style={{alignItems:"start"}} className="flex flex-col gap-2.5 ">
      <Link href="/docs/principle">
        <button>Principles</button>
      </Link>
      <Link href="/docs/quick-start">
        <button>Quick Start</button>
      </Link>
      <Link href="/docs/supported-models">
        <button>Supported Models</button>
      </Link>
      <Link href="/docs/provider-routing">
        <button>Provider Routing</button>
      </Link>
      <Link href="/docs/model-routing">
        <button>Model Routing</button>
      </Link>
      <Link href="/docs/auth-pkce">
        <button>Auth PKCE</button>
      </Link>
      <Link href="/docs/api-keys">
        <button>API Keys</button>
      </Link>
      <Link href="/docs/requests">
        <button>Requests</button>
      </Link>
      <Link href="/docs/responses">
        <button>Responses</button>
      </Link>
      <Link href="/docs/parameters">
        <button>Parameters</button>
      </Link>
      <Link href="/docs/parameters-api">
        <button>Parameters API</button>
      </Link>
      <Link href="/docs/prompt-transforms">
        <button>Prompt Transforms</button>
      </Link>
      <Link href="/docs/error-handling">
        <button>Error Handling</button>
      </Link>
      <Link href="/docs/limits">
        <button>Limits</button>
      </Link>
      <Link href="/docs/other-frameworks">
        <button>Other Frameworks</button>
      </Link>
      <Link href="/docs/3d-objects">
        <button>3D Objects</button>
      </Link>
  </div>
    </div>
  );
}

export default Sidebar;
