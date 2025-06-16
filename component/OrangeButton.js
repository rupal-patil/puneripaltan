import classes from "./OrangeButton.module.css"
import { Exo } from "next/font/google";
const exosemi=Exo({
    variable:"exo-semibold",
    subsets:["latin"],
    weight:"600"
})
const OrangeButton=({title,width,link,padding})=>{
    return(
        <>
        <a href={`/${link}`}>
            <button className={`${classes.button}  ${exosemi.className} w-[200px] md:w-[250px] lg:w-[280px]`} style={{width:width,padding: padding ? padding : "8px 30px",}}>{title ? title :"Title"}</button>
        </a>
        </>
    )
}
export default OrangeButton;