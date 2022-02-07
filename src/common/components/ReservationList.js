import React from "react";
import { useViewport } from "@toolz/use-viewport";
import { materialUiBreakpoints } from "../arrays/material.ui.breakpoints";
import { Column, Row } from "@toolz/material-ui/dist/index";
import { css3 } from "@toolz/css3/src/css3";
import { use } from "../objects/use";

// TODO: style to match the mock-up
export const ReservationList = ({ reservations }) => {
  const viewport = useViewport(materialUiBreakpoints);
  const endpointReservations = use.reservationsEndpoint;

  const getResponsiveDisplay = () => {
    return reservations.map((reservation) => {
      console.log(reservation);
      const thisReservation = endpointReservations.reservations.find(
        (endpointReservation) => endpointReservation.id === reservation.id
      );
      console.log(thisReservation);
      if (viewport.size === "xs" || viewport.size === "sm") {
        return (
          <Column xs={12} sm={12}>
            Mobile
          </Column>
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
              <Column md={10} lg={10} xl={10}>
                Left
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

  console.log(viewport);
  console.log(reservations);
  return getResponsiveDisplay();
};
