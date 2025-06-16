import classes from "./page.module.css";
import Image from "next/image";
import { Love_Light } from "next/font/google";
export const metadata={
    title:"Puneri World",
    description:"Puneri World Page"
}
const love=Love_Light({
    variable:"love",
    subsets:["latin"],
    weight:"400"
})
const PuneriWorld=()=>{
    return(
        <section>
            <div>
                <img src="/paltan-bg-desktop.png" width={"100%"} className={`${classes.deskblock}`} />
                <img src="/paltan-bg-phone.png" width={"100%"} className={`${classes.desknone}`} />
            </div>

            <div className={`${classes.container} flex flex-col lg:flex-row`}>
                
                <a href="/puneritv">
                    <div className={`${classes.box}`} style={{ backgroundImage: "url(/puneri-tv.png" }}>
                    <h3>Puneri TV</h3>
                    </div>
                </a>

                <a href="/gallery" >
                    <div className={`${classes.box}`} style={{ backgroundImage: "url(/puneri-gallery.png" }}>
                    <h3>Gallery</h3>
                    </div>
                </a>

               
            </div>
        </section>
    )
}
export default PuneriWorld;