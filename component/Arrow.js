"use client"
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
const Arrow=()=>{
    const scrollToTop = () => {
        // Scroll to the top of the page smoothly
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
    return(
       <div className="absolute bottom-[4%] lg:bottom-[2%] right-[20px] no-underline cursor-pointer ">
        <a onClick={scrollToTop}>
        <MdOutlineKeyboardArrowUp className="relative text-white font-extrabold text-[30px] w-[50px] h-[50px] rounded-[35px] bg-[#f40] p-[15px] transition-all duration-300 ease-in-out"/>
        </a>
       </div>
    )
}
export default Arrow;