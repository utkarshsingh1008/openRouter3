import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";


function Sidebar() {
  return (
    <div >
     <ul  className="ml-40 mt-16 fixed ">
					{siteConfig.navMenuItems.map((item) => (
						<div key={item.href} className="mb-3 " >
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
  )
}

export default Sidebar
