import React from "react";
import "./common/css/App.css";
import { loadSharedHooks } from "./common/functions/load.shared.hooks";
import { UI } from "./common/components/UI";

export const App = () => {
  loadSharedHooks();

  return <UI />;
};
