import React from 'react'
import collageBackground from "../../assets/Images/collegeBackground.jpg"
import Programme from "../../assets/DataList/Programmes"
const Programmes = () =>
{
  return (
    <>
      <div className='w-full'>
        <div className='w-full bg-[#03031cd6] px-[50px] sm:py-[20px] py-[10px]'><h1 className='text-white sm:text-6xl text-2xl font-bold'>Programmes Offered</h1></div>
        <div className='bg-fixed bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url(${collageBackground})` }}>
          {/* <div className=' absolute z-[-99] '>
        <img src={collageBackground} alt="" />
    </div> */}
          <div className='z-[10] w-full m-auto sm:py-[60px] sm:px-[100px] bg-[#000000ba] px-[10px] py-[20px] sm:h-auto'>

            <div className='sm:w-[50%] w-full sm:px-[100px] px-[20px] text-gray-300'>
              <div>
                <h4 className='text-white underline text-xl font-bold list-outside'>Undergraduate Programmes</h4>
                <ol className='list-[decimal-leading-zero] text-[15px]'>
                  {
                    Programme[0].graduateCourses.map((item, i) =>
                    {
                      return (
                        <>
                          <li key={i} className='my-[5px]'>{item}</li>
                        </>
                      )
                    })
                  }
                </ol>
                <h4 className='text-white underline text-xl font-bold list-outside'>Post Graduate Programmes</h4>
                <ol className='list-[decimal-leading-zero] text-[15px]'>
                  {
                    Programme[0].postGraduteCourse.map((item, i) =>
                    {
                      return (
                        <>
                          <li key={i} className='my-[5px]'>{item}</li>
                        </>
                      )
                    })
                  }
                </ol>
              </div>
              <p className='sm:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, facilis.</p>
            </div>
            <p className='text-white sm:text-[18px] sm:font-[500] sm:my-[20px] sm:mx-[130px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore non repudiandae fugiat eos beatae maiores, et tempore sint deserunt nobiselit optio quis quos voluptas, mollitia nostrum dolorem, ratione non debitis obcaecati possimus repellendus? Porro voluptate commodi sit in dolores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quod neque reprehenderit, nulla ipsa nostrum ipsum maxime voluptate recusandae voluptatibus! Explicabo et animi ipsum doloribus voluptate dicta doloremque voluptatum illo.</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Programmes