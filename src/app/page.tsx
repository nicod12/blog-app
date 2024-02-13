

export default function Home() {
  return (
    <main>  
      <section className=" flex  flex-col lg:flex-row xl:flex-row 2xl:flex-row lg:gap-5 xl:gap-5 2xl:gap-8 justify-center items-center mt-10 lg:mt-14 xl:mt-14 2xl:mt-14">
       <div className="m-2 p-0 lg:p-12 xl:p-12 2xl:p-4">
        <h2 className="text-5xl lg:text-7xl xl:text-7xl 2xl:text-8xl shadow-sm">Daisy Knight</h2>
        <h3 className="text-5xl lg:text-7xl xl:text-7xl 2xl:text-8xl shadow-sm">Dog Park.</h3>
        <h3 className="text-[15px] lg:text-[22px] xl:text-[22px] 2xl:text-[26px]  mt-6 text-gray-500 shadow-sm uppercase">A great place to <span className="text-orange-400 border-b-2 py-1 border-orange-400">walk your pets</span></h3>

        <div className="mt-10 flex gap-4 items-center w-auto">
          <button className="border-2 border-[#242321] shadow-md lg:shadow-md xl:shadow-lg 2xl:shadow-lg px-6 lg:px-10 xl:px-8 2xl:px-12 py-3 lg:py-4 xl:py-5 2xl:py-4 rounded-full text-sm lg:text-lg xl:text-lg 2xl:text-xl text-white font-bold uppercase">Location</button>
          <button className="border-2 border-[#242321] shadow-md lg:shadow-md xl:shadow-lg 2xl:shadow-lg  px-6 lg:px-10 xl:px-8 2xl:px-12 py-3 lg:py-4 xl:py-5 2xl:py-4  rounded-full  text-sm lg:text-lg xl:text-lg 2xl:text-xl flex items-center gap-x-2 lg:gap-x-4 xl:gap-x-4 2xl:gap-x-4 text-white font-bold bg-[#201f1d] uppercase">
            <img src="https://i.postimg.cc/pV1dLQLw/huella.png" alt="huella" width={20} className="w-4 lg:w-6 xl:w-6 2xl:w-8"  />Hours
          </button>
        </div>
       </div>

       <div className="flex items-center justify-center mt-6 lg:ml-8 xl:ml-8 2xl:ml-8">
        <img width={210} src="https://i.postimg.cc/3w8MFfZf/dog.webp" alt="img"  className="px-2 lg:w-[300px] xl:w-[300px] 2xl:w-[350px]"/>
       </div>
      </section>
    </main>
  );
}
