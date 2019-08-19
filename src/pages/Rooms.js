import React from "react";
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";
import defaultBcg from "../images/room-1.jpeg";

const Rooms = () => {

  return (
    <>
      <StyledHero hero="roomsHero" img={defaultBcg}>
        <Banner 
          title="Our rooms"
          subtitle="Look at our rooms list">
            <Link to="/" className="btn-primary">
              return home
            </Link>
        </Banner>
      </StyledHero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
