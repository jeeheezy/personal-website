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
// import Image from "next/image";
import Pill from "../Pill";

const navigation = [
  { name: "About", href: "/about", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Placeholder", href: "/", current: false },
];

function NavBar() {
  return (
    <Disclosure as="div" className="flex justify-center items-center">
      <div className="bg-black text-white flex flex-row justify-between items-center mb-20 w-[1512px]">
        <div>
          <Link href="/">
            <Logo />
            {/* <Image
              src={Logo}
              height={72}
              alt="logo"
              // TODO: can't tell if size here is doing anything, to adjust later
              // sizes="(max-height: 72px) 100vw, (max-height: 36px) 50vw"
            /> */}
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
            <Pill key={item.name} className="bg-white">
              <Link
                key={item.name}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={clsx(
                  item.current
                    ? "bg-gray-900 text-black"
                    : "text-black hover:bg-gray-700 hover:text-black",
                  "rounded-md px-3 py-2"
                )}
              >
                {item.name}
              </Link>
            </Pill>
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
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-5 py-2"
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
