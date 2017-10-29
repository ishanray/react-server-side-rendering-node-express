import React from "react";
import { hydrate } from "react-dom";
import App from "../shared/App";

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

hydrate(<App users={preloadedState} />, document.getElementById("root"));
