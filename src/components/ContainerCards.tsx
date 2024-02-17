"use client"
import Image from "next/image"
import { Button } from "./Button"
import { useRouter } from "next/navigation";



const ContainerCards = () => {
    const router = useRouter()



    
  return (
   <section className="lg:mt-48  xl:mt-48 2xl:mt-48 lg:grid lg:grid-cols-3 lg:items-center xl:grid xl:grid-cols-3 xl:items-center 2xl:grid 2xl:grid-cols-3 2xl:items-center 2xl:gap-8">
     <article className="text-black mt-36 lg:mt-0 xl:mt-0 2xl:mt-0 w-[300px]  xl:w-[380px] 2xl:w-[500px]">
        <div className="border border-gray-100 px-2 py-6 mx-6 shadow-md flex flex-col items-center relative rounded">
             <Image
                height={20} 
                loading="lazy"
                src="https://i.postimg.cc/MG0zLTP6/dog-call.png" alt="img"
                width={500}
                className="absolute top-[-106px] w-[120px]"
             />   
            <h2 className=" text-[20px] xl:text-[24px] 2xl:text-[24px] font-mono">D<span className="border-b-2 py-3 border-orange-400">ona</span>te</h2>
            <p className="text-gray-600 xl:text-[18px] 2xl:text-[18px] text-center p-[35px] lg:p-[44px] xl:p-[48px] 2xl:p-[34px] m-4">Lorem ipsum dolor sit amet consectetur.</p>
            <Button 
                className="text-gray-600 lg:hover:text-gray-700 xl:hover:text-gray-700 2xl:hover:text-gray-700 border lg:border-2 xl:border-2 2xl:border-2 border-orange-400 lg:hover:border-orange-500 xl:hover:border-orange-500 2xl:hover:border-orange-500 py-2 px-4 rounded-full font-bold" 
                value="Learn More"
                onClick={() => {router.push('/donate')}}
            />
        </div>

    </article>
    <article className="text-black mt-36 lg:mt-0 xl:mt-0 2xl:mt-0 w-[300px]  xl:w-[380px] 2xl:w-[500px]">
        <div className="border border-gray-100 px-2 py-6 mx-6 shadow-md flex flex-col items-center relative rounded">
             <Image
                height={20}
                loading="lazy" 
                src="https://i.postimg.cc/gJ01Kk1B/dog-gafass.png" alt="img"
                width={500}
                className="absolute top-[-120px] w-[120px]"
             />   
            <h2 className=" text-[20px] xl:text-[24px] 2xl:text-[24px] font-mono">Spri<span className="border-b-2 py-2 border-orange-400">ng 2</span>024!</h2>
            <p className="text-gray-600 xl:text-[18px] 2xl:text-[18px] text-center p-2 m-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo quidem blanditiis inventore laborum ut saepe? Consequuntur?</p>
            <Button 
                className="text-gray-600 lg:hover:text-gray-700 xl:hover:text-gray-700 2xl:hover:text-gray-700 border lg:border-2 xl:border-2 2xl:border-2 border-orange-400 lg:hover:border-orange-500 xl:hover:border-orange-500 2xl:hover:border-orange-500 py-2 px-4 rounded-full font-bold" 
                value="Learn More"
                onClick={() => {router.push('/about')}}
            />
        </div>

    </article>
    <article className="text-black mt-44 lg:mt-0 xl:mt-0 2xl:mt-0 w-[300px] xl:w-[380px] 2xl:w-[500px]">
        <div className="border border-gray-100 px-2 mx-6 py-6 shadow-md flex flex-col items-center relative rounded">
             <Image
                height={20}
                loading="lazy" 
                src="https://i.postimg.cc/fRfw2ygw/dog-listening.png" alt="img"
                width={500}
                className="absolute top-[-112px] w-[110px]"
             />   
            <h2 className=" text-[20px] xl:text-[24px] 2xl:text-[24px] font-mono">Vol<span className="border-b-2 border-orange-400 py-2">unt</span>eer</h2>
            <p className="text-gray-600 xl:text-[18px] 2xl:text-[18px] text-center p-2 lg:p-[20px] xl:p-[22px] 2xl:p-[10px] m-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque iusto consequatur ea iste quibusdam.</p>
            <Button 
                className="text-gray-600 lg:hover:text-gray-700 xl:hover:text-gray-700 2xl:hover:text-gray-700 border lg:border-2 xl:border-2 2xl:border-2  border-orange-400 lg:hover:border-orange-500 xl:hover:border-orange-500 2xl:hover:border-orange-500 py-2 px-4 rounded-full font-bold"
                value="Learn More"
                onClick={() => {router.push('/volunteer')}}
            />
        </div>

    </article>
   </section>
  )
}

export default ContainerCards