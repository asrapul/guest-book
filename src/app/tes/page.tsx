"use client"
import { useState } from "react";
import Image from "next/image";
import Settings from '../assets/svgs/LogoDaftarAdmin.svg'
import { AiFillAliwangwang } from "react-icons/ai";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <div
        className={`bg-red-600 text-white h-screen p-4 transition-all duration-300 ${
          isOpen ? "w-64" : "w-24"
        }`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <ul className="space-y-4">
          <li className="flex items-center gap-4 cursor-pointer p-2 rounded-lg hover:bg-red-500">
            {isOpen && <span>Home</span>}
          </li>
          <li className="flex items-center gap-4 cursor-pointer p-2 rounded-lg hover:bg-red-500">
            {isOpen && <span>Profile</span>}
          </li>
          <li className="flex items-center gap-4 cursor-pointer p-2 rounded-lg hover:bg-red-500">
            <Image src={Settings} alt='ww' />
            {isOpen && <span>Settings</span>}
          </li>
        </ul>
      </div>
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold">Main Content</h1>
      </div>
    </div>
  );
}
