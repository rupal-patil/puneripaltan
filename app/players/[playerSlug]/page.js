/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import axiosHttp from "@/lib/utils/axiosinterceptor";
import { useParams } from "next/navigation";
import classes from "./page.module.css"
import Banner from "@/component/Banner";
import { Exo } from "next/font/google";
import PlayerSection from "@/component/PlayerSection";
import Carousel2 from "@/component/Carousel2";
const exo2=Exo({
  variable:"exo-bold",
  subsets:["latin"],
  weight:"900"
})
const exomed=Exo({
  variable:"exo-med",
  subsets:["latin"],
  weight:"500"
})

const additionalData=[
  {
    id:1,
    data:{
      mobImg:"/mob-sanket-sawant.png",
      deskImg:"/sanket-sawant.png"
    }
  },
  {
    id:2,
    data:{
      mobImg:"/mob-pankaj-mohite.png",
      deskImg:"/pankaj-mohite.png"
    }
  },
  {
    id:3,
    data:{
      mobImg:"/mob-mohit-goyat.png",
      deskImg:"/mohit-goyat.png"
    }
  },
  {
    id:4,
    data:{
      mobImg:"/mob-akash-shinde.png",
      deskImg:"/akash-shinde.png"
    }
  },
  {
    id:5,
    data:{
      mobImg:"/mob-aditya-shinde.png",
      deskImg:"/aditya-shinde.png"
    }
  },
  {
    id:6,
    data:{
      mobImg:"/mob-abhinesh-nadarajan.png",
      deskImg:"/abhinesh-nadarajan.png"
    }
  },
  {
    id:7,
    data:{
      mobImg:"/mob-gaurav-khatri.png",
      deskImg:"/gaurav-khatri.png"
    }
  },
  {
    id:8,
    data:{
      mobImg:"/mob-badal-singh.png",
      deskImg:"/badal-singh.png"
    }
  },
  {
    id:9,
    data:{
      mobImg:"/mob-aslam-inamdar.png",
      deskImg:"/aslam-inamdar.png"
    }
  },
  {
    id:10,
    data:{
      mobImg:"/mob-mc.png",
      deskImg:"/mc.png"
    }
  },
]
const SinglePlayer = () => {
const params=useParams();
const playerSlug=params.playerSlug;
  const[player,setPlayerData]=useState(null);
 
  useEffect(()=>{
    const fetch=async ()=>{
      const response=await axiosHttp.get(`/single_player?id=${playerSlug}`);
      // console.log(response.data)
      const playerData = response.data;
      // Find the player matching the slug/id
      const playerMatch = playerData.find((p) => p.id === playerSlug);
      // console.log(playerMatch)
      if (playerMatch) {
        // Find the additional data for the player
        const additionalPlayerData = additionalData.find(
          (data) => data.id === parseInt(playerSlug)
        );
        console.log("Additional data found:", additionalPlayerData);
        if (additionalPlayerData) {
          // Add the additional data to the player object
          playerMatch.additionalData = additionalPlayerData.data;
        }

        console.log(playerMatch);
        setPlayerData(playerMatch);
      }
      }
    
    fetch();
  },[playerSlug])
  return (
    <>
    <div>
    {player ? (
      <>
        {/* Use the data only when it's available */}
        <section>
        <div>
                <img src={player.additionalData.deskImg} width={"100%"} className={`${classes.deskblock}`} alt="image here" />
                <img src={player.additionalData.mobImg} width={"100%"} className={`${classes.desknone}`} alt="image here" />
            </div>
        </section>
        <section className="mx-auto py-[50px] bg-[url('/singleplayerW.jpg')] bg-cover bg-center">
          <div className="container mx-auto flex flex-col sm:flex-row w-[80%] sm:w-full md:flex-col lg:flex-row ">
            <div className="w-full lg:w-[80%] ">
              <img src={player.full_image} className="h-[700px] block mx-auto" alt="image here"/>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center">
              <div className="w-full">
                <Banner title={"jersey no."}/>
                <p className={`text-[20px] ${exo2.className}  uppercase tracking-[1px] text-center mt-[25px] text-black`}>{player.jersey_no}</p>

              </div>
              <div className="w-full">
              <Banner title={"Position"}/>
              <p className={`text-[20px] ${exo2.className}  uppercase tracking-[1px] text-center mt-[25px] text-black`}>{player.position}</p>
              </div>
              </div>
              <hr style={{color:"#c7c1c1"}} className="my-12"/>
              <div>
                <div className="w-fit mx-6 mb-12"><Banner title={"Vitals"}/></div>
                <div className="flex mx-0 lg:mx-12  my-6">
                  <p className={`text-[#959595] text-[16px] ${exomed.className} w-full`}>Name</p>
                  <p className={`text-[#000] text-[16px] ${exomed.className} w-full`}>{player.name}</p>
                </div>
                <div className="flex mx-0 lg:mx-12 my-6">
                  <p className={`text-[#959595] text-[16px] ${exomed.className} w-full`}>Date of Birth</p>
                  <p className={`text-[#000] text-[16px] ${exomed.className} w-full`}>{player.date_of_birth}</p>
                </div>
                <div className="flex mx-0 lg:mx-12 my-6">
                  <p className={`text-[#959595] text-[16px] ${exomed.className} w-full`}>Nationality</p>
                  <p className={`text-[#000] text-[16px] ${exomed.className} w-full`}>{player.nationality}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div className="flex justify-center"><h2 className={`text-[50px] md:text-[80px] lg:text-[110px] text-[#ff7500] tracking-[7px] uppercase ${classes.font}`}>statistics</h2></div>
            <div className="bg-[#ddd] border-2 border-[#ddd] flex flex-col sm:flex-col md:flex-col lg:flex-row  py-[35px] overflow-hidden">
              <div className="w-100 mt-0 md:mt-[-50px] lg:mt-[-50px]"><PlayerSection  bannerTitle={"Overall"} bgColor={"#ddd"}/></div>
              <div className="w-full flex flex-col sm:flex-col md:flex-col lg:flex-row pr-0 lg:pr-10 pb-[50px] lg:pb-0 pt-0 md:pt-0 lg:pt-6 justify-end items-center sm:items-center md:items-center lg:items-start gap-10">
              <div className="w-fit mt-8 z-999" >
                 <h4 className={`text-center w-[150px] py-[5px] bg-white text-[40px] mx-auto ${classes.h4}`}>{player.Matches_played}</h4>
                 <h5 className="w-[180px] uppercase text-[16px] text-center tracking-[1px] py-1">MATCHES PLAYED</h5>
                 </div>
                 <div className="w-fit mt-8 z-999" >
                 <h4 className={`text-center w-[150px] py-[5px] bg-white text-[40px] mx-auto ${classes.h4}`}>{player.total_ponints_earned}</h4>
                 <h5 className="w-[180px] uppercase text-[16px] text-center tracking-[1px] py-1">TOTAL POINTS EARNED</h5>
                 </div>
                 <div className="w-fit mt-8 z-999">
                 <h4 className={`text-center w-[150px] py-[5px] bg-white text-[40px] mx-auto ${classes.h4}`}>{player.most_points_in_a_match}</h4>
                 <h5 className="w-[180px] uppercase text-[16px] text-center tracking-[1px] py-1">MOST POINTS IN A MATCH</h5>
                 </div>
                 <div className="w-fit mt-8 z-999">
                 <h4 className={`text-center w-[150px] py-[5px] bg-white text-[40px] mx-auto ${classes.h4}`}>{player.not_out_percentage}</h4>
                 <h5 className="w-[180px] uppercase text-[16px] text-center tracking-[1px] py-1">NOT OUT PERCENTAGE</h5>
                 </div>
                </div>
              </div>
            <div className="bg-[#fff] border-2 border-[#fff] flex flex-col sm:flex-col md:flex-col lg:flex-row  py-[35px] overflow-hidden">
              <div className="w-100 mt-0 md:mt-[-50px] lg:mt-[-50px]"><PlayerSection bannerTitle={"Raid"} bgColor={"#fff"}/></div>
                <div className="w-full flex flex-col sm:flex-col md:flex-col lg:flex-row pr-0  pt-0 md:pt-0 lg:pt-6 pb-[50px] lg:pb-0 items-center sm:items-center md:items-center lg:items-start ml-0 lg:ml-[20%]  gap-10">
                 <div className="w-fit mt-8 z-999" >
                 <h4 className={`text-center w-[150px] py-[5px] bg-[#ddd] text-[40px] mx-auto ${classes.h4}`}>{player.no_of_super_raids}</h4>
                 <h5 className="w-[180px] uppercase text-[16px] text-center tracking-[1px] py-1">No of super Raids</h5>
                 </div>
                 <div className="w-fit mt-8 z-999" >
                 <h4 className={`text-center w-[150px] py-[5px] bg-[#ddd] text-[40px] mx-auto ${classes.h4}`}>{player.super_10s}</h4>
                 <h5 className="w-[180px] uppercase text-[16px] text-center tracking-[1px] py-1">Super 10s</h5>
                 </div>
                 <div className="w-fit mt-8 z-999">
                 <h4 className={`text-center w-[150px] py-[5px] bg-[#ddd] text-[40px] mx-auto ${classes.h4}`}>{player.avg_raid_points}</h4>
                 <h5 className="w-[180px] uppercase text-[16px] text-center tracking-[1px] py-1">Avg. Raid points</h5>
                 </div>
                </div>
              </div>
            <div className="bg-[#ddd] border-2 border-[#ddd] flex flex-col sm:flex-col md:flex-col lg:flex-row  py-[35px] overflow-hidden">
              <div className="w-100 mt-0 md:mt-[-50px] lg:mt-[-50px]"><PlayerSection bannerTitle={"Tackles"} bgColor={"#ddd"}/></div>
              <div className="w-full flex flex-col sm:flex-col md:flex-col lg:flex-row pr-0 lg:pr-10  pt-0 md:pt-0 lg:pt-6 pb-[50px] lg:pb-0 justify-center ml-0 lg:ml-[13%] items-center sm:items-center md:items-center lg:items-top gap-12">
              <div className="w-fit mt-8 z-999" >
                 <h4 className={`text-center w-[150px] py-[5px] bg-white text-[40px] mx-auto ${classes.h4}`}>{player.no_of_super_tackles}</h4>
                 <h5 className="w-[180px] uppercase text-[16px] text-center tracking-[1px] py-1">No. of super tackles</h5>
                 </div>
                 <div className="w-fit mt-8 z-999" >
                 <h4 className={`text-center w-[150px] py-[5px] bg-white text-[40px] mx-auto ${classes.h4}`}>{player.total_tacle_points}</h4>
                 <h5 className="w-[180px] uppercase text-[16px] text-center tracking-[1px] py-1">Total tackle points</h5>
                 </div>
                </div>
              </div>
          </div>
        </section>
      </>
    ) : (
      <p className="w-[100%] h-[100vh] text-3xl text-[#f40] flex justify-center items-center">Loading Player Data...</p> // Show loading message if player data is not available yet
    )}
  </div>
  <section  className="h-[650px] py-[50px]">
    <div>
    <div>
      <h2 className={`text-center text-[#ff7500] tracking-[7px] text-[50px] md:text-[70px] lg:text-[110px] uppercase leading-[1.1] mb-[20px] ${classes.font}`}>Other player</h2>
    </div>
    <div className="w-[80%] mx-auto mt-[0px] lg:mt-[-20px]">
    <Carousel2/>
    </div>
   
    </div>
   
  </section>
    </>
  );
};

export default SinglePlayer;
