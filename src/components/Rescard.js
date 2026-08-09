import {syle} from "../app";
import { CDN_LINK } from "../utils/constants";
export const Rescard = (props) => {
  const {rest}=props;
  const{name,cuisines,rating,costForTwo,locationInfo,mediaFiles}=rest.info;
  return (
    <div className="res-card" style={syle}>
      <div className="card-image">
        <img
          className="logo"
          src={CDN_LINK + mediaFiles[1].url}
          alt="cardlogo"
        />
      </div>
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{rating.value} stars </h3>
      <h3>{costForTwo}</h3>
      <h3>{locationInfo.distanceString}</h3>
    </div>
  );
};