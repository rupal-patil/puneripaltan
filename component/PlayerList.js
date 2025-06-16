// PlayerList.js
import Player from "@/component/Player"; // Import your Player component
import Link from "next/link";
const PlayerList = ({ playersData}) => {
  return (
    <div className="container mx-auto px-[80px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {playersData?.map((p, i) => (
          <Link key={i} href={`/players/${p.id}`}>
            <Player
              src={p.profile_image}
              fname={p.name.split(" ")[0]}
              lname={p.name.split(" ")[1]}
              type={p.cat_name.slice(0, -1)} // Assuming category name ends with "s"
              name={p.name.split(" ").map((name) => name.toLowerCase()).join("-")}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PlayerList;
