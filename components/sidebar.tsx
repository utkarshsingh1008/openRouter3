import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

function Sidebar() {
  return (
    <div className="hidden lg:block">
      <ul className="mb-4">
        {siteConfig.navMenuItems.map((item) => (
          <div key={item.href} className="mb-2.5">
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </NextLink>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
