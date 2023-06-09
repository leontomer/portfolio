import React from "react";
import { Card } from "@mui/material";
import "./Home.css";
import { myDescription, imgUrl } from "../../Constants";

const Home = () => {
  return (
    <div className="container">
      <div>
        <Card variant="outlined" sx={{ maxHeight: 230 }}>
          <img
            src={imgUrl}
            width="250"
            height="230"
            alt="Picture of the author"
          />
        </Card>
      </div>
      <div>
        {myDescription.split("-").map((line, index) => (
          <div className="desc">{line}</div>
        ))}
      </div>
    </div>
  );
};

export default Home;
