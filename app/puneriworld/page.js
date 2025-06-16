/* eslint-disable @next/next/no-img-element */
import classes from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { Love_Light } from "next/font/google";

export const metadata = {
  title: "Puneri World",
  description: "Puneri World Page",
};

const love = Love_Light({
  variable: "love",
  subsets: ["latin"],
  weight: "400",
});

const PuneriWorld = () => {
  return (
    <section>
      <div>
        <img
          src="/paltan-bg-desktop.png"
          width={"100%"}
          className={`${classes.deskblock}`}
          alt="image here"
        />
        <img
          src="/paltan-bg-phone.png"
          width={"100%"}
          className={`${classes.desknone}`}
          alt="image here"
        />
      </div>

      <div className={`${classes.container} flex flex-col lg:flex-row`}>
        <Link href="/puneritv" passHref>
         
            <div
              className={`${classes.box}`}
              style={{ backgroundImage: "url(/puneri-tv.png)" }}
            >
              <h3>Puneri TV</h3>
            </div>
         
        </Link>

        <Link href="/gallery" passHref>
        
            <div
              className={`${classes.box}`}
              style={{ backgroundImage: "url(/puneri-gallery.png)" }}
            >
              <h3>Gallery</h3>
            </div>
         
        </Link>
      </div>
    </section>
  );
};

export default PuneriWorld;
