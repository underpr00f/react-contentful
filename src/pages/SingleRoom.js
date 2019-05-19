import React, { useContext } from "react";
import defaultBcg from "../images/room-1.jpeg";

import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import Loading from "../components/Loading";
import StyledHero from "../components/StyledHero";
export const SingleRoom = ({match}) => {
  const context = useContext(RoomContext);
  const { slug } = match.params;

  const { getRoom, loading } = context;
  const room = getRoom(slug);
  
  if (loading) {
    return <Loading />;
  } else if (!room) {
    return (
      <StyledHero img={defaultBcg}>
        <Banner title="No such room" subtitle="No such room could be found">
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
    );
  }
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images
  } = room;
  const [main, ...defaultImages] = images;

  return (
    <>
      <StyledHero img={main || defaultBcg}>
        <Banner 
          title={`${name} room`}
          subtitle={`Look at ${name} accommodation`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {defaultImages.map((item, index) => (
            <img key={index} src={item} alt={name} />
          ))}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price : ${price}</h6>
            <h6>size : {size} SQFT</h6>
            <h6>
              max capacity :
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras </h6>
        <ul className="extras">
          {extras.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
