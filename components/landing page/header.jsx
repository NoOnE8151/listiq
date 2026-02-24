"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { CirclePlus } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";

const Header = () => {
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (user) {
      console.log(user.username);
    }
  }, [user]);

  //handling user dropdown menu
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex items-center justify-between">
      <SignedOut>
        <div className="font-poppins font-medium text-xl md:block hidden">
          How it works?
        </div>
      </SignedOut>
      <SignedIn>
        <div ref={dropdownRef} className="relative inline-block">
          {/* Trigger */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="
          flex items-center gap-3 
          bg-white/90 backdrop-blur-md
          px-3 py-2
          rounded-full
          border border-gray-200
          shadow-sm
          hover:shadow-md
          hover:border-gray-300
          transition-all duration-200
          cursor-pointer
        "
          >
            <img
              src={user?.imageUrl}
              alt="profile"
              className="rounded-full w-8 h-8 object-cover"
            />
            <h2 className="font-semibold text-gray-700">{user?.username}</h2>
          </button>

          {/* Dropdown */}
          <ul
            className={`
          absolute left-0 top-full mt-2
          w-56
          bg-white
          border border-gray-200
          rounded-2xl
          shadow-xl
          overflow-hidden
          origin-top
          transition-all duration-200 ease-out
          z-50
          ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }
        `}
          >
            <li>
              <button className="w-full text-left px-5 py-3 text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer">
                Listing History
              </button>
            </li>
            <li>
                <SignOutButton>
              <button className="w-full text-left px-5 py-3 text-red-500 hover:bg-red-50 transition-colors cursor-pointer">
                Log Out
              </button>
                </SignOutButton>
            </li>
          </ul>
        </div>
      </SignedIn>
      <h1 className="font-riot text-3xl">
        <span className="text-[#3FBBEB]">List</span>
        <span className="text-[#189BFF]">IQ</span>
      </h1>

      <SignedOut>
        <div className="flex items-center gap-5">
          <Link
            href="/sign-up"
            className="bg-element text-white px-7 py-2 rounded-full font-semibold cursor-pointer md:block hidden"
          >
            SignUp
          </Link>
          <Link
            href="/sign-in"
            className="cursor-pointer md:text-foreground text-white md:bg-transparent bg-element md:px-0 px-5 md:py-0 py-1 rounded-full font-semibold"
          >
            Login
          </Link>
        </div>
      </SignedOut>

      <SignedIn>
        <button className="flex items-center gap-3 cursor-pointer">
          <img src="/assets/elements/coin.svg" alt="credits" width={35} />
          <div className="font-semibold text-xl">0.00</div>
          <div>
            <CirclePlus size={18} />
          </div>
        </button>
      </SignedIn>
    </div>
  );
};

export default Header;
