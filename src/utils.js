/**
 * @param {{ start: Date, end: Date }[]} reservations - list of reservations
 *
 * @returns true if any 2 reservations conflict
 *   - reservations conflict if their times overlap in any way
 *   - reservations DO NOT conflict if they are just touching each other (reservation1.end === reservation2.start)
 */
export const isScheduleConflict = (reservations) => {
  let conflictExists = false;
  reservations.forEach((firstReservation, firstIndex) => {
    reservations.forEach((secondReservation, secondIndex) => {
      if (
        conflictExists ||
        firstReservation?.room.name !== secondReservation?.room.name ||
        secondIndex <= firstIndex
      )
        return;
      const firstReservationStartTime = new Date(
        firstReservation.start
      ).getTime();
      const firstReservationEndTime = new Date(firstReservation.end).getTime();
      const secondReservationStartTime = new Date(
        secondReservation.start
      ).getTime();
      const secondReservationEndTime = new Date(
        secondReservation.end
      ).getTime();
      if (
        (secondReservationStartTime > firstReservationStartTime &&
          secondReservationStartTime < firstReservationEndTime) ||
        (secondReservationEndTime > firstReservationStartTime &&
          secondReservationEndTime < firstReservationEndTime)
      )
        conflictExists = true;
    });
  });
  return conflictExists;
};
