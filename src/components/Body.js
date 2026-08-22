import { useEffect, useState } from "react";
import ResList from "../utils/mockdata";
import { Rescard } from "./Rescard";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState(ResList);
  const[filterRestaurent,setFilterRestaurent]=useState(ResList);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    // fetchData();
  }, []);
  console.log("Body Rendered");
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/cart");
    const json = await data.json();
    console.log(json);
  };
  // if(listOfRestaurent.length === 0){
  //   return <Shimmer/>;
  // }
  return listOfRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <h3 className="filter">
        <div className="Search">
          <input
            type="text"
            className="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="searchbtn"
            onClick={() => {
              console.log(searchText);
              const filteredRest = listOfRestaurent.filter((res) => {
                return res.info.name.toLowerCase().includes(searchText.toLowerCase())

               }   );
              console.log(filteredRest);

              setFilterRestaurent(filteredRest);
              
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const restaurList = listOfRestaurent.filter(
              (res) => res.info.rating.value > 4,
            );
            setListOfRestaurent(restaurList);
            console.log(restaurList);
            console.log(listOfRestaurent);
          }}
        >
          Top Rated Restaurent
        </button>
      </h3>
      <div className="card-container">
        {filterRestaurent.map((restau) => (
          <Rescard key={restau.info.id} rest={restau} />
        ))}
      </div>
    </div>
  );
};

export default Body;
