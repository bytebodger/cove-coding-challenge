import { isScheduleConflict } from "./utils";
import { sampleReservations } from "./common/arrays/sample.reservations";

describe("isScheduleConflict", () => {
  it("returns [false] for an empty list", () => {
    expect(isScheduleConflict([])).toBe(false);
  });

  it("returns [false] for sampleReservations", () => {
    expect(isScheduleConflict(sampleReservations)).toBe(false);
  });

  const reservationsWithConflictingEndTime = [
    ...sampleReservations,
    {
      id: "d4297a67-cfde-4841-81a8-aa90f719255c",
      start: "2021-02-03T14:30:00.000Z",
      end: "2021-02-03T15:35:00.000Z",
      room: {
        id: "401662b9-b110-4159-a4f2-ebd955f3b1f4",
        name: "Room A",
        imageUrl:
          "https://staging.cove.is/parse/files/hRKEvW2lN74k5nCg6p2XtmiWRNHycE2pHpXpELMX/f96efd3f11aadb34135bb1f0aecf9667_Quincy%20Room.jpg",
      },
    },
  ];

  it("returns [true] for reservationsWithConflictingEndTime", () => {
    expect(isScheduleConflict(reservationsWithConflictingEndTime)).toBe(true);
  });

  const reservationsWithConflictingStartTime = [
    ...sampleReservations,
    {
      id: "d4297a67-cfde-4841-81a8-aa90f719255d",
      start: "2021-02-03T14:35:00.000Z",
      end: "2021-02-03T15:45:00.000Z",
      room: {
        id: "401662b9-b110-4159-a4f2-ebd955f3b1f4",
        name: "Room A",
        imageUrl:
          "https://staging.cove.is/parse/files/hRKEvW2lN74k5nCg6p2XtmiWRNHycE2pHpXpELMX/f96efd3f11aadb34135bb1f0aecf9667_Quincy%20Room.jpg",
      },
    },
  ];

  it("returns [true] for reservationsWithConflictingStartTime", () => {
    expect(isScheduleConflict(reservationsWithConflictingStartTime)).toBe(true);
  });
});
