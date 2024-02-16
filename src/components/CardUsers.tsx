import Image from "next/image";

async function loadUsers() {
    const res = await fetch("https://reqres.in/api/users");
    const data = await res.json();
    return data;
  }


  export default async function CardUsers() {
   const users = await loadUsers()

     return(
        <section className=" grid gap-3 lg:gap-0 lg:grid-cols-3 lg:p-6 xl:gap-0 xl:grid-cols-3 xl:p-6 2xl:gap-0 2xl:grid-cols-3 2xl:p-6">
        {users.data.map((user: any) => (
          <div key={user.id} className="grid grid-cols-1 border border-gray-200 lg:border-0">
            <article className="relative">
              <Image 
                className="relative"
                width={180}
                height={200}
                src={user.avatar} 
                alt={`Avatar of ${user.first_name}`} 
                loading="eager"
              />
              <h3 className="absolute -bottom-4 left-2 transform -translate-y-1/2 text-black font-bold text-[22px]">
                {`${user.first_name} ${user.last_name}`}
              </h3>
            </article>
          </div>
        ))}

      </section>
     )
  }