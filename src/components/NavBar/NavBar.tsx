import * as React from "react";
import Link from "next/link";
import clsx from "clsx";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Menu as MenuIcon, X as CloseIcon } from "react-feather";
import Logo from "../../../public/logo.svg";

const navigation = [
  { name: "About", href: "/about", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function NavBar() {
  return (
    <Disclosure as="div" className="flex justify-center items-center">
      <div className="bg-gray flex flex-row justify-between items-center mb-20 w-[1512px]">
        <div>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white lg:hidden">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          <MenuIcon
            aria-hidden="true"
            className="block h-6 w-6 group-data-[open]:hidden"
          />
          <CloseIcon
            aria-hidden="true"
            className="hidden h-6 w-6 group-data-[open]:block"
          />
        </DisclosureButton>

        <nav className="hidden flex-row gap-5 lg:flex ">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={clsx(
                item.current
                  ? "bg-white text-black"
                  : "bg-white text-black hover:bg-gray-700 hover:text-black",
                "rounded-full py-2 px-5 font-bold"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <DisclosurePanel className="lg:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 bg-black">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={clsx(
                item.current
                  ? "bg-gray-900 text-black"
                  : "text-gray-300 hover:bg-gray-700 hover:text-black",
                "rounded-full py-2 px-5 font-bold"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

export default NavBar;
