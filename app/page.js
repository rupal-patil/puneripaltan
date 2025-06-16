import Image from "next/image";
import classes from "./page.module.css"
import OrangeButton from "@/component/OrangeButton";
import OutlineButton from "@/component/OutlineButton";
import { Exo_2 } from "next/font/google";
import Carousel from "@/component/Carousel";
import { FaPlay } from "react-icons/fa";
import Form from "@/component/Form";
const exo = Exo_2({
  variable: "--exo",
  subsets: ['latin'],
  weight: "700"
})
const exo2 = Exo_2({
  variable: "--exo2",
  subsets: ['latin'],
  weight: "300"
})
export default function Home() {
  return (
    <section>
      <div>
        <img src="/home-background.webp" width={"100%"} className={`${classes.deskblock}`} />
        <img src="/mobile-home-backgroung.webp" width={"100%"} className={`${classes.desknone}`} />
      </div>
      <section className={`${classes.description}`} style={{ backgroundImage: "url('./description-bg.jpg')" }}>
        <div className={`${classes.box1} container mx-auto`}>
          <div className={`${classes.line}`}></div>
          <div className={`${classes.scroll} ${exo2.className}`}><h6>scroll</h6></div>
        </div>
        <div className={`container mx-auto ${classes.box2}`}>
          <p className={`${classes.para} ${exo.className}`}>
            Puneri Paltan is currently one of the top performing teams in the Pro Kabaddi League. With a mix of unstoppable energy, honed-out skills and steely nerves, here's a force that consistently looks forward to perform better, challenge its opponents and make a difference.
          </p>
        </div>
        <div>
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row">
            <div className="sm:[100%] md:[100%] lg:w-[35%] flex justify-center items-center">
              <h1 className={`text-[#ff7500] text-[70px] lg:text-[90px] tracking-[10px] mt-[10px] lg:mt-[-50px] ${classes.h1}`}>Players</h1>
            </div>
            <div className="sm:[100%] md:[100%] lg:w-[65%]">
              <Carousel />
            </div>
          </div>
        </div>
        <div className="text-center mt-[50px] lg:mt-[10px]"><OrangeButton title={"Enter"} link="players" /></div>

        <div className="container mx-auto p-8">
         <div className="relative w-[100%] h-[300px] p-12">
         <div className="absolute bottom-[-40%] sm:bottom-[-40%] lg:bottom-[-70%] left-5 md:left-0 w-[88%] sm:w-[88%] md:w-[95%] lg:w-[95%]  md:h-[79%] lg:h-[400px] flex flex-col md:flex-row lg:flex-row  skew-x-[-15deg] px-0 sm:px-[15px]">
            <div className={`w-[100%] bg-[#2b2521] ${classes.box}`}><img src="/buy-tickets-homepage_s11.png" className="w-[100%] h-[100%] mb-[-2%] skew-x-[15deg] "/></div>
            <a href="https://in.bookmyshow.com/sports/pro-kabaddi-league-season-11-2024/ET00414457" target="-blank" className={`w-[100%] flex justify-center items-center bg-black  ${classes.box}`}><img src="/tickets.png" className="ml-[3%] skew-x-[15deg] "/></a>
          </div>
          <div className="absolute top-[68%] md:top-[85%] lg:top-[90%] left-[-24px] md:left-[20%] lg:left-[32%]">
              <OutlineButton href={"https://in.bookmyshow.com/sports/pro-kabaddi-league-season-11-2024/ET00414457"}  title={<div className="flex justify-center items-center gap-2">Buy Ticket <FaPlay className="text-[10px]"/></div>}/>
          </div>
         </div>
        </div>
      </section>
      <section className="bg-[url('/fixtures-bg.jpg')] bg-center pt-[220px]">
        <div className="bg-[url('/puneri-world-bg-mob.jpg')] sm:bg-[url('/puneri-world-bg-mob.jpg')] md:bg-[url('/puneri-world-bg.jpg')] lg:bg-[url('/puneri-world-bg.jpg')] bg-cover bg-center overflow-hidden md:overflow-hidden">
          <div className="">
            <div className="relative ">
              <img src="/paltan-world-1.png" className={`relative z-[999] hidden sm:hidden md:block lg:block ${classes.slowdown}`}/>
              <img src="/paltan-world-mob-1.png" className="relative block md:hidden lg:hidden z-[999]"/>
              <img src="/paltan-world-3.png" className={`absolute left-[40%] md:left-[58%] lg:left-[66%] top-[15%] md:top-[1%] lg:top-[20%] w-[160px] md:w-[360px] lg:w-[330px] z-[99] md:overflow-hidden  ${classes.zoom}`}/>
              <img src="/paltan-world-4.png" className={`absolute left-[33%] top-[-55px] z-[1] rotate-[11deg] hidden md:hidden lg:block ${classes.zoom}`}/>
              <img src="/paltan-world-5.png" className={`absolute top-[-40px] md:top-0 lg:top-0 z-[1] w-[400px] md:w-[500px] ${classes.zoom}`}/>
              <div className="absolute top-[40%] md:top-[34%] lg:top-[38%] md:right-[25%] lg:right-[27%] transform translate-x-[15%] md:translate-x-1/2 lg:translate-x-1/2 z-[999]">
                <h2 className={`text-[70px] md:text-[80px] lg:text-[110px] text-[#ff7500] tracking-[7px] ${classes.text} ${classes.slowdown}`}>Paltan</h2>
                <h2 className={`text-[70px] md:text-[80px] lg:text-[110px] text-[#fff] tracking-[7px] mt-[-10%] ml-[7%] ${classes.text} ${classes.up}`}>World</h2>
                <div className="text-end"><OrangeButton title={"Enter"} link={"puneriworld"}/></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[url('/news-bg.jpg')] bg-center py-[150px] relative">
        <div className="bg-[url('/news-banner.jpg')] container mx-auto w-[97%] lg:w-[80%] h-[561px] mb-[50px] relative ">
          <div className="mx-[-15px] w-[97%] md:w-[100%] lg:w-[100%]">
            <div className="flex flex-col justify-center items-center w-[97%] md:w-[100%] lg:w-[100%] h-[561px]">
              <div className="ml-[60px] md:ml-0 lg:ml-0">
                <h2 className={`text-[70px] md:text-[90px] lg:text-[90px] text-center text-[#ff7500] tracking-[7px] mt-[20px] ${classes.text} ${classes.down} `}>Puneri Platan</h2>
                <h2 className={`text-[34px] md:text-[90px] lg:text-[90px] text-center text-[#fff] tracking-[7px] ${classes.text} ${classes.up} `}>in the NEWS</h2>
              </div>
            </div>
            <div className="text-center"><div className="mt-[-20px]"><OrangeButton title={"Enter"} link={"puneritv"}/></div> </div>
          </div>
        </div>
      </section>
      
      <section className="w-[90%] h-[100px] mx-auto bg-[#ff7500] mt-[-50px] relative skew-x-[-15deg]">
            <div className="container h-[100%] px-2">
              <div className="flex  flex-col md:flex-row lg:flex-row justify-center items-center text-center h-full gap-0 md:gap-8 lg:gap-8">
                <div className="skew-x-[15deg]"><h3 className={`${classes.text} ${classes.partners} text-white uppercase tracking-[2px] text-[22px] md:text-[18px] lg:text-[28px] `}>subscribe to our newsletter</h3></div>
                <div className=""><Form/></div>
              </div>
            </div>
      </section>

      <section className="py-[50px]" >
        <h2 className={`${classes.partners} text-center text-[#ff7500] text-[35px] sm:text-[35px] md:text-[90px] lg:text-[110px] tracking-[7px] py-[30px]`}>Partners</h2>
        <div className="container mx-auto">
          <div>
            <div>
              <a href="https://forcemotors.com/" className="cursor-pointer">
                <div className="flex flex-col justify-center items-center pt-[30px]">
                  <img src="/force_motors.png" />
                  <h6 className={`text-center text-[16px] tracking-[2px] pt-[20px]`}>Principal Partner</h6>
                </div>
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center gap-8">
            <div><a href="https://batery.ai/" target="_blank" className="cursor-pointer">
              <div className="flex flex-col justify-center items-center pt-[30px]">
                <img src="/Batery-Ai_logo.png" />
                <h6 className={`text-center text-[16px] tracking-[2px] pt-[20px]`}>Powered By </h6>
              </div>
            </a></div>
            <div><a href="https://www.kirloskarpumps.com/" target="_blank" className="cursor-pointer">
              <div className="flex flex-col justify-center items-center pt-[30px]">
                <img src="/korloskar-brother-logo.png" />
                <h6 className={`text-center text-[16px] tracking-[2px] pt-[20px]`}>Associate Partner</h6>
              </div>
            </a></div>
          </div>


          <div className="flex justify-center items-center">
            <div><a href="https://www.stihl.com/en" target="_blank" className="cursor-pointer">
              <div className="flex flex-col justify-center items-center pt-[30px]">
                <img src="/stihl-logo.png" />
                <h6 className={`text-center text-[16px] tracking-[2px] pt-[20px]`}>Co-Partner</h6>
              </div>
            </a></div>
            <div><a href="https://www.hintworld.com/" target="_blank" className="cursor-pointer">
              <div className="flex flex-col justify-center items-center pt-[30px]">
                <img src="/hint_logo.png" />
                <h6 className={`text-center text-[16px] tracking-[2px] pt-[20px]`}>Co-Partner</h6>
              </div>
            </a></div>
            <div><a href="https://www.vikramtea.com/" target="_blank" className="cursor-pointer">
              <div className="flex flex-col justify-center items-center pt-[30px]">
                <img src="/vikram-tea.png" />
                <h6 className={`text-center text-[16px] tracking-[2px] pt-[20px]`}>Co-Partner</h6>
              </div>
            </a></div>
            <div><a href="https://www.focus11.net/" target="_blank" className="cursor-pointer">
              <div className="flex flex-col justify-center items-center pt-[30px]">
                <img src="/F1-Focus11_logo.png" />
                <h6 className={`text-center text-[16px] tracking-[2px] pt-[20px]`}>Co-Partner</h6>
              </div>
            </a></div>
          </div>

          <div className="flex justify-center items-center">
            <div><a href="https://www.radiocity.in/" target="_blank" className="cursor-pointer">
              <div className="flex flex-col justify-center items-center pt-[30px]">
                <img src="/radio.png" />
                <h6 className={`text-center text-[16px] tracking-[2px] pt-[20px]`}>Radio Partner</h6>
              </div>
            </a></div>
            <div><a href="about:blank" target="_blank" className="cursor-pointer">
              <div className="flex flex-col justify-center items-center pt-[30px]">
                <img src="/icon-logo.png" />
                <h6 className={`text-center text-[16px] tracking-[2px] pt-[20px]`}>Travel Partner</h6>
              </div>
            </a></div>
            <div><a href="https://shivnaresh.in/" target="_blank" className="cursor-pointer">
              <div className="flex flex-col justify-center items-center pt-[30px]">
                <img src="/shiv-naresh-logo.png" />
                <h6 className={`text-center text-[16px] tracking-[2px] pt-[20px]`}>Kit Partner</h6>
              </div>
            </a></div>
          </div>
        </div>
      </section>

    </section>
  );
}
