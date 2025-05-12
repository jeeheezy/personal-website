"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import { useSpring, animated } from "@react-spring/web";
import Logo from "@/assets/logo.svg";
import Logo2 from "@/assets/logo-korean.svg";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

function NavBar() {
  const [hover, setHover] = React.useState<boolean>(false);

  const slideOne = useSpring({
    transform: hover ? "translateY(-130%)" : "translateY(0%)",
    config: { tension: 200, friction: 20 },
  });

  const slideTwo = useSpring({
    transform: hover ? "translateY(0%)" : "translateY(130%)",
    config: { tension: 200, friction: 20 },
  });

  // seems like typescript error comes when using div.animated, using this as workaround for now
  const AnimatedLogo = animated(Logo);
  const AnimatedLogo2 = animated(Logo2);

  const pathname = usePathname();

  return (
    <div className="w-full mb-10 lg:mb-20 max-w-[1344px]">
      <Disclosure as="div">
        <div className="bg-gray flex flex-row justify-between items-center">
          <Link href="/">
            <div
              className="relative aspect-[6] w-[300px] sm:w-[450px] xl:w-[600px] overflow-hidden"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <AnimatedLogo
                className="absolute w-full h-full"
                style={slideOne}
              />
              <AnimatedLogo2 className="absolute h-full" style={slideTwo} />
            </div>
          </Link>
          <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white lg:hidden">
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
                aria-current={pathname == item.href ? "page" : undefined}
                className={clsx(
                  pathname == item.href
                    ? "bg-black text-white border-2 border-white"
                    : "bg-white text-black hover:bg-blue-950 hover:text-white",
                  "rounded-full py-2 px-5 font-black self-center font-red_hat"
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
                aria-current={pathname == item.href ? "page" : undefined}
                className={clsx(
                  pathname == item.href
                    ? "bg-gray-600 text-white"
                    : "text-white hover:bg-blue-950 hover:text-white",
                  "block rounded-md px-5 py-2 font-black text-center font-red_hat"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}

export default NavBar;
