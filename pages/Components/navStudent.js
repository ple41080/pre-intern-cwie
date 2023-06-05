import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
 
// profile menu component
const profileMenuItems = [
 
  {
    label: "Sign Out",
    icon: PowerIcon,
    href: '/'
  },
];
 
function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
 
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
        
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, hrefl }, key, href ) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              className={`flex items-center mt-2 gap-3 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 mt-5 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-5 w-5 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="a"
                href={hrefl}
                variant="small"
                className=" font-extralight"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
 
// nav list menu
const navListMenuItems = [
  {
    title: "กิจกรรม(คณะ)",
  
      hrefl: 'EventLeader'
  },
  {
    title: "กิจกรรม(สาขา)",
      hrefl: 'EventBranch'
  }
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };
 

 
  return (
    <React.Fragment >
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
       
          </Typography>
        </MenuHandler>
        <MenuList
          {...triggers}
          className="hidden w-[36rem] grid-cols-3 gap-3 overflow-visible lg:grid"
        >
       
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {/* {renderItems} */}
          </ul>
        </MenuList>
      </Menu>
   
    </React.Fragment>
  );
}
 
// nav list component
const navListItems = [
//   {
//     label: "Account",
//     icon: UserCircleIcon,
//   },
  {
    label: "กิจกรรมที่เปิดรับ",
    icon: Square3Stack3DIcon,
    hrefl: '/student/Event'
  },
  {
    label: "กิจกรรมที่เข้าร่วม",
    icon: CodeBracketSquareIcon,
    hrefl: '/student/Evented'
  },
];
 
function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center text-slate-700">
      <NavListMenu />
      {navListItems.map(({ label, icon, hrefl }, key, href) => (
        <Typography
          key={label}
          as="a"
          href={hrefl}
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            {label}
          </MenuItem>
        </Typography>
      ))}
     
    </ul>
  );
}
 
export default function NavS() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
  const router = useRouter();
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6 text-slate-700 ">
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <Typography
          as="a"
          onClick={()=>router.push('/')}
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          Faculty&nbsp;of&nbsp;Industrial&nbsp;Technology
        </Typography>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon style={{margin:-12}} className="h-6 w-6"/>
        </IconButton>
        <ProfileMenu />
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}