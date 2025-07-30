import React from 'react'
import DepartmentList from "../../assets/DataList/DepartmentList"
import collageBackground from "../../assets/Images/collegeBackground.jpg"
const Department = () =>
{
  const getRandomColor = () =>
  {
    const colors = ["#FF5733", "#33C1FF", "#75FF33", "#FF33E6", "#FFD133", "#8E44AD"];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <>
      <div className='w-full'>
        <div className='w-full bg-[#03031cd6] px-[50px] sm:py-[20px] py-[10px]'><h1 className='text-white sm:text-6xl text-2xl font-bold'>Departments</h1></div>
        <div className='bg-fixed bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url(${collageBackground})` }}>
          {/* <div className=' absolute z-[-99] '>
         <img src={collageBackground} alt="" />
     </div> */}
          <div className='z-[10] w-full m-auto sm:py-[60px] sm:px-[100px] bg-[#000000ba] px-[10px] py-[20px] sm:h-auto'>
            {DepartmentList.map((item, i) => <button key={i} className='sm:py-[15px] py-1.5 px-3 sm:px-[35px] sm:text-xl font-bold border-b-[4px] rounded hover:scale-[1.03] transition duration-300 ease-in-out hover:text-white my-[3px] mx-[2px]' style={{
              backgroundColor: getRandomColor(),
            }}> {item}</button>)}
          </div>
        </div>

      </div>
    </>
  )
}

export default Department