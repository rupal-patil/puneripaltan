import classes from "./GalleryCard.module.css"
import { Exo } from "next/font/google";
const exo=Exo({
    variable:"exo-regular",
    subsets:["latin"],
    weight:"500"
})

const GalleryCard = ({src,title}) => {
    if( !src || !title){
        return(
          <div className='w-full'>
          <p className='w-fit h-[300px] text-5xl text-red-500'>OOPs,No data for this season!</p>
          </div>
        )
      }
    return (
        <div  className="overflow-hidden">
           
                <div>
                    <img src={src ? src : "/gallerycard.jpg"} className="w-full"/>
                    <h3 className={`${classes.titleBand} ${exo.className}`}>
                        {title ? title : "MATCH 22 - PUNERI PALTAN VS TAMIL THALAIVAS"}
                    </h3>
                </div>
            
        </div>
    )
}
export default GalleryCard;