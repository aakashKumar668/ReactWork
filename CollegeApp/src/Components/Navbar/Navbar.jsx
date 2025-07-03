
import userImage from "../../assets/Images/userImage.png";
import "./Navbar.css"
import { FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Navbar = () =>
{
  const [sideNav, setSideNav] = useState(false)
  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = !!user
  const navigate = useNavigate();

  console.log(sideNav);

  const handleProtectedClick = (e) =>
  {
    if (!isLoggedIn)
    {
      e.preventDefault();
      alert("Please login first to access this page.");
    }
  };

  const handleLogout = () =>
  {
    localStorage.removeItem("user");
    navigate("/login");
  };


  return (
    <>
      <nav className="flex w-full sm:justify-around sm:h-[12vh] h-13 bg-black sm:bg-[#001a2b] text-gray-500 sm:items-center">
        <div className="cursor-pointer absolute top-[10px] left-[13px]">
          <Link to="/"><h2 className="sm:text-2xl font-bold text-white text-[13px]">College<span className="sm:text-3xl text-[15px] text-red-400">Wala</span></h2></Link>
        </div>
        <div>
          <ul className="sm:flex gap-[30px] sm:absolute  sm:top-6 font-bold text-[13px] hidden uppercase cursor-pointer tracking-[2px]">
            <li className="hover:text-white duration-200 inline-block relative"><Link to="/" onClick={handleProtectedClick}>Home</Link>
              <ul className="list-ul text-[10px] absolute min-w-[230px] text-center py-[28px] px-[50px] bg-[#001a2b]  left-[-50px] hidden leading-[30px]" >
                <li><Link to="/introduction" onClick={handleProtectedClick}>Introduction</Link></li>
                <li><Link to="/missionandvision" onClick={handleProtectedClick}>Mission and Vision</Link></li>
                <li><Link to='/history' onClick={handleProtectedClick}>History</Link></li>
                <li>Visionairs</li>
                <li>naac</li>
                <li>Nirf</li>
                <li>Other 1</li>
                <li>Other Ranking</li>
              </ul>
            </li>
            <li className="hover:text-white duration-200 inline-block">Administration
              <ul className="list-ul text-[10px] absolute min-w-[230px] text-center py-[28px] px-[50px] bg-[#001a2b]  left-[-50px] hidden leading-[30px]" >
                <li><Link to="/admissions" onClick={handleProtectedClick}>Admissions</Link></li>
                <li><Link to='supremecouncil' onClick={handleProtectedClick}>Supreme Council</Link></li>
                <li><Link to="/goveringbody" onClick={handleProtectedClick}>Govering Body</Link></li>
                <li><Link to="chairmain" onClick={handleProtectedClick}>Chairman</Link></li>
                <li><Link to="/principal" onClick={handleProtectedClick}>Principal</Link></li>
                <li><Link to="/viceprincipal" onClick={handleProtectedClick}>Vice Principal</Link></li>
                <li>Advisors</li>
                <li>Other 1</li>
                <li>Other 2</li>
                <li>Other 3</li>
                <li>Other 4</li>
              </ul>
            </li>
            <li className="hover:text-white duration-200 inline-block">academics
              <ul className="list-ul text-[10px] absolute min-w-[230px] text-center py-[28px] px-[50px] bg-[#001a2b]  left-[-50px] hidden leading-[30px]" >
                <li><Link to='/programmes' onClick={handleProtectedClick}>Programmes</Link></li>
                <li><Link to='/timetable' onClick={handleProtectedClick}>Time Table</Link></li>
                <li><Link to='/department' onClick={handleProtectedClick}>Department</Link></li>
                <li>Syllabi</li>
                <li>Sport at a glance</li>
                <li>Technical Staff</li>
                <li>Support Staff</li>
                <li>Academic Calender</li>
                <li>Prizes And award</li>
                <li>Reasearch</li>
              </ul>
            </li>
            <li className="hover:text-white duration-200 inline-block">Gallary
              <ul className="list-ul text-[10px] absolute min-w-[230px] text-center py-[28px] px-[50px] bg-[#001a2b]  left-[-50px] hidden leading-[30px]" >
                <li><Link to='/photos' onClick={handleProtectedClick}>photos</Link></li>
                <li><Link to='/video' onClick={handleProtectedClick}>videos</Link></li>
                <li><Link to="/media" onClick={handleProtectedClick}>media</Link></li>
              </ul>
            </li>
          </ul>
        </div>


        <div className={`w-[300px] bg-[bisque] absolute top-12 left-0 text-center h-[400px] flex justify-center items-center z-10 duration-[300ms] ease-in-out ${sideNav ? 'translate-x-[0px]' : 'translate-x-[-300px]'}`}>
          <ImCross size={25} onClick={() => setSideNav(!sideNav)} className='absolute top-5 cursor-pointer left-65' />
          <ul className="flex flex-col gap-12 font-bold text-[13px] uppercase cursor-pointer">
            <li className="hover:text-white duration-200 inline-block relative"><Link to="/" onClick={handleProtectedClick}>Home</Link>
              <ul className="list-ul text-[10px] absolute min-w-[230px] text-center py-[28px] px-[50px] bg-[#001a2b]  left-[-50px] hidden leading-[30px]" >
                <li onClick={() => setSideNav(!sideNav)}><Link to="/introduction" onClick={handleProtectedClick}>Introduction</Link></li>
                <li onClick={() => setSideNav(!sideNav)}><Link to="/missionandvision" onClick={handleProtectedClick}>Mission and Vision</Link></li>
                <li onClick={() => setSideNav(!sideNav)}><Link to='/history' onClick={handleProtectedClick}>History</Link></li>
                <li onClick={() => setSideNav(!sideNav)}>Visionairs</li>
                <li onClick={() => setSideNav(!sideNav)}>naac</li>
                <li onClick={() => setSideNav(!sideNav)}>Nirf</li>
                <li onClick={() => setSideNav(!sideNav)}>Other 1</li>
                <li onClick={() => setSideNav(!sideNav)}>Other Ranking</li>
              </ul>
            </li>
            <li className="hover:text-white duration-200 inline-block">Administration
              <ul className="list-ul text-[10px] absolute min-w-[230px] text-center py-[28px] px-[50px] bg-[#001a2b]  left-[-50px] hidden leading-[30px]" >
                <li onClick={() => setSideNav(!sideNav)}  ><Link to="/admissions" onClick={handleProtectedClick}>Admissions</Link></li>
                <li onClick={() => setSideNav(!sideNav)}  ><Link to='supremecouncil' onClick={handleProtectedClick}>Supreme Council</Link></li>
                <li onClick={() => setSideNav(!sideNav)}  ><Link to="/goveringbody" onClick={handleProtectedClick}>Govering Body</Link></li>
                <li onClick={() => setSideNav(!sideNav)}  ><Link to="chairmain" onClick={handleProtectedClick}>Chairman</Link></li>
                <li onClick={() => setSideNav(!sideNav)}  ><Link to="/principal" onClick={handleProtectedClick}>Principal</Link></li>
                <li onClick={() => setSideNav(!sideNav)}  ><Link to="/viceprincipal" onClick={handleProtectedClick}>Vice Principal</Link></li>
                <li onClick={() => setSideNav(!sideNav)}  >Advisors</li>
                <li onClick={() => setSideNav(!sideNav)}  >Other 1</li>
                <li onClick={() => setSideNav(!sideNav)}  >Other 2</li>
                <li onClick={() => setSideNav(!sideNav)}  >Other 3</li>
                <li onClick={() => setSideNav(!sideNav)}  >Other 4</li>
              </ul>
            </li>
            <li className="hover:text-white duration-200 inline-block">academics
              <ul className="list-ul text-[10px] absolute min-w-[230px] text-center py-[28px] px-[50px] bg-[#001a2b]  left-[-50px] hidden leading-[30px]" >
                <li onClick={() => setSideNav(!sideNav)}  ><Link to='/programmes' onClick={handleProtectedClick}>Programmes</Link></li>
                <li onClick={() => setSideNav(!sideNav)}  ><Link to='/timetable' onClick={handleProtectedClick}>Time Table</Link></li>
                <li onClick={() => setSideNav(!sideNav)}  ><Link to='/department' onClick={handleProtectedClick}>Department</Link></li>
                <li onClick={() => setSideNav(!sideNav)}  >Syllabi</li>
                <li onClick={() => setSideNav(!sideNav)}  >Sport at a glance</li>
                <li onClick={() => setSideNav(!sideNav)}  >Technical Staff</li>
                <li onClick={() => setSideNav(!sideNav)}  >Support Staff</li>
                <li onClick={() => setSideNav(!sideNav)}  >Academic Calender</li>
                <li onClick={() => setSideNav(!sideNav)}  >Prizes And award</li>
                <li onClick={() => setSideNav(!sideNav)}  >Reasearch</li>
              </ul>
            </li>
            <li className="hover:text-white duration-200 inline-block">Gallary
              <ul className="list-ul text-[10px] absolute min-w-[230px] text-center py-[28px] px-[50px] bg-[#001a2b]  left-[-50px] hidden leading-[30px]" >
                <li onClick={() => setSideNav(!sideNav)}  ><Link to='/photos' onClick={handleProtectedClick}>photos</Link></li>
                <li onClick={() => setSideNav(!sideNav)}  ><Link to='/video' onClick={handleProtectedClick}>videos</Link></li>
                <li onClick={() => setSideNav(!sideNav)}  ><Link to="/media" onClick={handleProtectedClick}>media</Link></li>
              </ul>
            </li>
          </ul>
        </div>




        <div className="sm:flex border-[2px] rounded hidden sm:p-[2px] sm:w-[200px] w-[100px] h-6 absolute right-[200px] sm:right-[50px] top-2.5 sm:top-0 sm:h-[40px] sm:relative "> <input type="text" className="outline-none text-[10px] sm:text-xl text-white p-[2px]" placeholder="Search Here.." /><button className=""><FaSearch /></button></div>

        <div className="flex gap-[10px] justify-end absolute top-3 right-4">
          <p className="text-center sm:text-[22px] sm:font-bold text-[12px] font-[500]  mt-[5px] text-white my-[20px] uppercase"> {user?.username || "User"} :</p>
          <div className="">
            {!isLoggedIn ? (
              <>
                <Link to="/login"> <button className="sm:h-[50px] h-[30px] w-[60px] sm:w-[140px] bg-blue-400 text-[15px] text-white rounded sm:font-bold cursor-pointer">Login</button></Link>

              </>
            ) : (
              <button onClick={handleLogout} className="sm:h-[50px] h-[35px] w-[80px] sm:w-[140px] bg-blue-400 text-white rounded font-bold cursor-pointer">Logout</button>
            )}</div>
        </div>
      </nav>
      <div className="absolute left-3 text-red-500 z-5">  <GiHamburgerMenu onClick={() => setSideNav(!sideNav)} size={30} className='cursor-pointer block sm:hidden ' /></div>
    </>
  );
};

export default Navbar;
