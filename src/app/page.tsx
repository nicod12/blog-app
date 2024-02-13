

export default function Home() {
  return (
    <main>  
      <section className=" flex flex-col justify-center items-center mt-10">
       <div className="m-2">
        <h2 className="text-5xl shadow-sm">Daisy Knight</h2>
        <h3 className="text-5xl shadow-sm">Dog Park.</h3>
        <h3 className="text-[15px] mt-6 text-gray-500 shadow-sm uppercase">A great place to <span className="text-orange-400 border-b-2 py-1 border-orange-400">walk your pets</span></h3>

        <div className="mt-10 flex gap-4 items-center w-auto">
          <button className="border-2 border-[#242321] shadow-md px-6 py-3 rounded-full text-sm text-white font-bold uppercase">Location</button>
          <button className="border-2 border-[#242321] shadow-md  px-6 py-3 rounded-full  text-sm flex items-center gap-x-2 text-white font-bold bg-[#201f1d] uppercase">
            <img src="https://i.postimg.cc/pV1dLQLw/huella.png" alt="huella" width={20} />Hours
          </button>
        </div>
       </div>

       <div className="flex items-center justify-center mt-6">
        <img width={210} src="https://i.postimg.cc/3w8MFfZf/dog.webp" alt="img"  className="px-2"/>
       </div>
      </section>
    </main>
  );
}
