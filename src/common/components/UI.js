import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../../routes/home/Home";
import { useConstructor } from "@toolz/use-constructor";
import { use } from "../objects/use";
import { useViewport } from "@toolz/use-viewport";
import { materialUiBreakpoints } from "../arrays/material.ui.breakpoints";
import { Row } from "@toolz/material-ui/dist/index";
import { getResponsiveSpacing } from "../functions/get.responsive.spacing";
import { css3 } from "@toolz/css3/src/css3";

export const UI = () => {
  const viewport = useViewport(materialUiBreakpoints);

  useConstructor(() => {
    use.reservationsEndpoint
      .loadReservations()
      .then(() => console.log("reservations loaded"));
  });

  return (
    <div style={{ maxWidth: 1600, minWidth: 350 }}>
      <Row
        style={{
          display: css3.dislay.block,
          minWidth: 300,
          paddingBottom: getResponsiveSpacing(viewport.size, 8, 24),
          paddingRight: getResponsiveSpacing(viewport.size, 16, 80),
        }}
      >
        <Routes>
          <Route index={true} element={<Home />} />
          <Route path={"*"} element={<Home />} />
        </Routes>
      </Row>
    </div>
  );
};
