import { Box, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import EastIcon from "@mui/icons-material/East";
import NewArrivals from "../../components/NewArrivals";
import WhatsTrending from "../../components/WhatsTrending";
import MemberExclusives from "../../components/MemberExclusives";
import BlackButton from "../../components/BlackButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Link from "next/link";

function ScrollAbleHorizontal() {
  const [addClass, setAddClass] = useState(true);
  const [addClassSecond, setAddClassSecond] = useState(false);
  const [addClassThird, setAddClassThird] = useState(false);
  const toLeftSide = useRef();
  const toRightSide = useRef();

  function toRight() {
    toRightSide.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "end",
    });
  }
  const toLeft = () => {
    toLeftSide.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };

  const firstText = () => {
    setAddClass(true);
    setAddClassSecond(false);
    setAddClassThird(false);
  };

  const secondText = () => {
    setAddClassSecond(true);
    setAddClass(false);
    setAddClassThird(false);
  };
  const thirdText = () => {
    setAddClassThird(true);
    setAddClassSecond(false);
    setAddClass(false);
  };

  return (
    <Box sx={{ margin: "20px" }}>
      <Box
        sx={{
          maxWidth: "1440px",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "510px",
              justifyContent: "space-around",
            }}
          >
            <Box className={addClass ? "animationFirst" : "icon"}>
              <Box className={addClassThird ? "animationThird" : "icon"}>
                <Box className={addClassSecond ? "animationSecond" : "icon"}>
                  <EastIcon className="nwmEastIcon" />
                </Box>
              </Box>
            </Box>

            <Box onClick={firstText} sx={{ width: "33%", cursor: "pointer" }}>
              <Typography
                sx={{ marginLeft: "20px", fontWeight: "600" }}
                className={`nwmText ${addClass ? "changedText" : "textBox"}`}
              >
                New Arrivals
              </Typography>
            </Box>
            <Box onClick={secondText} sx={{ width: "33%", cursor: "pointer" }}>
              <Typography
                sx={{ fontWeight: "600" }}
                className={`nwmText ${
                  addClassSecond ? "changedText" : "textBox"
                }`}
              >
                What's Trending
              </Typography>
            </Box>
            <Box onClick={thirdText} sx={{ width: "33%", cursor: "pointer" }}>
              <Typography
                sx={{ fontWeight: "600" }}
                className={`nwmText ${
                  addClassThird ? "changedText" : "textBox"
                }`}
              >
                Member Exclusives
              </Typography>
            </Box>
          </Box>
          <Box
            className="NWM"
            sx={{
              display: "flex",
              width: "220px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link href={"/GridSystem"}>
              <BlackButton text={"view all"} />
            </Link>
            <BlackButton onClick={toLeft} text={<KeyboardArrowLeftIcon />} />
            <BlackButton onClick={toRight} text={<KeyboardArrowRightIcon />} />
          </Box>
        </Box>
        <div className="scrollBarContainer">
          <NewArrivals
            className={addClass ? "" : "changedDisplay"}
            left={addClass ? <Box ref={toLeftSide} /> : ""}
            right={addClass ? <Box ref={toRightSide} /> : ""}
          />
          <WhatsTrending
            className={addClassSecond ? "" : "changedDisplay"}
            left={addClassSecond ? <Box ref={toLeftSide} /> : ""}
            right={addClassSecond ? <Box ref={toRightSide} /> : ""}
          />
          <MemberExclusives
            className={addClassThird ? "" : "changedDisplay"}
            left={addClassThird ? <Box ref={toLeftSide} /> : ""}
            right={addClassThird ? <Box ref={toRightSide} /> : ""}
          />
        </div>
      </Box>
    </Box>
  );
}

export default ScrollAbleHorizontal;
