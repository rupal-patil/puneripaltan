"use client";

import { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axiosHttp from "@/lib/utils/axiosinterceptor";
import { useParams } from "next/navigation";
import classes from "./page.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HiArrowSmallLeft,HiArrowSmallRight  } from "react-icons/hi2";
    // Custom Arrows
    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={`${classes.customprevarrow}`} onClick={onClick}>
                <HiArrowSmallRight />
            </div>
        );
    };
    
    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={`${classes.customnextarrow}`} onClick={onClick}>
               
                <HiArrowSmallLeft />
            </div>
        );
    };
const SingleGallery = () => {
    const { SingleGallery } = useParams();
    const [sgallery, setSGallery] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleImg = (image) => {
        const index = sgallery.match_images.findIndex((img) => img === image);
      setSelectedImage(image);
      setCurrentIndex(index);
      setIsOpen(true);
    };
    

    useEffect(() => {
      if (SingleGallery) {
        const fetchAlbum = async () => {
          const response = await axiosHttp.get(`single_gallary?id=${SingleGallery}`);
          setSGallery(response.data);
          setIsLoading(false);
        };
        fetchAlbum();
      }
    }, [SingleGallery]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: sgallery?.match_images?.length,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow />,
        initialSlide: currentIndex,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentIndex(newIndex);
            setSelectedImage(sgallery.match_images[newIndex]);
          },
        className:"",
    }
    useEffect(() => {
        const handleKeyDown = (e) => {
          if (!isOpen || !sgallery?.match_images?.length) return;
      
          if (e.key === "ArrowLeft") {
            const prevIndex = (currentIndex - 1 + sgallery.match_images.length) % sgallery.match_images.length;
            setCurrentIndex(prevIndex);
            setSelectedImage(sgallery.match_images[prevIndex]);
          }
      
          if (e.key === "ArrowRight") {
            const nextIndex = (currentIndex + 1) % sgallery.match_images.length;
            setCurrentIndex(nextIndex);
            setSelectedImage(sgallery.match_images[nextIndex]);
          }
      
          if (e.key === "Escape") {
            setIsOpen(false);
          }
        };
      
        window.addEventListener("keydown", handleKeyDown);
      
        return () => {
          window.removeEventListener("keydown", handleKeyDown);
        };
      }, [isOpen, currentIndex, sgallery]);
      
  
    return (
      <>
        <section className="bg-[url('/puneri-gallery-mob-banner.jpg')] sm:bg-[url('/puneri-gallery-mob-banner.jpg')] md:bg-[url('/puneri-tv-desktop-banner.jpg')] lg:bg-[url('/puneri-tv-desktop-banner.jpg')] bg-cover bg-center bg-no-repeat h-[700px] relative">
          <div className={`container mx-auto h-full overflow-hidden`}>
            <div className="flex w-full h-full items-center">
              <div className={`w-[100%] h-full relative`}>
                <img src="/banner-title.png" className="w-[75%] absolute top-60 left-40" />
                <h1 className={`w-full absolute top-[41%] left-[10%] text-white text-[40px] md:text-[90px] lg:text-[120px] tracking-[16px] ${classes.text}`}>Gallery</h1>
              </div>
              <div className={`relative w-full h-full`}>
                <img src="/puneri-gallery-desk-banner-right.png" className="absolute w-full scale-102 items-end object-right top-65 left-20 bottom-0 " />
              </div>
            </div>
          </div>
        </section>
  
        {!isLoading && (
          <div className="container mx-auto py-6 flex flex-col justify-center items-center">
            {sgallery ? (
              <>
                <h2 className={`text-center tracking-[2px] uppercase text-[50px] pb-[30px] text-[#f40] w-[80%] ${classes.text}`}>
                  {sgallery.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-[100%] lg:w-[80%] p-2">
                  {sgallery.match_images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      className={`w-full h-[250px] ${classes.img} cursor-pointer`}
                      onClick={() => handleImg(image)}
                      alt="Gallery Image"
                    />
                  ))}
                </div>
  
                {selectedImage && (
  <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0  bg-transparent bg-opacity-80 backdrop-blur-sm" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex items-center justify-center text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full transform overflow-hidden bg-black p-6 text-left align-middle shadow-xl transition-all relative">
              <button
                type="button"
                className="absolute top-[-1%] lg:top-0 right-2 text-white text-[30px] bg-transparent flex items-center justify-center"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>

              <div className={`${classes.box}`}>
                {/* Main selected image */}
              <div className="flex items-center justify-center mb-4 py-[117px] md:py-[138px] lg:py-0">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-[100%] lg:w-[70%] h-fit lg:h-[80vh] object-cover object-top "
                />
              </div>

              {/* Thumbnail carousel */}
              <Slider
                {...settings}
              >
                {sgallery.match_images.map((img, idx) => (
                  <div key={idx} className="flex justify-center items-center px-1">
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      onClick={() => setSelectedImage(img)}
                      loading="lazy"
                      className={`cursor-pointer rounded-md border-2 ${
                        img === selectedImage ? "border-[#fff]" : "border-transparent"
                      } hover:border-[#fff] transition-all h-[100px] w-full object-cover object-top`}
                    />
                  </div>
                ))}
              </Slider>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
)}


              </>
            ) : (
              <p>Gallery not found</p>
            )}
          </div>
        )}
      </>
    );
  };
  
  export default SingleGallery;
  