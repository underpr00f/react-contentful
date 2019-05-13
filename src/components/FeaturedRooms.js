import React, { useContext } from "react";
import Title from "./Title";
import { RoomContext } from "../context";
import Room from "./Room";
import Loading from "./Loading";

export const FeaturedRooms = () => {
  const context = useContext(RoomContext);
  let {
    featuredRooms: rooms,
    loading
  } = context;

  rooms = rooms.map(room => {
    return <Room key={room.id} room={room} />;
  });
  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : rooms}
      </div>
    </section>
  );
}
