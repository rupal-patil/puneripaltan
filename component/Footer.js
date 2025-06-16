/* eslint-disable @next/next/no-img-element */
import { FaFacebookF, FaTwitter, FaInstagram,FaYoutube } from "react-icons/fa";
import classes from "./Footer.module.css"
import Image from "next/image";
import { Exo,Lato } from "next/font/google";
const exo=Exo({
    variable:'--exo',
    subsets:['latin'],
    weight:"400"
})
const lato=Lato({
    variable:'--lato',
    subsets:['latin'],
    weight:"900"
})
const Footer=()=>{
    return(
        <>
       <footer className={`${classes.footer}`}>
       <div  className="max-w-7xl mx-auto px-4 flex justify-center">
            <div className={`w-full flex justify-between flex-col sm:flex-col md:flex-col lg:flex-row`}>
                <div className={`${classes.footleft}`}>
                <h6 className={`${exo.className}`}>Copyright © 2025 Puneri Paltan</h6>
                </div>
                <div className={`${classes.mid} justify-center`}>
                <a href="https://www.facebook.com/puneripaltan/" target="_blank"><FaFacebookF className={`${classes.icons}`}/></a>
                <a href="https://twitter.com/PuneriPaltan?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" ><FaTwitter className={`${classes.icons}`}/> </a>
                <a href="https://instagram.com/puneripaltanofficial?utm_source=ig_profile_share&amp;igshid=m2wsuxrbs1f8" target="_blank"><FaInstagram className={`${classes.icons}`}/></a>
                <a href="https://www.youtube.com/c/PuneriPaltan" target="_blank"><FaYoutube className={`${classes.icons}`}/></a>
                </div>
                
                <div className="flex justify-center">
                    <a href="https://www.digitallatte.in/" target="_blank">
                        <div className={`${classes.tingUnitWrap}`}>
                            <div className={`${classes.madebytext}`}>
                                <p className={`${lato.className}`}>Managed</p>
                                <p className={`${lato.className}`}>By</p>
                            </div>
                            <img src="/dl_logo.png" className={`${classes.img}`} style={{width:"120px !important"}} alt="image here"></img>
                        </div>
                    </a>
                </div>
            </div>
        </div>
       </footer>
        
        </>
    )
}

export default Footer;