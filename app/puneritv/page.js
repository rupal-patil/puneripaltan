"use client"
import classes from "./page.module.css"
import Dropdown from "@/component/Dropdown";
import TvCard from "@/component/TvCard";
import axiosHttp from "@/lib/utils/axiosinterceptor";
import { useState ,useEffect} from "react";
import { Exo } from "next/font/google";
const exoReg = Exo({
  variable: "exo-reg",
  subsets: ["latin"],
  weight: "400",
});
const PuneriTV=()=>{
    const [season, setSeason] = useState([]);
  const [activeSeason, setActiveSeason] = useState("Season 11");
  const [activeSeasonId, setActiveSeasonId] = useState(null); 
  const [tv,setTv]=useState([])
  const handleSeasons = (seasonName, seasonId) => {
    setActiveSeason(seasonName); // Update the active season name
    setActiveSeasonId(seasonId);  // Update the active season ID for fetching gallery
  };
  useEffect(() => {
    // Fetch available seasons and their ids
    const fetchData = async () => {
      const response = await axiosHttp.get("/season_list");
      console.log(response.data);

      setSeason(response.data);

      // Set the default active season and ID (you could adjust this logic based on your data)
      const defaultSeason = response.data.find(season => season.cat_name === activeSeason);
      if (defaultSeason) {
        // console.log(defaultSeason)
        setActiveSeasonId(defaultSeason.id);  // Assuming the API returns 'id' for each season
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    // Fetch gallery data when activeSeasonId changes
    if (activeSeasonId) {
      const fetchTv = async () => {
        const response = await axiosHttp.get(`/puneri_tv_list?cat_id=${activeSeasonId}`);
        console.log(response.data);
        setTv(response.data);
      };
      fetchTv();
    }
  }, [activeSeasonId]);
    return(
        <>
        <section className="
  bg-[url('/puneri-tv-mob-banner.jpg')]
  sm:bg-[url('/puneri-tv-mob-banner.jpg')] 
  md:bg-[url('/puneri-tv-desktop-banner.jpg')] 
  lg:bg-[url('/puneri-tv-desktop-banner.jpg')] 
  bg-cover bg-center bg-no-repeat h-[700px] relative">
    <div className={`container mx-auto h-full md:overflow-hidden ${classes.box2}`}>
        <div className="flex w-full h-full items-center">
            <div className={`w-[100%] relative ${classes.box1} px-[50px] py-0`} >
                <img src="/banner-title.png" className=""/>
                <h1 className="text-[40px] md:text-[90px] lg:text-[120px]">PUNERI TV</h1>
            </div>
            <div className={`relative w-full h-full`} >
                <img src="/puneri-tv-desk-banner-right.png" className="absolute w-full scale-70  items-end object-right top-85 left-20 bottom-0 "/>
            </div>
        </div>
    </div>
</section>
<section className="container mx-auto h-full">
        {/* Dropdown to select season */}
        <div className="flex justify-center py-6">
          <Dropdown
            season={season}
            activeSeason={activeSeason}
            handleSeasons={handleSeasons}
          />
        </div>

        {/* Gallery grid for the active season */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-center items-center gap-8 mx-[15px] lg:mx-0">
          {tv.length > 0 ? (
            tv.map((data, i) => (
              <TvCard key={i} src={data.main_image} title={data.name} url={data.url} />
            ))
          ) : (
            <p className="mx-auto w-[100%] h-[300px] text-3xl text-[#f40] flex justify-center items-center" >Loading data available for this season.</p>
          )}
        </div>
      </section>
      <section>
      <div className="flex w-full overflow-hidden">
       <a href="#" className=" w-[100%] h-[200px] bg-[url('/puneri-tv1.png')] bg-[length:101%] bg-center bg-no-repeat relative hover:scale-125 transition-transform duration-300 ease-out  overflow-hidden"> <div  className=""><h4 className={`bg-black/50 font-bold flex justify-center items-center  text-[26px] tracking-[1px] uppercase text-white absolute top-0 left-0 w-[100%] h-[100%] ${exoReg.className}`}>Puneri Tv</h4></div></a>
       <a href="#" className=" w-[100%] h-[200px] bg-[url('/puneri-wallpaper.png')] bg-[length:101%] bg-center bg-no-repeat relative hover:scale-125 transition-transform duration-300 ease-out overflow-hidden "> <div  className=""><h4 className={`bg-black/50 font-bold flex justify-center items-center text-[26px] tracking-[1px] uppercase text-white absolute top-0 left-0 w-[100%] h-[100%] ${exoReg.className}`}>Wallpapers</h4></div></a>
       <a href="#" className=" w-[100%] h-[200px] bg-[url('/puneri-blogs.png')] bg-[length:101%] bg-center bg-no-repeat relative hover:scale-125 transition-transform duration-300 ease-out overflow-hidden"> <div  className=""><h4 className={`bg-black/50 font-bold flex justify-center items-center text-[26px] tracking-[1px] uppercase text-white absolute top-0 left-0 w-[100%] h-[100%] ${exoReg.className}`}>Blogs</h4></div></a>
        </div>
      </section>

        </>
    )
}
export default PuneriTV;