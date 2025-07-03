import React, { useState } from 'react'
import stateList from "../../assets/DataList/StateList"
import CityList from "../../assets/DataList/CityList"
import Subject from "../../assets/DataList/CourseList"
import { useForm, ValidationError } from '@formspree/react';
const ContactForm = () =>
{
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [department, setDepartment] = useState("");
    const [course, setCourse] = useState([]);
    const handleStateChange = (e) =>
    {
        const newIndex = e.target.selectedIndex;
        setSelectedIndex(newIndex);
    }

    const handleDepartmentChange = (e) =>
    {
        const selected = e.target.value;
        setDepartment(selected);

        const selectedCourse = Subject.find(item => item.department === selected);

        setCourse(selectedCourse ? selectedCourse.courses : []);
    };
    const [state, handleSubmit] = useForm("mblyworb");
    if (state.succeeded)
    {
        return <p className='text-2xl text-red-500 font-bold m-auto'>Thanks for joining!</p>;
    }
    return (
        <div className="sm:w-[29%] bg-white shadow-2xl" >
            <div className="my-[20px] mx-[20px]">
                <h1 className="text-[34px] font-bold text-[#001a2b]">
                    Apply for Admission
                </h1>
                <p className="text-green-600 text-[16px] tracking-[1px] font-normal">
                    Season 2025 applicatios are now open
                </p>
            </div>
            <form className="w-[100%] px-[30px] grid-inline justify-center text-center" onSubmit={handleSubmit} id='contactForm'>
                <input type="text" id="name"
                    name="name" className=" shadow-xl/20 text-black w-[100%] h-[30px] p-[18px] font-bold my-[30px] border-b-[2px] border-gray-500" placeholder="Enter Name*" required />
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />
                <input type="text" name='mobile' id='mobile' className=" shadow-xl/20 text-black w-[100%] h-[30px] p-[18px] font-bold my-[15px] border-b-[2px] border-gray-500" placeholder="Enter Mobile Number*" required />
                <ValidationError
                    prefix="Mobile"
                    field="mobile"
                    errors={state.errors}
                />
                <div className="my-[30px] flex justify-center w-full">
                    <select onChange={handleStateChange} className="border-gray-400 w-[160px] border py-[6px] sm:px-[4px]  sm:text-[15px] font-[500] sm:mx-[4px]" name='state' id='state'>
                        <option disabled>--Select State--</option>
                        {
                            stateList.map((state, i) =>
                            {
                                return (
                                    <option key={i} value={state}>{state}</option>

                                )
                            })
                        }
                    </select>
                    <ValidationError
                        prefix="State"
                        field="state"
                        errors={state.errors}
                    />
                    <select className="border-gray-400 border py-[6px] sm:px-[2px] w-[120px]  sm:text-[15px] font-[500] sm:w-[130px]" name='city' id='city'>
                        <option >--Select City--</option>
                        {
                            selectedIndex != 0 ? CityList[selectedIndex].split("|").map((city, i) => <option key={i}>{city}</option>) : <option></option>
                        }

                    </select>
                    <ValidationError
                        prefix="City"
                        field="city"
                        errors={state.errors}
                    />

                </div>
                <select onChange={handleDepartmentChange} value={department} className="w-[100%] py-[8px] text-[17px] px-[5px] font-[500] border-gray-400 border" name='deparment' id='department'>
                    <option disabled> --Select Department--</option>
                    {Subject.map((item, i) => <option key={i} value={item.department}>{item.department}</option>)}

                </select>
                <ValidationError
                    prefix="Department"
                    field="department"
                    errors={state.errors}
                />
                <select className="w-[100%] py-[8px] text-[17px] px-[5px] font-[500] border-gray-400 border my-[20px]" name='specialization' id='specialization'>
                    <option disabled>--Select Specialization--</option>
                    {course.map((item, i) => <option key={i} value={item}>{item}</option>)}
                </select>
                <ValidationError
                    prefix="Specialization"
                    field="specialization"
                    errors={state.errors}
                />
                <textarea
                    id="message"
                    name="message"
                    className='sm:h-[100px] sm:w-[320px] border-[2px] border-black rounded p-[10px] w-[280px]' />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <input type="checkbox" name="term" id="" required />
                <label htmlFor="term" className="text-[15px] mx-[8px]">I agree to receive information by signing up on collegeWala.</label>
                <button className='h-[50px] w-[150px] text-[20px] text-white bg-black font-bold capitalize rounded-[15px] mx-[50px] cursor-pointer my-[15px]' type="submit" disabled={state.submitting}>apply now</button>
            </form>

        </div>
    )
}

export default ContactForm