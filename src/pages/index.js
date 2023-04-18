import React, { useRef } from "react";
import Main from "./Main";
import ScrollAbleHorizontal from "./ScrollAbleHorizontal";
import SneakersShoes from "./SneakersShoes";
import StillInterested from "./StillInterested";
import ShopNow from "./ShopNow";
import MFAS from "./MFAS";
import PopularRightNow from "./PopularRightNow";
import AdidasHistory from "./AdidasHistory";
import PageFooter from "./PageFooter";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

function index() {
  const ref = useRef();
  function toTop() {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "end",
    });
  }
  return (
    <>
      <div ref={ref}></div>
      <Main />
      <StillInterested />
      <SneakersShoes />
      <ScrollAbleHorizontal />
      <ShopNow />
      <MFAS />
      <PopularRightNow />
      <AdidasHistory />
      <PageFooter onClick={toTop} maxWidth={"1440px"} margin={"auto"} />
      {/*hydration*/}
    </>
  );
}

export default index;
