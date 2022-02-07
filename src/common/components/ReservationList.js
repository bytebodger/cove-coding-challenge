import React from "react";
import { useViewport } from "@toolz/use-viewport";
import { materialUiBreakpoints } from "../arrays/material.ui.breakpoints";
import { Column, Row } from "@toolz/material-ui/dist/index";
import { css3 } from "@toolz/css3/src/css3";
import { use } from "../objects/use";

export const ReservationList = ({ reservations }) => {
  const viewport = useViewport(materialUiBreakpoints);
  const endpointReservations = use.reservationsEndpoint;

  const getResponsiveDisplay = () => {
    return reservations.map((reservation) => {
      const thisReservation = endpointReservations.reservations.find(
        (endpointReservation) => endpointReservation.id === reservation.id
      );
      const startTime = new Date(thisReservation.start)
        .toLocaleTimeString()
        .replaceAll(":00", "")
        .replaceAll(" ", "");
      const endTime = new Date(thisReservation.end)
        .toLocaleTimeString()
        .replaceAll(":00", "")
        .replaceAll(" ", "");
      const date = new Date(thisReservation.start).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
      if (viewport.size === "xs" || viewport.size === "sm") {
        return (
          <div
            key={thisReservation.id}
            style={{
              border: "1px solid #eeeeee",
              boxShadow: "2px 2px 2px #eeeeee",
              marginBottom: 16,
              padding: 16,
            }}
          >
            <Row>
              <Column xs={12} sm={12}>
                <div
                  style={{
                    maxHeight: 200,
                    maxWidth: "100%",
                    overflow: css3.overflow.hidden,
                  }}
                >
                  <img
                    alt={"room"}
                    src={thisReservation.room.imageUrl}
                    style={{
                      width: "100%",
                      position: css3.position.relative,
                      bottom: 200,
                    }}
                  />
                </div>
                <div
                  style={{
                    fontSize: css3.fontSize.large,
                    fontWeight: css3.fontWeight._700,
                  }}
                >
                  {startTime} - {endTime}
                </div>
                <div>{date}</div>
                <div>{thisReservation.room.name}</div>
              </Column>
            </Row>
          </div>
        );
      } else {
        return (
          <div
            key={thisReservation.id}
            style={{
              border: "1px solid #eeeeee",
              boxShadow: "2px 2px 2px #eeeeee",
              marginBottom: 16,
              padding: 16,
            }}
          >
            <Row>
              <Column md={2} lg={2} xl={2}>
                <img
                  alt={"room"}
                  src={thisReservation.room.imageUrl}
                  style={{ width: "100%" }}
                />
              </Column>
              <Column md={8} lg={8} xl={8} style={{ paddingLeft: 16 }}>
                <div
                  style={{
                    fontSize: css3.fontSize.large,
                    fontWeight: css3.fontWeight._700,
                  }}
                >
                  {startTime} - {endTime}
                </div>
                <div>{date}</div>
              </Column>
              <Column md={2} lg={2} xl={2}>
                <div style={{ float: css3.float.right }}>
                  {thisReservation.room.name}
                </div>
              </Column>
            </Row>
          </div>
        );
      }
    });
  };

  return getResponsiveDisplay();
};
