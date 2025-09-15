import { FaHeart } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen px-6 md:px-10 lg:px-16 pt-10">
      <h1 className="tim text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-[#D0B4B3]">
        Contact Us
      </h1>
      <p className="p-regular text-lg md:text-xl lg:text-2xl max-w-2xl pt-4 text-gray-800">
        May it be{" "}
        <span className="text-gray-900 font-bold">
          feedback, ideas, or support…
        </span>
      </p>
      <p className="pb-2 pt-2 p-regular text-sm md:text-md max-w-2xl text-gray-800">
        We would love to hear from you! Get in touch by filling out the contact
        form or calling us on our office number.
      </p>
      <a href="tel:+61 415724571">
        <button className="bg-[#D0B4B3] hover:scale-95 transition-all duration-300 py-2 px-4 rounded cursor-pointer text-black p-regular text-sm mt-4 flex items-center gap-2">
          Make a Call <IoMdCall />
        </button>
      </a>

      {/* Contact Form Section */}
      <div className="mt-20 pb-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Contact Form */}
        <form className="flex flex-col gap-3 w-full p-normal">
          <label className="font-medium text-gray-800">Name</label>
          <div className="flex">
            <span className="flex items-center px-3 text-sm text-gray-900 bg-[#D0B4B3] border border-e-0 border-[#D0B4B3] rounded-s-md">
              <svg
                className="w-5 h-5 text-[#ffe8e7]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </span>
            <input
              type="text"
              className="w-full text-black border border-[#D0B4B3] outline-none px-4 py-2 rounded-r-md bg-white"
              placeholder="John Doe"
            />
          </div>

          <label className="font-medium text-gray-800">Email</label>
          <div className="flex">
            <span className="flex items-center px-3 text-sm text-gray-900 bg-[#D0B4B3] border border-e-0 border-[#D0B4B3] rounded-s-md">
              <svg
                className="w-5 h-5 text-[#ffe8e7]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 18V8.236l7.385 5.905a1 1 0 0 0 1.23 0L20 8.236V18H4Z" />
              </svg>
            </span>
            <input
              type="email"
              className="w-full text-black border border-[#D0B4B3] outline-none px-4 py-2 rounded-r-md bg-white"
              placeholder="johndoe@gmail.com"
            />
          </div>

          <label className="font-medium text-gray-800">Phone Number</label>
          <div className="flex">
            <span className="flex items-center px-3 text-sm text-gray-900 bg-[#D0B4B3] border border-e-0 border-[#D0B4B3] rounded-s-md">
              <svg
                className="w-5 h-5 text-[#ffe8e7]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .56 2.57 2 2 0 0 1-.45 2.11L9 10.91a16 16 0 0 0 6.09 6.09l1.51-1.11a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.57.56A2 2 0 0 1 22 16.92Z" />
              </svg>
            </span>
            <input
              type="tel"
              className="w-full text-black border border-[#D0B4B3] outline-none px-4 py-2 rounded-r-md bg-white"
              placeholder="+1 (555) 971 569"
            />
          </div>

          <label className="font-medium text-gray-800">Message</label>
          <textarea
            rows="5"
            placeholder="Hi, I want to Travel"
            className="text-black border border-[#D0B4B3] outline-none px-4 py-2 rounded bg-white resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-[#D0B4B3] hover:scale-95 transition-all duration-300 text-black cursor-pointer py-2 px-4 rounded mt-2 flex items-center gap-2 w-fit text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              />
            </svg>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;