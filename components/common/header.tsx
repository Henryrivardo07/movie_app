"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";

const Header = () => {
  const [isScroled, setIsScroled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroled(true);
      } else {
        setIsScroled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScroled && "bg-[#141414]"}`}>
      <div className="flex space-x-2 md:space-x-10 items-center">
        <img src="https://rb.gy/ulxxee" width={100} height={100} className="cursor-pointer object-contain " />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Show</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <FaSearch className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <FaBell className="h-6 w-6" />
        <Link href="/account">
          <img src="https://rb.gy/g1pwyx" alt="" className="cursor-pointer rounded" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
