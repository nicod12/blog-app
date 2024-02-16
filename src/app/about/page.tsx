"use client"
import Image from "next/image";

export default function AboutPage() {
    return(
       <section className="flex flex-col justify-center items-center mt-12" >
            <div className="flex flex-col justify-center items-center px-12">
                <article className="px-2 my-4">
                    <h2 className="text-orange-400 text-center text-[25px]">- About Us</h2>
                    <p className="text-gray-300 px-4 py-2 text-center text-[17px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint deserunt, iure ab numquam inventore optio dolorum cumque labore rem modi, accusamus nesciunt quibusdam error nam ipsum odit facilis exercitationem id.</p>
                </article>
                <article className="my-4 border border-white rounded-sm w-[250px]">
                    <Image 
                        src="https://i.postimg.cc/P50tqQx6/edit1.jpg" 
                        alt="imagen"
                        width={350}
                        height={20}
                        className="w-[250px]"
                        loading="eager" 
                    />
                </article>
                <article className="my-4 border border-white rounded-sm w-[250px]">
                    <Image 
                        src="https://i.postimg.cc/fbkB8Yfh/edit2.jpg" 
                        alt="imagen"
                        width={350}
                        height={20}
                        className="w-[250px]"
                        loading="lazy"
                        />
                </article>
                <article className="my-4 border border-white rounded-sm w-[250px]">
                    <Image 
                        src="https://i.postimg.cc/TwJLm452/edt3i.jpg" 
                        alt="imagen" 
                        width={350}
                        height={20}
                        className="w-[250px]"
                        loading="lazy"
                        />
                </article>
            </div>
       </section>
    )
}

