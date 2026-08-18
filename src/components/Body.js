import { useEffect, useState } from "react";
import ResList from "../utils/mockdata";
import { Rescard } from "./Rescard";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurent,setListOfRestaurent]=useState([]);
  
  useEffect(()=>{
// fetchData();
  },[]);
  
  const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/cart");
    const json =await data.json();
    console.log(json); 
  }
  if(listOfRestaurent.length === 0){
    return <Shimmer/>;
  }
  return (
    <div className="body-container">
      <h3 className="filter">
        <button
          className="filter-btn"
          onClick={() => {
          const  restaurList = listOfRestaurent.filter(
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
        {listOfRestaurent.map((restau) => (
          <Rescard key={restau.info.id} rest={restau} />
        ))}
      </div>
    </div>
  );
};

export default Body;
