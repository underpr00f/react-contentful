import React from "react";
import { Link } from "react-router-dom";
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";
import { Services } from "../components/Services";
import { FeaturedRooms } from "../components/FeaturedRooms";
import defaultBcg from "../images/defaultBcg.jpg";

const home = () => {

  return (
    <>
      <StyledHero img={defaultBcg}>
        <Banner
          title="Luxurious rooms"
          subtitle="Deluxe rooms starting at $399"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </StyledHero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default home;
