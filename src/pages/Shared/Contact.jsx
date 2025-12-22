import { GoArrowUpRight } from "react-icons/go";

const Contact = () => {
  return (
    <div className='bg-[#062871] text-white text-center py-20 lg:flex items-center justify-center gap-10'>
      <h1 className='text-3xl font-semibold mb-5 lg:mb-0'>Sign Up For Newsletter!</h1>
      <input type="text" placeholder='Type Your E-mail' className='p-3 lg:w-5/12 w-7/12 rounded-4xl border bg-white placeholder:text-gray-500 placeholder:font-semibold placeholder:text-xl ' />
      <button type="submit" className='font-semibold bg-[#894B8D] p-3 px-5 rounded-4xl -ml-16 lg:-ml-20 text-xl' >Subscribe <GoArrowUpRight className="inline text-2xl mb-1" /> </button>
    </div>
  );
};

export default Contact;