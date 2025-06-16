'use client'; // This ensures that the component is client-side only
import dynamic from 'next/dynamic';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import classes from "./Carousel.module.css";
import CarouselPlayers from './CarouselPlayers';
import { useState,useEffect } from 'react';
import { Exo } from 'next/font/google';
import axios from 'axios';
// Dynamically import react-slick to avoid SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });
const exoReg=Exo({
    variable:"exo_regular",
    subsets:["latin"],
    weight:"400"
})
const exoBold=Exo({
    variable:"exo_bold",
    subsets:["latin"],
    weight:"700"
})
// Custom Arrows
const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className={`${classes.customprevarrow}`} onClick={onClick}>
            <IoMdArrowDropright />
        </div>
    );
};

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className={`${classes.customnextarrow}`} onClick={onClick}>
            <IoMdArrowDropleft />
        </div>
    );
};

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [player, setPlayer] = useState([]);

    useEffect(() => {
      const urls = [
        'https://appy.trycatchtech.com/v3/puneri_paltan/player_list?cat_id=1',
        'https://appy.trycatchtech.com/v3/puneri_paltan/player_list?cat_id=2',
        'https://appy.trycatchtech.com/v3/puneri_paltan/player_list?cat_id=3',
      ];
  
      Promise.all(urls.map(url => axios.get(url)))
        .then(responses => {
          const allPlayers = responses.flatMap(res => res.data);
          setPlayer(allPlayers);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />, // Use custom previous arrow
        nextArrow: <NextArrow />, // Use custom next arrow
        className: classes.myCustomCarousel,
        autoplay: true,
        pauseOnHover:true,
        afterChange: function (index) {
            // Update the active slide index when the slide changes
            setActiveIndex(index);
          },
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
        // centerMode:true,
    };

    return (
        <div className="container mx-auto h-auto">
      <Slider {...settings} className="h-[500px] overflow-visible" >
        {player.map((item, index) => (
          <div
            key={index}
            className={`${classes.carouselItem} ${index === activeIndex ? classes.activeSlide : ''} `} // Apply styles based on the active slide index
          >
            <CarouselPlayers className={classes.carousel} src={item.profile_image} id={item.id} />
            {index === activeIndex && <div className="mt-[-25px] z-[9] text-center ">
                        <h3 className={`text-white text-[35px] m-0 tracking-[4px] capitalize ${exoReg.className}`}>{item.name.split(" ")[0]}</h3>
                        <h3 className={`text-white text-[35px] m-0 mt-[-6px] tracking-[4px] capitalize ${exoBold.className}`}>{item.name.split(" ")[1]}</h3>
                        <h5 className={`text-[#ff7500] text-[20px] m-0 mt-[-10px] tracking-[2px] animate-scaleUp ${exoReg.className}`}>{item.cat_name.slice(0, -1)}</h5>
                    </div>}
            {index !== activeIndex && <h3 className={`text-white text-center text-[30px] m-0 mt-[-80px] tracking-[4px] capitalize ${exoReg.className} opacity-100 brightness-[200%]`}>
            {item.name.split(" ")[0]}
          </h3>
        }
          </div>
        ))}
      </Slider>
    </div>
    );
};

export default Carousel;
