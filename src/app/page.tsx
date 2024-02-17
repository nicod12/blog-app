"use client"
import { Button } from "@/components/Button";
import ContainerCards from "@/components/ContainerCards";
import Image from "next/image";




export default function Home() {


  
  return (
    <main className="flex flex-col justify-center items-center">  
      <section className=" flex  fixed z-40 flex-col lg:flex-row xl:flex-row 2xl:flex-row lg:gap-5 xl:gap-5 2xl:gap-8 justify-center items-center mt-10 lg:mt-14 xl:mt-14 2xl:mt-14">
       <div className="m-2 p-0 lg:p-12 xl:p-12 2xl:p-4">
        <h2 className="text-5xl lg:text-7xl xl:text-7xl 2xl:text-7xl shadow-sm">Daisy Knight</h2>
        <h3 className="text-5xl lg:text-7xl xl:text-7xl 2xl:text-7xl shadow-sm">Dog Park.</h3>
        <h3 className="text-[15px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px]  mt-6 text-gray-200 shadow-sm uppercase">A great place to <span className="text-orange-400 border-b-2 py-1 border-orange-400">walk your pets</span></h3>

        <div className="mt-10 flex gap-4 items-center w-auto">
          <Button 
            className="border-2 border-[#242321] shadow-md lg:shadow-md xl:shadow-lg 2xl:shadow-lg px-6 lg:px-10 xl:px-10 2xl:px-10 py-3 lg:py-3 xl:py-4 2xl:py-4 rounded-full text-sm lg:text-lg xl:text-lg 2xl:text-lg text-white font-bold uppercase" 
            value="Location"
          />

          <Button  
            className="border-2 border-[#242321] shadow-md lg:shadow-md xl:shadow-lg 2xl:shadow-lg  px-6 lg:px-10 xl:px-10 2xl:px-10 py-3 lg:py-4 xl:py-4 2xl:py-3 rounded-full  text-sm lg:text-lg xl:text-lg 2xl:text-lg flex items-center gap-x-2 lg:gap-x-4 xl:gap-x-4 2xl:gap-x-4 text-white font-bold bg-[#201f1d] uppercase" 
            value="Hours">
              <Image 
                className="w-4 lg:w-6 xl:w-6 2xl:w-8"
                loading="lazy"
                src="https://i.postimg.cc/pV1dLQLw/huella.png"
                alt="huella"
                width={20}
                height={20} 
              />
          </Button>
        </div>
       </div>

       <div className="flex items-center justify-center mt-6 lg:ml-8 xl:ml-8 2xl:ml-8">
       <Image
        src="https://i.postimg.cc/CKw2CN4w/doggi.png" // Ajusta la ruta según tu estructura de carpetas
        alt="img"
        height={200}
        width={300}
        className="px-2 w-48 lg:w-[300px] xl:w-[300px] 2xl:w-[320px]"
        loading="eager"
      />
       </div>
      </section>
      <section className="bg-white mt-24 lg:mt-36 xl:mt-36 2xl:mt-36 py-16 lg:px-20 xl:px-22 2xl:px-24 flex flex-col items-center justify-center w-full">
        <article className="flex flex-col items-center justify-center">
         <Image 
          height={100}
          loading="lazy" 
          src="https://i.postimg.cc/pV1dLQLw/huella.png" 
          width={100} 
          alt="image" 
          className="lg:w-28 xl:w-28 2xl:w-32"
         />

          <div>
            <h2 className="text-black font-bold text-[22px] lg:text-[25px] xl:text-[27px] 2xl:text-[30px]">Welco<span className="border-b-2  border-orange-400 py-2">me</span> Home</h2>
          </div>
          <p className="text-gray-600 p-6 text-center mt-4 lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, placeat! Officiis quam odio quas. Excepturi provident repudiandae iure unde eos?</p>
        </article>
        <ContainerCards />
      </section>
      <section className="p-14 mt-6 relative">
        <Image
          height={300}
          width={300} 
          loading="lazy"
          src="https://i.postimg.cc/DzQPFThd/dog-1.png"
          alt="image"
          className="w-44 lg:w-48 xl:w-48 2xl:w-60 mx-auto" 
        />
        <div className="absolute bottom-0 p-2 left-0 right-0 text-center">
          <h2 className="mx-auto text-[15px] lg:text-[18px] xl:text-[18px] 2xl:text-[24px] font-bold xl:mt-4 2xl:mt-6 text-gray-300">Daisy Knigth Dog Park</h2>
    
        </div>
      </section>

    </main>
  );
}
