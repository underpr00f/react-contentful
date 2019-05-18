import React, { Suspense } from "react";
import loadingGif from "../images/gif/loading-arrow.gif";
// import Room from "./Room";

// const Room = lazy(() => import('./Room'));
const Room = React.lazy(() => {
  const x = new Promise((resolve) => {
    setTimeout(() => {
      return resolve(import("./Room"))
    }, 5000)
  })
  return x;
});

const RoomsList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map(item => {
          return (
            <Suspense key={item.id} fallback={<img src={loadingGif} alt="" />}>
              <Room room={item} />
            </Suspense>
            );
        })}
      </div>
    </section>
  );
};

export default RoomsList;
