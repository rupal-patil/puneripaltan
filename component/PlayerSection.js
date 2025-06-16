import classes from "./PlayerSection.module.css"
import { Exo } from "next/font/google";
const exo=Exo({
    variable:"exo-semibold",
    subsets:["latin"],
    weight:"600"
})
const PlayerSection=({bannerTitle,bgColor})=>{
    return(
        <section style={{backgroundColor: bgColor ? bgColor : "#fff"}}>
            <div className={`${classes.titleBox} ${exo.className}`}>
                <h3>{bannerTitle ? bannerTitle : "Title"}</h3>
            </div>
        </section>
    )
}
export default PlayerSection;