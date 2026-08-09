import ResList from "../utils/mockdata";
import {Rescard} from "./Rescard";

const Body = () => {
  return (
    <div className="body-container">
      <h3 className="filter">Search</h3>
      <div className="card-container">
        {ResList.map((restau) =>(<Rescard key={restau.info.id}rest={restau}/>))}
      </div>
    </div>
  );
};

export default Body;