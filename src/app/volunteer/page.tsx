import CardUsers from "@/components/CardUsers";


export default  function VolunteerPage() {
    return(
        <section className="flex flex-col justify-center items-center mt-20 py-4">
            <h2 className="text-center text-orange-400 text-lg lg:text-2xl">Our Volunteers</h2>
            <p className="text-center py-4 px-8 text-sm lg:text-lg text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui dignissimos asperiores dolorum repellat placeat modi dicta eveniet at libero?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui dignissimos asperiores dolorum repellat plac Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui dignissimos asperiores dolorum repellat plac Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Qui dignissimos asperiores dolorum repellat plac
            </p>
            <CardUsers />

            <button 
                className="mt-7 rounded-full  py-3 font-bold px-6 bg-blue-700 hover:bg-blue-800 hover:text-gray-200 transition duration-300"
                aria-label="Join Team"
            >
                Join Our Team
            </button>
        </section>
    )
}

