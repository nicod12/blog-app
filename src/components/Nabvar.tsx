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
    <div 
      className="lg:hidden block  absolute top-0 w-full left-0 right-0 bg-[#181715] transition"
    >
       <div className="mx-auto text-center h-[calc(100vh-7rem)]">
        <button 
          className="mt-12 text-3xl"
          onClick={handleClick}
        >
            <IoClose />
          </button>
        <ul className="text-center text-xl p-20">
          <Link 
            href="/"
            onClick={() => window.location.reload()}
          >
            <li className="my-4 py-4 border-b border-[#30302f] hover:bg-[#30302f] hover:rounded hover:text-slate-200 hover:transition hover:duration-200 hover:ease-in-out">
              Home
            </li>
          </Link>
          <Link 
            href="/about"
            onClick={() => window.location.reload()}
          >
            <li className="my-4 py-4 border-b border-[#30302f] hover:bg-[#30302f] hover:rounded hover:text-slate-200 hover:transition hover:duration-200 hover:ease-in-out">
              About Us
            </li>
          </Link>
          <Link 
            href="/donate"
            onClick={() => window.location.reload()}
          >
            <li className="my-4 py-4 border-b border-[#30302f] hover:bg-[#30302f] hover:rounded hover:text-slate-200 hover:transition hover:duration-200 hover:ease-in-out">
              Donate
            </li>
          </Link>
          <Link 
            href="/volunteer"
            onClick={() => window.location.reload()}
          >
            <li className="my-4 py-4 border-b border-[#30302f] hover:bg-[#30302f] hover:rounded hover:text-slate-200 hover:transition hover:duration-200 hover:ease-in-out">
              Volunteer
            </li>
          </Link>
          <Link 
            href="/contact"
            onClick={() => window.location.reload()}
          >
            <li className="my-4 py-4 border-b border-[#30302f] hover:bg-[#30302f] hover:rounded hover:text-slate-200 hover:transition hover:duration-200 hover:ease-in-out">
              Contact
            </li>
          </Link>
        </ul>
       </div>
    </div>
  );

  return (
    <nav className="relative px-12 lg:px-40 xl:px-40 2xl:px-40 p-10 ">
      <div className="flex items-center justify-between text-slate-200">
        <section className="flex items-center gap-x-3 font-bold text-sm lg:text-sm xl:text-2xl 2xl:text-2xl">
          <img 
            src="https://i.postimg.cc/htyhZ9yd/lg.png" alt="logo" 
            width={70}
          />
          <h1>Daisy Knight Dog Park</h1>
        </section>
          <ul className="lg:flex xl:flex 2xl:flex hidden gap-x-5 font-bold uppercase">
            <li>
              <Link className="py-2 hover:border-b-2 hover:shadow-sm border-slate-300 hover:transition hover:text-slate-300 hover:duration-200 hover:ease-in-out" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="py-2 hover:border-b-2 hover:shadow-sm border-slate-300 hover:transition hover:text-slate-300  hover:duration-200 hover:ease-in-out" href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="py-2 hover:border-b-2 hover:shadow-sm border-slate-300 hover:transition hover:text-slate-300  hover:duration-200 hover:ease-in-out" href="/donate">
                Donate
              </Link>
            </li>
            <li>
              <Link className="py-2 hover:border-b-2 hover:shadow-sm border-slate-300 hover:transition hover:text-slate-300  hover:duration-200 hover:ease-in-out" href="/volunteer">
                Volunteer
              </Link>
            </li>
            <li>
              <Link className="py-2 hover:border-b-2 hover:shadow-sm border-slate-300 hover:transition hover:text-slate-300 hover:duration-200 hover:ease-in-out" href="/contact">
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