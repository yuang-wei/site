"use client"

import Link from "next/link";
import { useState, useEffect } from 'react';
import { metaData, navItems } from "../config";



export function Navbar() {
  return (
    <nav className="lg:mb-14 mb-8">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-medium tracking-tight">
          {metaData.title}
        </Link>
        <div className="flex flex-row gap-4 items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export const ArticleNavbar = ({ title }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`
      fixed top-0 w-full px-5 left-0
      bg-white shadow-md
      transition-all duration-300 ease-in-out
      ${show ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
    `}>
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <h1 className="title font-medium text-2xl tracking-tight">{title}</h1>
        </div>
        <div className="block">
          <div className="ml-10 flex items-baseline space-x-6">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;