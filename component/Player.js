
import { Exo } from "next/font/google";
import { useRef,useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import Link from "next/link";
const exoReg=Exo({
    variable:"exo_regular",
    subsets:["latin"],
    weight:"400"
})
const exoBold=Exo({
    variable:"exo_bold",
    subsets:["latin"],
    weight:"700"
})
const Player=({src,fname,lname,type,onClick})=>{
    const cardRef = useRef(null);
    useEffect(() => {
      if (cardRef.current) {
        VanillaTilt.init(cardRef.current, {
          max: 6,
          speed: 200,
          scale: 1,
          glare: false,
          "max-glare": 0,
          perspective: 800,
          easing: "cubic-bezier(.03,.98,.52,.99)",
          gyroscope: false
        });
      }
  
      return () => {
        if (cardRef.current?.vanillaTilt) {
          cardRef.current.vanillaTilt.destroy();
        }
      };
    }, []);
  
    return(
        <>
        <div  onClick={onClick} ref={cardRef} >
            {/* <Link href={"#"}  className="cursor-pointer"> */}
                <div className={`pb-[50px]`} >
                    <div className="transform scale-90 transition-all duration-[900ms] ease-in"> 
                        <img src={src ? src : "/player.png"}/>
                    </div>
                    <div className="mt-[-25px] z-[9] text-center min-h-[105px]">
                        <h3 className={`text-black text-[35px] m-0 tracking-[4px] capitalize ${exoReg.className}`}>{fname ? fname : "FName"}</h3>
                        <h3 className={`text-black text-[35px] m-0 mt-[-6px] tracking-[4px] capitalize ${exoBold.className}`}>{lname ? lname : "LName"}</h3>
                        <h5 className={`text-[#ff7500] text-[20px] m-0 mt-[10px] tracking-[2px] opacity-100 transition-all duration-500 ease-in ${exoReg.className}`}>{type ? type :"Type"}</h5>
                    </div>
                </div>
            {/* </Link> */}
        </div>
        </>
    )
}
export default Player;