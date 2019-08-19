import React from "react";
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import defaultBcg from "../images/room-1.jpeg";

const Error = () => {

  return (
	    <StyledHero img={defaultBcg}>
	      <Banner title="404" subtitle="Page not found">
	        <Link to="/" className="btn-primary">
	          return home
	        </Link>
	      </Banner>
	    </StyledHero>
  );
};

export default Error;
