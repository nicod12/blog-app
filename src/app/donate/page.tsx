"use client"
import Link from "next/link"
import { SiMercadopago } from "react-icons/si";
import { FaCcPaypal } from "react-icons/fa";
import { IoCardSharp } from "react-icons/io5";



export default function DonatePage() {
    return(
        <section className="flex flex-col items-center mt-10">
            <h2 className="text-orange-400 text-[22px] lg:text-[25px] xl:text-[26px] 2xl:text-[30px]">Donations</h2>
            <p className="py-4 lg:py-8 px-8 text-center text-gray-300 text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, incidunt inventore ullam voluptatibus laboriosam illum voluptates similique. Commodi repellat quasi error atque nobis, similique obcaecati cum temporibus, minima pariatur aspernatur?
            Aliquid nisi minus, repellendus, mollitia doloribus ad modi est eveniet minima atque possimus impedit explicabo! Est assumenda quae rem eveniet dolorem quod reiciendis eius harum alias quam deleniti, atque officia.
            Perferendis blanditiis totam nesciunt ducimus illum earum, molestiae sit ad quasi excepturi beatae nam quos error. Voluptas, molestias! Officiis officia eveniet non, corporis repellendus earum porro nulla assumenda ipsa nesciunt?
            Doloribus laborum delectus voluptate fuga, ipsum cupiditate fugiat consequuntur mollitia sit et? Quisquam nihil neque laudantium tempora distinctio explicabo voluptatibus, totam, doloremque expedita dicta voluptatum quasi nulla, natus qui ipsum?</p>

            <div className="mt-8 p-8">
                <ul className="grid grid-cols-3 gap-8 lg:gap-10">
                <li>
                    <Link href="https://www.mercadopago.com.ar/" className="text-[45px] lg:text-[58px] xl:text-[58px] 2xl:text-[60px]">
                        <SiMercadopago />
                        <span className="sr-only">Mercado Pago</span>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.paypal.com/" className="text-[45px] lg:text-[58px] xl:text-[58px] 2xl:text-[60px]">
                        <FaCcPaypal />
                        <span className="sr-only">PayPal</span>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.example.com/" className="text-[45px] lg:text-[58px] xl:text-[58px] 2xl:text-[60px]">
                        <IoCardSharp />
                        <span className="sr-only">Card</span>
                    </Link>
                </li>
                </ul>
            </div>
        </section>
    )
}

