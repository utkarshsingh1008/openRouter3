'use client'
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import Login from "@/app/login/pages";
import {Modal, ModalContent, Button, useDisclosure} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";


export const Navbar = () => {
    
	const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const router = useRouter();
	const dropDownHandler = (url:string)=>{
		router.push(url)
	}

	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center" href="/">
						<Logo />
						<p className="font-bold text-inherit ml-4">OpenRouter</p>
					</NextLink>
				</NavbarBrand>
				
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
				<ul className="hidden lg:flex gap-14 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
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
						</NavbarItem>
						
					))}
						<Button  className="-mt-2 text-medium mr-6 " onPress={onOpen}>Sign in</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
        <Login/>
</>
          )}
        </ModalContent>
      </Modal>
	  <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          Open Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem onClick={() => dropDownHandler('/credits')}  key="new">Credits</DropdownItem>
        <DropdownItem  onClick={() => dropDownHandler('/keys')} key="copy">Keys</DropdownItem>
        <DropdownItem onClick={() => dropDownHandler('/activity')} key="edit">Activity</DropdownItem>
        <DropdownItem onClick={() => dropDownHandler('setting')} key="delete" > Setting </DropdownItem>
		<DropdownItem onClick={() => dropDownHandler('/')} key="edit">Sign out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
	 
				</ul>
			
					<ThemeSwitch />
					{/* <Button onPress={onOpen}>S</Button>
                 <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
               <ModalContent>
          {(onClose) => (
            <>
        <Loginham/>
</>
          )}
        </ModalContent>
      </Modal> */}
				</NavbarItem>
			
				<NavbarItem className="hidden md:flex">
				
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				{/* <Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link> */}
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				
				<div className="mx-4 mt-2 flex flex-col">
					{siteConfig.navItems.map((item, index) => (
						<NavbarItem key={item.href}>
							<NextLink
								// color={
								// 	index === 2
								// 		? "primary"
								// 		: index === siteConfig.navItems.length - 1
								// 		? "danger"
								// 		: "foreground"
								// }
								href={item.href}
								
							>
								{item.label}
							</NextLink>

						</NavbarItem>
						
					))}
						<Button onPress={onOpen}>Sign in</Button>
                 <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
               <ModalContent>
          {(onClose) => (
            <>
        <Login/>
</>
          )}
        </ModalContent>
      </Modal>
	  <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          Open Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
	  <DropdownItem onClick={() => dropDownHandler('/credits')}  key="new">Credits</DropdownItem>
        <DropdownItem  onClick={() => dropDownHandler('/keys')} key="copy">Keys</DropdownItem>
        <DropdownItem onClick={() => dropDownHandler('/activity')} key="edit">Activity</DropdownItem>
        <DropdownItem onClick={() => dropDownHandler('setting')} key="delete" > Setting </DropdownItem>
		<DropdownItem onClick={() => dropDownHandler('/')} key="edit">Sign out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
