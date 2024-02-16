"use client"

import Image from "next/image"


export default function DonatePage() {
    return(
        <section className="flex flex-col items-center mt-10">
            <h2 className="text-orange-400 text-[22px]">Donations</h2>
            <p className="py-4 px-8 text-center text-gray-300 text-[16px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum assumenda natus possimus?</p>
        <form className="max-w-md mx-auto p-6 mt-6 bg-white shadow-md rounded-md relative">
                <Image
                src="https://i.postimg.cc/kXwgCNGM/background.png"
                alt="bg"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                width={400}
                height={20}
            />
            <div className="mb-4 relative z-10">
                <label htmlFor="nombre" className="block text-sm  text-black font-bold">
                    Nombre:
                </label>
                <input
                    type="text"
                    id="nombre"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
                    placeholder="Nombre"
                />
            </div>
            <div className="mb-4 relative z-10">
                <label htmlFor="email" className="block text-sm text-black font-bold">
                    Correo:
                </label>
                <input
                    type="email"
                    id="email"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
                    placeholder="Correo"
                />
            </div>
            <div className="mb-4 relative z-10">
                <label htmlFor="donate" className="block text-sm text-black font-bold">
                    $:
                </label>
                <input
                    type="number"
                    id="donate"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
                    placeholder="0"
                />
            </div>


            <button
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 relative z-10"
                aria-label="donate"
                type="submit"
            >
                Donate
            </button>
      </form>
        </section>
    )
}

