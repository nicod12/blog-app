"use client"
import Link from "next/link";
import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  }

  const content = (
    <div className="lg:hidden block  absolute top-0 w-full left-0 right-0 bg-[#181715] transition">
       <div className="mx-auto text-center h-[calc(100vh-7rem)]">
        <button 
          className="mt-12 text-3xl"
          onClick={handleClick}
        >
            <IoClose />
          </button>
        <ul className="text-center text-xl p-20">
          <Link href="/">
            <li className="my-4 py-4 border-b border-[#30302f] hover:bg-[#30302f] hover:rounded hover:text-slate-200">
              Home
            </li>
          </Link>
          <Link href="/about">
            <li className="my-4 py-4 border-b border-[#30302f] hover:bg-[#30302f] hover:rounded hover:text-slate-200">
              About Us
            </li>
          </Link>
          <Link href="/donate">
            <li className="my-4 py-4 border-b border-[#30302f] hover:bg-[#30302f] hover:rounded hover:text-slate-200">
              Donate
            </li>
          </Link>
          <Link href="/volunteer">
            <li className="my-4 py-4 border-b border-[#30302f] hover:bg-[#30302f] hover:rounded hover:text-slate-200">
              Volunteer
            </li>
          </Link>
          <Link href="/contact">
            <li className="my-4 py-4 border-b border-[#30302f] hover:bg-[#30302f] hover:rounded hover:text-slate-200">
              Contact
            </li>
          </Link>
        </ul>
       </div>
    </div>
  );

  return (
    <nav className="relative px-12 lg:px-40 xl:px-40 2xl:px-40 mt-16 mb-10">
      <div className="flex items-center justify-between text-slate-200">
        <section>
          <h1>LOGO</h1>
        </section>
          <ul className="lg:flex xl:flex 2xl:flex hidden gap-x-5 font-bold uppercase">
            <li>
              <Link className="py-2 hover:border-b-2 hover:shadow-sm border-slate-300 hover:transition hover:text-slate-300" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="py-2 hover:border-b-2 hover:shadow-sm border-slate-300 hover:transition hover:text-slate-300" href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="py-2 hover:border-b-2 hover:shadow-sm border-slate-300 hover:transition hover:text-slate-300" href="/donate">
                Donate
              </Link>
            </li>
            <li>
              <Link className="py-2 hover:border-b-2 hover:shadow-sm border-slate-300 hover:transition hover:text-slate-300" href="/volunteer">
                Volunteer
              </Link>
            </li>
            <li>
              <Link className="py-2 hover:border-b-2 hover:shadow-sm border-slate-300 hover:transition hover:text-slate-300" href="/contact">
                Contact
              </Link>
            </li>
          </ul>

          <button 
            className="lg:hidden xl:hidden 2xl:hidden text-3xl"
            onClick={handleClick}
          >
            {
              !open ? <FiAlignJustify /> : ""
            }
          </button>
      </div>  
      {
        open ? content : null
      }
    </nav>
  );
};

export default Navbar;