import Link from "next/link"


const Nabvar = () => {
  const content = <>
    <div>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/donate">
            Donate
          </Link>
        </li>
        <li>
          <Link href="/volunteer">
            Volunteer
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </>
  return (
    <nav className="md:px-24 px-40 mt-16 mb-10">
       <div className="flex justify-between text-slate-200">
        <section>
          <h1>LOGO</h1>
        </section>
        <ul className=" md:flex lg:flex xl:flex 2xl:flex hidden gap-x-5 font-bold uppercase">
              <li>
                <Link  className="py-2 hover:border-b-2 hover:shadow-sm border-slate-300 hover:transition hover:text-slate-300" href="/about">
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
  )
}

export default Nabvar