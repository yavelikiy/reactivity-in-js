import React from "react";
import About from "./about";
import Background from "./background/Background";
import Fallback from "./impress/fallback";
import Presentation from "./impress/presentation";
import Links from "./links/Links";
import Overview from "./overview/Overview";
import ReactivityParadigm from "./paradigm/ReactivityParadigm";
import Patterns from "./patterns/Patterns";
import ReduxSaga from "./redux-saga/ReduxSaga";
import Rxjs from "./rxjs/Rxjs";
import VueAdvantages from "./vue/VueAdvantages";

const ReactivityCop = () => (
  <>
    <Background />
    <Fallback />
    <Presentation>
      <About />
      <Patterns />
      <ReactivityParadigm />
      <VueAdvantages />
      <ReduxSaga />
      <Rxjs />
      <Overview />
      <Links />
    </Presentation>
  </>
);

export default ReactivityCop;
