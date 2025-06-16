import { Exo } from "next/font/google";
const exo=Exo({
    variable:"exo-semibold",
    subsets:["latin"],
    weight:"700"
})

const Banner=({title})=>{
    return(
        <>
        <h5 className={`text-[22px] ${exo.className} uppercase bg-[rgb(255,68,0)] text-white w-[200px] tracking-[3px] m-4 text-center py-[5px] mx-auto skew-x-[-15deg]`}>{title ? title : "Title"}</h5>
        
        </>
    )
}
export default Banner;