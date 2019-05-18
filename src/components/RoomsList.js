import React, { Suspense, lazy } from "react";
// import Room from "./Room";

const Room = lazy(() => import('./Room'));


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
            <Suspense key={item.id} fallback={<div>Loading...</div>}>
              <Room room={item} />
            </Suspense>
            );
        })}
      </div>
    </section>
  );
};

export default RoomsList;
