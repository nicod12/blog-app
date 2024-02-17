"use client"


const FormComp = () => {
  return (
        <form className="w-[280px] lg:w-[320px] xl:w-[380px] 2xl:w-[420px] h-full mx-auto p-6 lg:p-8 xl:p-10 2xl:p-12 mt-6 bg-white shadow-md rounded-md relative z-10">
        <div className="mb-4 relative z-10">
        <label htmlFor="Name" className="block text-sm  text-black font-bold">
            Name:
        </label>
        <input
            type="text"
            id="Name"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
            placeholder="Name"
        />
        </div>
        <div className="mb-4 relative z-10">
        <label htmlFor="email" className="block text-sm text-black font-bold">
            Email:
        </label>
        <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
            placeholder="Email"
        />
        </div>
        <div className="mb-4 relative z-10">
        <textarea
            id="message"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
            placeholder="Write your message "
        />
        </div>


        <button
            className="bg-blue-700 text-white p-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:border-blue-500 relative z-10 w-full font-bold uppercase"
            aria-label="donate"
            type="submit"
            onClick={(e) => {
                e.preventDefault()
                alert("Message sent successfully")
            }}
        >
            Send
        </button>

    </form>
  )
}

export default FormComp