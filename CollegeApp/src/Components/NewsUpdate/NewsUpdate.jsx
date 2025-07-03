import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Student1 from "../../assets/Images/Student1.webp";
import Student2 from "../../assets/Images/Student2.webp";
import Student3 from "../../assets/Images/Student3.jpeg";
import "./NewsUpdate.css";
import ContactForm from "../ContactForm/ContactForm";


const NewsUpdate = () =>
{
  //  const [state, setState] = useState(0)
  // const [selectedIndex, setSelectedIndex] = useState(0);
  // const [department, setDepartment] = useState("");
  // const [course, setCourse] = useState([]);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };




  return (
    <>
      <div className=" w-full py-[20px] bg-[#001a2b] px-[20px]">
        <div className="bg-white sm:flex justify-around rounded">
          <div className="sm:w-[29%] bg-white w-full sm:mx-[50px]">
            <div className="flex p-[20px]">
              <div>
                <h1 className="sm:text-[34px] font-bold font-xl text-[#001a2b] text-xl">
                  Placement At Seg
                </h1>
                <p className="text-green-600 sm:text-[16px] sm:tracking-[1px] font-normal">
                  Meet our star performers
                </p>
              </div>
              <div className="bg-gray-300 h-[3px] sm:w-[50px] sm:my-[30px] sm:ml-[5px] w-[100px] my-[13px]"></div>
            </div>
            <Slider {...settings}>
              {/* This is first Slider */}
              <div className="p-[20px]">
                <div>
                  <img
                    src={Student1}
                    alt=""
                    className="w-[100%] h-[200px] border rounded-[15px] my-[10px]"
                  />
                  <p className=" text-[20px] font-bold text-gray-500 text-justify my-[10px] mx-[20px]">
                    Hitesh, B.tech
                  </p>
                  <p className="text-green-600 text-[17px]">
                    National Institute of Genetics, Japan - CTC Rs. 11.57 Lakhs
                    per annum
                  </p>
                  <p className="text-[17px] text-gray-400 text-justify my-[20px] mx-[15px] ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti praesentium eius reiciendis sed vel nobis quod
                    necessitatibus accusantium, distinctio pariatur inventore quas
                    dolores id perferendis consectetur consequuntur. Delectus,
                    eaque vitae?
                  </p>
                </div>
              </div>
              <div className=" w-[100%] bg-white p-[20px]">
                {/* This is second Slider */}

                <div>
                  <img
                    src={Student2}
                    alt=""
                    className="w-[100%] h-[200px] border rounded-[15px] my-[10px]"
                  />
                  <p className=" text-[20px] font-bold text-gray-500 text-justify my-[10px] mx-[20px]">
                    Rahul Chaudharay, B.Pharm
                  </p>
                  <p className="text-green-600 text-[17px]">
                    National Institute of Genetics, Japan - CTC Rs. 11.57 Lakhs
                    per annum
                  </p>
                  <p className="text-[17px] text-gray-400 text-justify my-[20px] mx-[15px] ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti praesentium eius reiciendis sed vel nobis quod
                    necessitatibus accusantium, distinctio pariatur inventore quas
                    dolores id perferendis consectetur consequuntur. Delectus,
                    eaque vitae?
                  </p>
                </div>
              </div>
              <div className=" w-[100%] bg-white p-[20px]">
                {/* This is third slider */}

                <div>
                  <img
                    src={Student3}
                    alt=""
                    className="w-[100%] h-[200px] border rounded-[15px] my-[10px]"
                  />
                  <p className=" text-[20px] font-bold text-gray-500 text-justify my-[10px] mx-[20px]">
                    Vashu Kumar, B.Pharm
                  </p>
                  <p className="text-green-600 text-[17px]">
                    National Institute of Genetics, Japan - CTC Rs. 11.57 Lakhs
                    per annum
                  </p>
                  <p className="text-[17px] text-gray-400 text-justify my-[20px] mx-[15px] ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti praesentium eius reiciendis sed vel nobis quod
                    necessitatibus accusantium, distinctio pariatur inventore quas
                    dolores id perferendis consectetur consequuntur. Delectus,
                    eaque vitae?
                  </p>
                </div>
              </div>
            </Slider>
          </div>
          {/* This is news and circulars section */}
          <div className="sm:w-[29%] w-full bg-white">
            <div className="flex p-[20px]">
              <div>
                <h1 className="sm:text-[34px] font-bold font-xl text-[#001a2b] text-xl">
                  News & Circulars
                </h1>
                <p className="text-green-600 sm:text-[16px] sm:tracking-[1px] font-normal">
                  Read All News
                </p>
              </div>
              <div className="bg-gray-300 h-[3px] sm:w-[50px] sm:my-[30px] sm:ml-[5px]  ml-[15px] w-[100px] my-[15px]"></div>
            </div>

            <div className="w-full p-[10px]">
              <div className="my-[50px]">
                <h2 className="text-[16px] font-bold text-gray-700  hover:text-green-400 duration-[300ms] cursor-pointer">Euphoric 2k24 bulletin E-Newletter from Sanskar College of Engineering and Technology.</h2>
                <p className="text-[16px] font-bold text-gray-500">December 19, 2024</p>
              </div>
              <div className="my-[50px]">
                <h1 className="text-[16px] font-bold text-gray-700 hover:text-green-400 duration-[300ms] cursor-pointer">Regarding ABC ID</h1>
                <p className="text-[16px] font-bold text-gray-500">May 10, 2024</p>
              </div>
              <div className="my-[50px]">
                <h1 className="text-[16px] font-bold text-gray-700 hover:text-green-400 duration-[300ms] cursor-pointer">Regarding Final Exam Schedule Odd Phase-II Session 2023-24</h1>
                <p className="text-[16px] font-bold text-gray-500">February 19, 2024</p>
              </div>
            </div>


          </div>

          <ContactForm />

        </div>

      </div>
    </>
  );
};

export default NewsUpdate;
