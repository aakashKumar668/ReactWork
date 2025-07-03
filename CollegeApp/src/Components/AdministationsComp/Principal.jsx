import React from 'react'
import collageBackground from "../../assets/Images/collegeBackground.jpg"
import PrincipalImage from "../../assets/Images/Principal.png"
const Principal = () =>
{
  return (
    <>
      <div className='w-full'>
        <div className='w-full bg-[#03031cd6] px-[50px] sm:py-[20px] py-[10px]'><h1 className='text-white sm:text-6xl text-2xl font-bold'>Principal</h1></div>
        <div className=' relative overflow-hidden'>
          <div className=' absolute z-[-99] '>
            <img src={collageBackground} alt="" />
          </div>
          <div className='z-[10] w-full m-auto sm:py-[60px] sm:px-[100px] bg-[#000000ba] px-[30px] py-[20px] h-[35vh] sm:h-auto overflow-scroll sm:overflow-hidden'>

            <div className='sm:w-[50%] sm:px-[100px] text-gray-300 w-full'>
              <img src={PrincipalImage} alt="" className='rounded sm:h-[400px] sm:w-[500px] h-[150px]  my-[10px]' />
              <h3 className='sm:text-xl font-bold'>Dr. Emily Watson</h3>
              <p className='text-red-400'> M.A., M.Ed., Ph.D. in Educational Leadership </p>
              <p className='text-green-400'>"We strive to nurture not only intellect, but also character. Education is the key to a better world."</p>
            </div>
            <p className='text-white sm:text-[18px] font-[500] my-[20px] sm:mx-[130px] text-[10px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore non repudiandae fugiat eos beatae maiores, et tempore sint deserunt nobis temporibus officiis perspiciatis placeat eius, consequatur possimus enim pariatur a ratione unde blanditiis laborum! Tenetur corporis facilis rerum, omnis magni adipisci? Explicabo perspiciatis voluptas laboriosam recusandae voluptate eos, reiciendis eveniet nesciunt. Quidem impedit laborum commodi quaerat. Illo, qui ro voluptate commodi sit in dolores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quod neque reprehenderit, nulla ipsa nostrum ipsum maxime voluptate recusandae voluptatibus! Explicabo et animi ipsum doloribus voluptate dicta doloremque voluptatum illo.</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Principal