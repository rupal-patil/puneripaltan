import classes from "./OutlineButton.module.css"
import { Exo } from "next/font/google";
const exosemi=Exo({
    variable:"exo-semibold",
    subsets:["latin"],
    weight:"600"
})
const OutlineButton=({title,href,width})=>{
    return(
        <>
        <a href={href} target="_blank">
            <button className={`${classes.button} ${exosemi.className}`}>
                {title ? title : "Title"}
            </button>
        </a>
        </>
    )
}
export default OutlineButton;