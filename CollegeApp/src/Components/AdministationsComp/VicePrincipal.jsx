import React from 'react'
import collageBackground from "../../assets/Images/collegeBackground.jpg"
import VicePrincipalImage from "../../assets/Images/VicePrincipal.png"
const VicePrincipal = () =>
{
  return (
    <>
      <div className='w-full'>
        <div className='w-full bg-[#03031cd6] px-[50px] sm:py-[20px] py-[10px]'><h1 className='text-white sm:text-6xl text-2xl font-bold'>Vice Principal</h1></div>
        <div className=' relative overflow-hidden'>
          <div className=' absolute z-[-99] '>
            <img src={collageBackground} alt="" />
          </div>
          <div className='z-[10] w-full m-auto sm:py-[60px] sm:px-[100px] bg-[#000000ba] px-[30px] py-[20px] h-[35vh] sm:h-auto overflow-scroll sm:overflow-hidden'>

            <div className='sm:w-[50%] sm:px-[100px] text-gray-300 w-full'>
              <img src={VicePrincipalImage} alt="" className='rounded sm:h-[400px] sm:w-[500px] h-[150px]  my-[10px]' />
              <h3 className='text-xl font-bold'>Mr. Jonathan Blake</h3>
              <p className='text-red-400'> M.A. in English Literature, B.Ed. </p>
              <p className='text-green-400'>"Discipline and creativity go hand in hand. We aim to create a campus where both flourish."</p>
            </div>
            <p className='text-white sm:text-[18px] font-[500] my-[20px] sm:mx-[130px] text-[10px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore non repudiandae fugiat eos beatae maiores, et tempore sint deserunt nobis temporibus officiis perspicim impedit laborum commodi quaerat. Illo, qui ro voluptate commodi sit in dolores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quod neque reprehenderit, nulla ipsa nostrum ipsum maxime voluptate recusandae voluptatibus! Explicabo et animi ipsum doloribus voluptate dicta doloremque voluptatum illo.</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default VicePrincipal