"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import {  usePathname, useRouter } from 'next/navigation'
import Image from "next/image";




const Navbar = () => {
  const router = useRouter()

  const [open, setOpen] = useState(false);


  const pathname = usePathname()
  

  const [activeLink, setActiveLink] = useState(pathname);

  useEffect(() => {
    setActiveLink(pathname)

  }, [pathname])

  const handleClick = () => {
    setOpen((prev) => !prev);
  }

  const closeMenuAndNavigate = (path: string) => {
    setOpen(false);
    router.push(path);
  }


  const content = (
    <section 
    className={`lg:hidden block h-screen absolute top-0 w-full left-0 right-0 ${open ? 'bg-[#181715] transform translate-x-0 z-20 fixed' : 'transform -translate-x-full z-20 fixed'}`}
    >
       <div className="mx-auto text-center h-[calc(100vh-7rem)]">
       <div className="flex justify-between items-center px-10 mt-8">
        <div className="flex gap-3 items-center">
        <Image
            height={20} 
            loading="lazy"
            src="https://i.postimg.cc/htyhZ9yd/lg.png" alt="logo" 
            width={50}
            className="w-10"
          />
          <h2 className="font-bold">Daisy Knight Dog Park</h2>
        </div>
         <button
          aria-label="Botón para cerrar menu"
          type="button" 
          className="text-[32px]"
          onClick={handleClick}
        >
            <IoClose />
          </button>
       </div>
        <ul className="text-center text-xl p-20 uppercase font-bold">
          <Link 
            href="/"
            onClick={(e) => {
              e.preventDefault()
              closeMenuAndNavigate("/")
            }}
          >
            <li className="my-4 py-4 border-b border-[#30302f] hover:bg-[#30302f] hover:rounded hover:text-slate-200 hover:transition hover:duration-200 hover:ease-in-out">
              Home
            </li>
          </Link>
          <Link 
            href="/about"
            onClick={(e) => {
              e.preventDefault()
              closeMenuAndNavigate("/about")
            }}
          >
            <li className="my-4 py-4 border-b border-[#30302f] hover:bg-[#30302f] hover:rounded hover:text-slate-200 hover:transition hover:duration-200 hover:ease-in-out">
              About Us
            </li>
          </Link>
          <Link 
            href="/donate"
            onClick={(e) => {
              e.preventDefault()
              closeMenuAndNavigate("/donate")
            }}
          >
            <li className="my-4 py-4 border-b border-[#30302f] hover:bg-[#30302f] hover:rounded hover:text-slate-200 hover:transition hover:duration-200 hover:ease-in-out">
              Donate
            </li>
          </Link>
          <Link 
            href="/volunteer"
            onClick={(e) => {
              e.preventDefault()
              closeMenuAndNavigate("/volunteer")
            }}
          >
            <li className="my-4 py-4 border-b border-[#30302f] hover:bg-[#30302f] hover:rounded hover:text-slate-200 hover:transition hover:duration-200 hover:ease-in-out">
              Volunteer
            </li>
          </Link>
          <Link 
            href="/contact"
            onClick={(e) => {
              e.preventDefault()
              closeMenuAndNavigate("/contact")
            }}
          >
            <li className="my-4 py-4 border-b border-[#30302f] hover:bg-[#30302f] hover:rounded hover:text-slate-200 hover:transition hover:duration-200 hover:ease-in-out">
              Contact
            </li>
          </Link>
        </ul>
       </div>
    </section>
  );

  return (
    <nav className="relative px-12 lg:px-24  p-8 ">
      <div className="flex items-center justify-between text-slate-200">
        <section className="flex items-center gap-x-3 font-bold text-sm lg:text-sm xl:text-2xl 2xl:text-2xl">
          <Image
            height={20} 
            loading="lazy"
            src="https://i.postimg.cc/htyhZ9yd/lg.png" alt="logo" 
            width={50}
            className="w-10 lg:w-14 xl:w-14 2xl:w-16"
          />
          <h1 className="font-bold text-[16px] lg:text-[20px] xl:text-xl 2xl:text-2xl">Daisy Knight Dog Park</h1>
        </section>
          <ul className="text-[15px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] lg:flex xl:flex 2xl:flex hidden gap-x-5 font-bold uppercase">
            <li>
              <Link className={`py-1 hover:border-b-2 hover:shadow-sm border-slate-300 hover:transition hover:text-slate-300 hover:duration-200 hover:ease-in-out 
                ${activeLink === "/" ? "py-1 border-b-2": "" }`} 
                href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={`py-1 hover:border-b-2 hover:shadow-sm border-slate-300 hover:transition hover:text-slate-300  hover:duration-200 hover:ease-in-out
              ${activeLink === "/about" ? "py-1 border-b-2": "" }`} 
              href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className={`py-1 hover:border-b-2 hover:shadow-sm border-slate-300 hover:transition hover:text-slate-300  hover:duration-200 hover:ease-in-out
               ${activeLink === "/donate" ? "py-1 border-b-2": "" }`} 
              href="/donate">
                Donate
              </Link>
            </li>
            <li>
              <Link className={`py-1 hover:border-b-2 hover:shadow-sm border-slate-300 hover:transition hover:text-slate-300  hover:duration-200 hover:ease-in-out
               ${activeLink === "/volunteer" ? "py-1 border-b-2": "" }`} 
              href="/volunteer">
                Volunteer
              </Link>
            </li>
            <li>
              <Link className={`py-1 hover:border-b-2 hover:shadow-sm border-slate-300 hover:transition hover:text-slate-300 hover:duration-200 hover:ease-in-out
               ${activeLink === "/contact" ? "py-1 border-b-2": "" }`} 
              href="/contact">
                Contact
              </Link>
            </li>
          </ul>

          <button
            aria-label="Botón para abrir menu"
            type="button" 
            className="text-[32px] lg:hidden xl:hidden 2xl:hidden text-3xl"
            onClick={handleClick}
          >
            {
              !open ? <FiAlignJustify  /> : ""
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