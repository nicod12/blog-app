"use client"
import Link from "next/link";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
      <ul className="text-center text-xl p-20">
        <Link href="/">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Home
          </li>
        </Link>
        <Link href="/about">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            About Us
          </li>
        </Link>
        <Link href="/donate">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Donate
          </li>
        </Link>
        <Link href="/volunteer">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Volunteer
          </li>
        </Link>
        <Link href="/contact">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Contact
          </li>
        </Link>
      </ul>
    </div>
  );

  return (
    <nav className="md:px-24 lg:px-40 xl:px-40 2xl:px-40 mt-16 mb-10">
      <div className="flex justify-between text-slate-200">
        <section>
          <h1>LOGO</h1>
        </section>
          <ul className="md:flex lg:flex xl:flex 2xl:flex hidden gap-x-5 font-bold uppercase">
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


      </div>
    </nav>
  );
};

export default Navbar;