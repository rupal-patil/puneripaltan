/* eslint-disable @next/next/no-img-element */
import classes from "./CarouselPlayers.module.css"
import { Exo } from "next/font/google";
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
const CarouselPlayers=({src,fname,lname,type,name,id})=>{
    
    return(
        <>
        <div className={`${classes.box}`}>
            <Link href={`/players/${id}`} className="cursor-pointer">
                <div className={`${classes.transform}`} >
                    <div className="relative transform scale-90 transition-all duration-[900ms] ease-in"> 
                        <img src={src ? src : "/player.png"} alt="image here"/>
                    </div>
                </div>
            </Link>
        </div>
        </>
    )
}
export default CarouselPlayers;