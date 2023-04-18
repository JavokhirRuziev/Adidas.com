import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import EastIcon from "@mui/icons-material/East";
import CloseIcon from "@mui/icons-material/Close";

function Body() {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1440px",
            bgcolor: "black",
            color: "white",
            height: "47px",
            margin: "auto",
          }}
        >
          <Box></Box>
          <Box sx={{ display: "flex" }}>
            <Typography className="bodyText" sx={{ fontSize: "15px" }}>
              UP TO 40% OFF – TONS OF SALE ITEMS
            </Typography>
            <Typography
              className="bodyText"
              sx={{
                fontSize: "15px",
                textDecoration: "underline",
                marginLeft: "5px",
                cursor: "pointer",
              }}
            >
              SHOP SALE
            </Typography>
          </Box>
          <CloseIcon sx={{ padding: "7px", mr: "15px", cursor: "pointer" }} />
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: "1440px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Image
          className="mainImage responsive"
          src={"/mainPhoto.webp"}
          width={1440}
          height={700}
          alt={"image"}
        />
        <Image
          className="mainImageResp responsiveVerse"
          src={"/mainImageResp.png"}
          width={1440}
          height={700}
          alt={"image"}
        />
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box
            className="imageBox"
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
              maxHeight: "390px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                height: "60%",
                justifyContent: "space-between",
                margin: "0 0 0 10px",
              }}
            >
              <Box>
                <Typography
                  className="imageTextMain"
                  sx={{ fontSize: "40px", fontWeight: "700" }}
                >
                  PLATFORM PARADISE
                </Typography>
                <Typography className="imageText" sx={{ width: "300px" }}>
                  Take your shoe game to a whole new level with platform-packed
                  soles.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexDirection: "column",
                  height: "50%",
                  marginTop: "10px",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    border: "solid 1px black",
                    width: "134px",
                    height: "43px",
                    cursor: "pointer",
                  }}
                >
                  <Button
                    className="button"
                    style={{
                      position: "absolute",
                      width: "135px",
                      bottom: "3px",
                      zIndex: "1",
                      right: "3px",
                      fontSize: "12px",
                      fontWeight: "600",
                      padding: "10px 0 10px 0",
                    }}
                    color="primary"
                    variant="contained"
                  >
                    shop men <EastIcon sx={{ marginLeft: "10px" }} />
                  </Button>
                </Box>
                <Box
                  sx={{
                    position: "relative",
                    border: "solid 1px black",
                    width: "154px",
                    height: "44px",
                    cursor: "pointer",
                  }}
                >
                  <Button
                    className="button"
                    style={{
                      position: "absolute",
                      width: "155px",
                      bottom: "3px",
                      zIndex: "1",
                      right: "3px",
                      fontSize: "12px",
                      fontWeight: "600",
                      padding: "10px 0 10px 0",
                    }}
                    color="primary"
                    variant="contained"
                  >
                    shop women <EastIcon sx={{ marginLeft: "10px" }} />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box></Box>
        </Box>
      </Box>
    </>
  );
}

export default Body;
