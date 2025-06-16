"use client"
import { useState, useEffect } from "react";
import axiosHttp from "@/lib/utils/axiosinterceptor";
import PlayerSection from "@/component/PlayerSection";
import PlayerList from "@/component/PlayerList"; // Import the PlayerList component
// import { useRouter } from "next/navigation";
import Link from "next/link";
import VanillaTilt from "vanilla-tilt";
import classes from "./page.module.css";

const Players = () => {
  // const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [playersData, setPlayersData] = useState({
    raiders: [],
    defenders: [],
    allrounders: [],
  });
  const [loading, setLoading] = useState({
    raiders: true,
    defenders: true,
    allrounders: true,
  });
  const [error, setError] = useState(null);

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const response = await axiosHttp.get("/category_list");
      setCategories(response.data);
    } catch (error) {
      setError("Failed to load categories");
    }
  };

  // Fetch players for a category
  const fetchPlayers = async (categoryId, categoryName) => {
    try {
      const response = await axiosHttp.get(`/player_list?cat_id=${categoryId}`);
      setPlayersData((prevData) => ({
        ...prevData,
        [categoryName]: response.data,
      }));
    } catch (error) {
      setError(`Failed to load ${categoryName} players`);
    } finally {
      setLoading((prevLoading) => ({
        ...prevLoading,
        [categoryName]: false,
      }));
    }
  };

  useEffect(() => {
    fetchCategories(); // Fetch categories when the component mounts
  }, []);

  useEffect(() => {
    if (categories.length) {
      categories.forEach((category) => {
        const categoryName = category.cat_name.toLowerCase();
        fetchPlayers(category.id, categoryName);
      });
    }
  }, [categories]);

  // const handlePlayerClick = (id) => {
  //   // Navigate to the single player page using the player ID
  //   router.push(`/players/${id}`);  // Use player ID in the URL instead of the name
  // };

  if (error) {
    return <div>Error: {error}</div>;
  }

  // console.log(playersData.allRounders)
  useEffect(() => {
    if (categories.length) {
      categories.forEach((category) => {
        const normalizedName = category.cat_name.toLowerCase().replace(/\s+/g, ''); // <-- normalize!
        fetchPlayers(category.id, normalizedName);
      });
    }
  }, [categories]);
 

  return (
    <>
      <section
        className={`bg-[url('/players-banner-mobile.jpg')] sm:bg-[url('/players-banner-mobile.jpg')] md:bg-[url('/player-bg.jpg')] lg:bg-[url('/player-bg.jpg')] bg-cover bg-center bg-no-repeat h-[700px] relative ${classes.players}`}
      >
        <div className={`container mx-auto ${classes.container}`}>
          <div className={`${classes.row} flex`}>
            <div className={`${classes.boxOut1}`}>
              <img className={`${classes.banner}`} src="/banner-title.png" />
              <h1>Players</h1>
            </div>
            <div className={`${classes.boxOut2}`}>
              <img src="/players_right.png" className={`${classes.introPlayer}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Raiders Section */}
      <section className="overflow-hidden pb-[50px]" style={{ backgroundColor: "#f0ecf4" }}>
        <PlayerSection bannerTitle="Raiders" bgColor={"#f0ecf4"} />
        {loading.raiders ? (
          <div>Loading Raiders...</div>
        ) : (
          <PlayerList playersData={playersData.raiders} />
        )}
      </section>

      {/* Defenders Section */}
      <section className="overflow-hidden pb-[50px]" style={{ backgroundColor: "#fff" }}>
        <PlayerSection bannerTitle="Defenders" bgColor={"fff"}/>
        {loading.defenders ? (
          <div>Loading Defenders...</div>
        ) : (
          <PlayerList playersData={playersData.defenders} />
        )}
      </section>

      {/* All Rounders Section */}
      <section className="overflow-hidden pb-[50px]" style={{ backgroundColor: "#f0ecf4" }}>
        <PlayerSection bannerTitle="All Rounders" bgColor={"#f0ecf4"} />
        {loading.allrounders ? (
          <div>Loading All Rounders...</div>
        ) : (
          <PlayerList playersData={playersData.allrounders} />
        )}
      </section>
    </>
  );
};

export default Players;
