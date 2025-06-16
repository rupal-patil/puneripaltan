// app/gallery-page.js
/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import axiosHttp from "@/lib/utils/axiosinterceptor";
import GalleryCard from "@/component/GalleryCard";
import Dropdown from "@/component/Dropdown";
import { Exo } from "next/font/google";
import Link from "next/link";
import classes from "./page.module.css"
const exoReg = Exo({
  variable: "exo-reg",
  subsets: ["latin"],
  weight: "400",
});

const GalleryPage = () => {
  const [season, setSeason] = useState([]);
  const [activeSeason, setActiveSeason] = useState("Season 11");
  const [activeSeasonId, setActiveSeasonId] = useState(null); // Changed to store the slug
  const [gallery, setGallery] = useState([]);
  const [isGalleryVisible, setIsGalleryVisible] = useState(true);

  const handleSeasons = (seasonName, seasonId) => {
    setActiveSeason(seasonName);
    setActiveSeasonId(seasonId); // Set the active season slug instead of id
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosHttp.get("/season_list");
      console.log(response.data);
      setSeason(response.data);

      // Fetch the default season using its slug
      const defaultSeason = response.data.find((season) => season.cat_name === activeSeason);
      if (defaultSeason) {
        setActiveSeasonId(defaultSeason.id); // Store the slug instead of the ID
      }
    };
    fetchData();
  }, [activeSeason]);

  useEffect(() => {
    // Fetch gallery data when activeSeasonSlug changes
    if (activeSeasonId) {
      console.log(activeSeasonId)
      const fetchGallery = async () => {
        const response = await axiosHttp.get(`gallary_list?cat_id=${activeSeasonId}`); // Fetch by slug
        console.log(response.data);
        setGallery(response.data);
      };
      fetchGallery();
    }
  }, [activeSeasonId]);

  return (
    <>
      <section className="bg-[url('/puneri-gallery-mob-banner.jpg')] sm:bg-[url('/puneri-gallery-mob-banner.jpg')] md:bg-[url('/puneri-tv-desktop-banner.jpg')] lg:bg-[url('/puneri-tv-desktop-banner.jpg')] bg-cover bg-center bg-no-repeat h-[700px] relative">
        <div className={`container mx-auto h-full overflow-hidden`}>
          <div className="flex w-full h-full items-center">
            <div className={`w-[100%] h-full relative`}>
              <img alt="image here" src="/banner-title.png" className="w-[75%] absolute top-60 left-40" />
              <h1 className={`w-full absolute top-[41%] left-[10%] text-white text-[40px] md:text-[90px] lg:text-[120px] tracking-[16px] ${classes.text}`}>Gallery</h1>
            </div>
            <div className={`relative w-full h-full`}>
              <img alt="image here" src="/puneri-gallery-desk-banner-right.png" className="absolute w-full scale-102 items-end object-right top-65 left-20 bottom-0 " />
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

        {/* Conditionally render the gallery grid */}
        {isGalleryVisible ? (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-center items-center gap-8 mx-[15px] lg:mx-0">
            {gallery.length > 0 ? (
              gallery.map((data, i) => (
                <Link key={i}  href={`/gallery/${data.id}`}>
                  <GalleryCard src={data.main_image} title={data.name} />
                </Link>
              ))
            ) : (
              <p className="w-[100%] h-[300px] text-3xl text-[#f40] flex justify-center items-center">Loading gallery available for this season.</p>
            )}
          </div>
        ) : (
          <p>Gallery is not available.</p>
        )}

      </section>
      <section>
      <div className="flex w-full overflow-hidden">
       <a href="#" className=" w-[100%] h-[200px] bg-[url('/puneri-tv1.png')] bg-[length:101%] bg-center bg-no-repeat relative hover:scale-125 transition-transform duration-300 ease-out  overflow-hidden"> <div  className=""><h4 className={`bg-black/50 font-bold flex justify-center items-center  text-[26px] tracking-[1px] uppercase text-white absolute top-0 left-0 w-[100%] h-[100%] ${exoReg.className}`}>Puneri Tv</h4></div></a>
       <a href="#" className=" w-[100%] h-[200px] bg-[url('/puneri-wallpaper.png')] bg-[length:101%] bg-center bg-no-repeat relative hover:scale-125 transition-transform duration-300 ease-out overflow-hidden "> <div  className=""><h4 className={`bg-black/50 font-bold flex justify-center items-center text-[26px] tracking-[1px] uppercase text-white absolute top-0 left-0 w-[100%] h-[100%] ${exoReg.className}`}>Wallpapers</h4></div></a>
       <a href="#" className=" w-[100%] h-[200px] bg-[url('/puneri-blogs.png')] bg-[length:101%] bg-center bg-no-repeat relative hover:scale-125 transition-transform duration-300 ease-out overflow-hidden"> <div  className=""><h4 className={`bg-black/50 font-bold flex justify-center items-center text-[26px] tracking-[1px] uppercase text-white absolute top-0 left-0 w-[100%] h-[100%] ${exoReg.className}`}>Blogs</h4></div></a>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
