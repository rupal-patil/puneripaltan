import classes from "./Carousel2.module.css"
import Slider from "react-slick";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { useState, useEffect } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const PlayerCard = ({ player_fname, player_lname, title, src, pid }) => {
    return (
        <div className={classes.card}>
            <Link href={`/players/${pid}`} className="cursor-pointer">
            <div className={classes.player_name}>
            <div className="text-center">
                <h3 className={classes.fname}>{player_fname}</h3>
            </div>
            <div className="text-center">
                <h3 className={classes.lname}>{player_lname}</h3>
            </div>
            <div className="text-center">
                <h3 className={classes.title}>
                    {title}
                </h3>
            </div>
            </div>
            <div>
                <img src={src} className={classes.player_image} alt="image here"/>
            </div>
            </Link>
        </div>
    )
}

const Carousel2 = () => {

    const [player, setPlayer] = useState([]);

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={`${classes.customprevarrow}`} onClick={onClick}>
                <IoMdArrowDropright />
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={`${classes.customnextarrow}`} onClick={onClick}>
                <IoMdArrowDropleft />
            </div>
        );
    };

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
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow />,
        autoplay: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 1,
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
    };


    return (
        <div className="container mx-auto">
            <Slider {...settings} className={`h-50 w-full mx-auto mb-5 ${classes.slider}`}>
                {player.map((detail, index) => (
                    <div key={index}>
                        <PlayerCard pid={detail.id} player_fname={detail.name.split(" ")[0]} player_lname={detail.name.split(" ")[1]} title={detail.cat_name.slice(0,-1)} src={detail.full_image} />
                    </div>
                ))}
            </Slider>

        </div>
    )
}

export default Carousel2;