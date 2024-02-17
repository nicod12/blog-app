import Image from "next/image";
import 'animate.css';

async function loadUsers() {
    const res = await fetch("https://reqres.in/api/users");
    const data = await res.json();
    return data;
  }


  export default async function CardUsers() {
   const users = await loadUsers()

     return(
    <section className={`grid gap-3 lg:gap-0 lg:grid-cols-3 lg:p-6 xl:gap-0 xl:grid-cols-3 xl:p-6 2xl:gap-0 2xl:grid-cols-3 2xl:p-6 relative z-10  animate__animated animate__backInUp animate__delay-2s`}>
      {users.data.map((user: any) => (
        <div key={user.id} className="grid grid-cols-1 border border-gray-200 lg:border-0 relative ">
          <article className="relative overflow-hidden transition-transform transform hover:scale-110 ">
            <Image 
              width={180}
              height={200}
              src={user.avatar} 
              alt={`Avatar of ${user.first_name}`} 
              loading="eager"
            />
            <h3 className="absolute inset-0 flex items-center justify-center text-black font-bold text-center text-[22px] bg-gray-800 bg-opacity-75 p-22">
              {`${user.first_name} ${user.last_name}`}
            </h3>
          </article>
        </div>
      ))}
    </section>



     )
  }