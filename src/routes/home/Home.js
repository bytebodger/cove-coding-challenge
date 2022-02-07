import React, { useState } from "react";
import { DatePicker } from "../../common/components/DatePicker";
import { DropDownSelect } from "../../common/components/DropDownSelect";
import { ReservationList } from "../../common/components/ReservationList";
import { use } from "../../common/objects/use";
import { allow } from "@toolz/allow-react";
import { is } from "../../common/objects/is";

export const Home = () => {
  const [date, setDate] = useState(new Date());
  const [room, setRoom] = useState("room-a");
  const reservations = use.reservationsEndpoint;

  const formatRoomName = (room = "") => {
    allow.aString(room, is.not.empty);
    return room.toLowerCase().replaceAll(" ", "-");
  };

  const getFilteredReservations = () => {
    const formatttedReservations = reservations.reservations.map(
      (reservation) => {
        const formattedRoomName = formatRoomName(reservation.room.name);
        return {
          end: reservation.end,
          id: reservation.id,
          room: formattedRoomName,
          start: reservation.start,
        };
      }
    );
    const reservationsFilteredByRoom = formatttedReservations.filter(
      (reservation) => reservation.room === room
    );
    return reservationsFilteredByRoom.filter((reservation) => {
      const reservationEndDate = reservation.end.split("T")[0];
      const reservationStartDate = reservation.start.split("T")[0];
      let dateFilter = new Date(date);
      dateFilter = dateFilter.toISOString();
      dateFilter = dateFilter.split("T")[0];
      return (
        reservationEndDate === dateFilter || reservationStartDate === dateFilter
      );
    });
  };

  const getRooms = () => {
    const rooms = [];
    reservations.reservations.forEach((reservation) => {
      if (!rooms.some((room) => room.id === reservation.room.id)) {
        rooms.push({
          id: reservation.room.id,
          name: reservation.room.name,
          value: formatRoomName(reservation.room.name),
        });
      }
    });
    return rooms;
  };

  const updateDate = (date) => {
    setDate(date);
  };

  const updateRoom = (room) => {
    setRoom(room);
  };

  return (
    <div className={"app"}>
      <div className={"app-filters"}>
        <div className={"app-filter-item"}>
          <DatePicker value={date} onChange={updateDate} />
        </div>
        <div className={"app-filter-item"}>
          <DropDownSelect
            value={room}
            onChange={updateRoom}
            options={getRooms()}
          />
        </div>
      </div>
      <div className={"app-reservations"}>
        <ReservationList reservations={getFilteredReservations()} />
      </div>
    </div>
  );
};
