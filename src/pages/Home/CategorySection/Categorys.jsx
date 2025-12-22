import Dog from '/pet2.jpg'
import Bird from '/bird2.avif'
import Cat from '/pet26.avif'
import Fish from '/fish5.avif'
import Rabbit from '/pet4.jpeg'
import Duck from '/Duck1.jpeg'

const Categorys = () => {
  return (
    <div className='w-full bg-[#002169] px-25 py-30 text-center'>
      <h1 className='text-3xl font-semibold text-white ' >Available Categoy For Adoption</h1>
      <p className='plus text-[#8FA5D6] px-5 '>We will work with you to develop individualised care plans, including management chronic diseases </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
        <div data-aos="flip-up" className='bg-white p-5 rounded-lg cursor-pointer hover:shadow-lg '>
          <img className='w-56 h-50 mx-auto rounded-4xl hover:scale-105' src={Dog} alt="Dog Icon" />
          <h2 className='mt-2 font-semibold'>Dogs</h2>
        </div>
        <div data-aos="flip-up" className='bg-white p-5 rounded-lg cursor-pointer hover:shadow-lg '>
          <img className='w-56 h-50 mx-auto rounded-4xl hover:scale-105' src={Cat} alt="Cat Icon" />
          <h2 className='mt-2 font-semibold'>Cats</h2>
        </div>
        <div data-aos="flip-up" className='bg-white p-5 rounded-lg cursor-pointer hover:shadow-lg '>
          <img className='w-56 h-50 mx-auto rounded-4xl hover:scale-105' src={Bird} alt="Bird Icon" />
          <h2 className='mt-2 font-semibold'>Birds</h2>
        </div>
        <div data-aos="flip-up" className='bg-white p-5 rounded-lg cursor-pointer hover:shadow-lg '>
          <img className='w-56 h-50 mx-auto rounded-4xl hover:scale-105' src={Rabbit} alt="Rabbit Icon" />
          <h2 className='mt-2 font-semibold'>Rabbits</h2>
        </div>
        <div data-aos="flip-up" className='bg-white p-5 rounded-lg cursor-pointer hover:shadow-lg '>
          <img className='w-56 h-50 mx-auto rounded-4xl hover:scale-105' src={Fish} alt="Fish Icon" />
          <h2 className='mt-2 font-semibold'>Fishes</h2>
        </div>
        <div data-aos="flip-up" className='bg-white p-5 rounded-lg cursor-pointer hover:shadow-lg '>
          <img className='w-56 h-50 mx-auto rounded-4xl hover:scale-105' src={Duck} alt="Duck Icon" />
          <h2 className='mt-2 font-semibold'>Duck</h2>
        </div>

      </div>
    </div>
  );
};

export default Categorys;