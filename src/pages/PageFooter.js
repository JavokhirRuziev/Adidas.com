import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import EastIcon from "@mui/icons-material/East";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Image from "next/image";
import ComponentsOfFooter from "../../components/ComponentsOfFooter";
import { useSelector } from "react-redux";
import { KeyboardArrowUp } from "@mui/icons-material";

function PageFooter({ maxWidth, margin, onClick }) {
  const bag = useSelector((state) => state.product.bag);
  return (
    <>
      <Box className={"responsive"}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: { maxWidth },
            margin: { margin },
          }}
        >
          <Box
            sx={{
              display: "flex",
              padding: "40px",
              alignItems: "center",
              bgcolor: "#ede734",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ marginRight: "40px", fontSize: "24px", fontWeight: "600" }}
            >
              JOIN OUR ADICLUB & GET 15% OFF
            </Typography>
            <Box
              sx={{
                position: "relative",
                border: "solid 1px black",
                width: "174px",
                height: "43px",
                cursor: "pointer",
              }}
            >
              <Button
                className="button"
                style={{
                  position: "absolute",
                  width: "175px",
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
                sign up for free <EastIcon sx={{ marginLeft: "10px" }} />
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: "flex", margin: "auto", maxWidth: "1440px" }}>
            <Box sx={{ padding: "20px 15px 30px" }}>
              <Typography sx={{ fontWeight: "600", paddingBottom: "20px" }}>
                PRODUCTS
              </Typography>
              <ComponentsOfFooter text={"Shoes"} />
              <ComponentsOfFooter text={"Clothing"} />
              <ComponentsOfFooter text={"Accessories"} />
              <ComponentsOfFooter text={"Gift Cards"} />
              <ComponentsOfFooter text={"New Arrivals"} />
              <ComponentsOfFooter text={"Best Sellers"} />
              <ComponentsOfFooter text={"Release Dates"} />
              <ComponentsOfFooter text={"Sale"} />
            </Box>
            <Box sx={{ padding: "20px 15px 30px" }}>
              <Typography sx={{ fontWeight: "600", paddingBottom: "20px" }}>
                SPORTS
              </Typography>
              <ComponentsOfFooter text={"Clothing"} />
              <ComponentsOfFooter text={"Accessories"} />
              <ComponentsOfFooter text={"Gift Cards"} />
              <ComponentsOfFooter text={"New Arrivals"} />
              <ComponentsOfFooter text={"Best Sellers"} />
              <ComponentsOfFooter text={"Release Dates"} />
              <ComponentsOfFooter text={"Sale"} />
              <ComponentsOfFooter text={"New Arrivals"} />
              <ComponentsOfFooter text={"Best Sellers"} />
              <ComponentsOfFooter text={"Release Dates"} />
              <ComponentsOfFooter text={"Sale"} />
            </Box>
            <Box sx={{ padding: "20px 15px 30px" }}>
              <Typography sx={{ fontWeight: "600", paddingBottom: "20px" }}>
                COLLECTIONS
              </Typography>
              <ComponentsOfFooter text={"Clothing"} />
              <ComponentsOfFooter text={"Accessories"} />
              <ComponentsOfFooter text={"Gift Cards"} />
              <ComponentsOfFooter text={"New Arrivals"} />
              <ComponentsOfFooter text={"Best Sellers"} />
              <ComponentsOfFooter text={"Release Dates"} />
              <ComponentsOfFooter text={"Sale"} />
            </Box>
            <Box sx={{ padding: "20px 15px 30px" }}>
              <Typography sx={{ fontWeight: "600", paddingBottom: "20px" }}>
                SUPPORT
              </Typography>
              <ComponentsOfFooter text={"Clothing"} />
              <ComponentsOfFooter text={"Accessories"} />
              <ComponentsOfFooter text={"Gift Cards"} />
              <ComponentsOfFooter text={"New Arrivals"} />
              <ComponentsOfFooter text={"Best Sellers"} />
              <ComponentsOfFooter text={"Release Dates"} />
              <ComponentsOfFooter text={"Sale"} />
              <ComponentsOfFooter text={"New Arrivals"} />
              <ComponentsOfFooter text={"Best Sellers"} />
              <ComponentsOfFooter text={"Release Dates"} />
              <ComponentsOfFooter text={"New Arrivals"} />
              <ComponentsOfFooter text={"Best Sellers"} />
              <ComponentsOfFooter text={"Release Dates"} />
            </Box>
            <Box sx={{ padding: "20px 15px 30px" }}>
              <Typography sx={{ fontWeight: "600", paddingBottom: "20px" }}>
                COMPANY INFO
              </Typography>
              <ComponentsOfFooter text={"Clothing"} />
              <ComponentsOfFooter text={"Accessories"} />
              <ComponentsOfFooter text={"Gift Cards"} />
              <ComponentsOfFooter text={"New Arrivals"} />
              <ComponentsOfFooter text={"Best Sellers"} />
              <ComponentsOfFooter text={"Release Dates"} />
              <ComponentsOfFooter text={"Sale"} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "20px 15px 30px",
              }}
            >
              <Typography
                sx={{
                  padding: " 0  0 10px 0",
                  fontWeight: "600",
                  paddingBottom: "20px",
                }}
              >
                FOLLOW <br />
                US
              </Typography>
              <Box
                sx={{
                  bgcolor: "black",
                  color: "white",
                  borderRadius: "20px",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "5px 2.5px",
                }}
              >
                <FacebookIcon />
              </Box>
              <Box
                sx={{
                  bgcolor: "black",
                  color: "white",
                  borderRadius: "20px",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "5px 2.5px",
                }}
              >
                <InstagramIcon />
              </Box>
              <Box
                sx={{
                  bgcolor: "black",
                  color: "white",
                  borderRadius: "20px",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "5px 2.5px",
                }}
              >
                <TwitterIcon />
              </Box>
              <Box
                sx={{
                  bgcolor: "black",
                  color: "white",
                  borderRadius: "20px",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "5px 2.5px",
                }}
              >
                <PinterestIcon />
              </Box>
              <Box
                sx={{
                  borderRadius: "20px",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "black",
                  margin: "5px 2.5px",
                }}
              >
                <Image
                  src={"/tik-tok.webp"}
                  width={20}
                  height={20}
                  alt="tiktok"
                />
              </Box>
              <Box
                sx={{
                  bgcolor: "black",
                  color: "white",
                  borderRadius: "20px",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "5px 2.5px",
                }}
              >
                <YouTubeIcon />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "column", bgcolor: "black" }}
          >
            <Box sx={{ display: "flex", margin: "auto" }}>
              <Typography
                sx={{
                  margin: "15px 0",
                  padding: "0 15px",
                  borderRight: "1px solid darkgray",
                  color: "white",
                  fontSize: "12px",
                  color: "darkgray",
                }}
              >
                Cookie Settings
              </Typography>
              <Typography
                sx={{
                  margin: "15px 0",
                  padding: "0 15px",
                  borderRight: "1px solid darkgray",
                  color: "white",
                  fontSize: "12px",
                  color: "darkgray",
                }}
              >
                Data Settings
              </Typography>
              <Typography
                sx={{
                  margin: "15px 0",
                  padding: "0 15px",
                  borderRight: "1px solid darkgray",
                  color: "white",
                  fontSize: "12px",
                  color: "darkgray",
                }}
              >
                Do not sell my personal information
              </Typography>
              <Typography
                sx={{
                  margin: "15px 0",
                  padding: "0 15px",
                  borderRight: "1px solid darkgray",
                  color: "white",
                  fontSize: "12px",
                  color: "darkgray",
                }}
              >
                Privacy Policy
              </Typography>
              <Typography
                sx={{
                  margin: "15px 0",
                  padding: "0 15px",
                  color: "white",
                  fontSize: "12px",
                  color: "darkgray",
                }}
              >
                Terms and Conditions
              </Typography>
            </Box>
            <Box sx={{ margin: "auto" }}>
              <Typography
                sx={{
                  margin: "15px 0",
                  padding: "0 15px",
                  color: "white",
                  fontSize: "12px",
                  color: "darkgray",
                }}
              >
                © 2023 adidas America, Inc.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={"responsiveVerse"}>
        <Box sx={{ padding: "30px", bgcolor: "#eceff1" }}>
          <Typography
            sx={{ margin: "0 0 20px 0", fontWeight: "600", fontSize: "18px" }}
          >
            YOUR OPINION COUNTS
          </Typography>
          <Typography>
            We strive to serve you better and appreciate your feedback
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            padding: "20px",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={onClick}
        >
          <KeyboardArrowUp />
          <Typography sx={{ margin: "0 0 0 10px" }}>BACK TO TOP</Typography>
        </Box>
        <Box
          sx={{
            bgcolor: "#000000",
            display: "flex",
            justifyContent: "space-around",
            border: "solid 2px gray",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "white",
                fontSize: "14px",
                fontWeight: "600",
                padding: "10px 0 30px 0",
                textAlign: "center",
              }}
            >
              MY ACCOUNT
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "12px",
                padding: "10px 0 10px 0",
                textAlign: "center",
              }}
            >
              Help
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "12px",
                padding: "10px 0 10px 0",
                textAlign: "center",
              }}
            >
              Return & Exchanges
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "12px",
                padding: "10px 0 10px 0",
                textAlign: "center",
              }}
            >
              Order Tracker
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "12px",
                padding: "10px 0 10px 0",
                textAlign: "center",
              }}
            >
              Shipping
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "12px",
                padding: "10px 0 10px 0",
                textAlign: "center",
              }}
            >
              Promotions
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "12px",
                padding: "10px 0 10px 0",
                textAlign: "center",
              }}
            >
              Country Selector
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "white",
                fontSize: "14px",
                fontWeight: "600",
                padding: "10px 0 30px 0",
                textAlign: "center",
              }}
            >
              YOUR BAG {bag.length ? bag.length : ""}
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "12px",
                padding: "10px 0 10px 0",
                textAlign: "center",
              }}
            >
              adiClub
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "12px",
                padding: "10px 0 10px 0",
                textAlign: "center",
              }}
            >
              Store Finder
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "12px",
                padding: "10px 0 10px 0",
                textAlign: "center",
              }}
            >
              Gift Cards
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "12px",
                padding: "10px 0 10px 0",
                textAlign: "center",
              }}
            >
              adidas Apps
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "12px",
                padding: "10px 0 10px 0",
                textAlign: "center",
              }}
            >
              Size Charts
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "#282c31",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "30px",
            border: "solid 2px gray",
          }}
        >
          <Box
            sx={{ display: "flex", textAlign: "center", margin: "0 0 20px 0" }}
          >
            <Image
              style={{ margin: "0 10px 0 0" }}
              src={"/uzbekistan.png"}
              width={20}
              height={20}
            />
            <Typography sx={{ color: "white" }}>Uzbekistan</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <Box sx={{ width: "50%" }}>
              <Typography sx={{ margin: "10px 0 10px 0", color: "white" }}>
                Cookie Settings
              </Typography>
              <Typography sx={{ margin: "10px 0 10px 0", color: "white" }}>
                Do not sell my personal information
              </Typography>
            </Box>
            <Box sx={{ width: "50%" }}>
              <Typography sx={{ margin: "10px 0 10px 0", color: "white" }}>
                Data Settings
              </Typography>
              <Typography sx={{ margin: "10px 0 10px 0", color: "white" }}>
                Privacy Policy
              </Typography>
            </Box>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ margin: "30px 0 30px 0", color: "white" }}>
              Terms and Conditions
            </Typography>
            <Typography sx={{ margin: "30px 0 30px 0", color: "white" }}>
              © 2023 adidas America, Inc.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default PageFooter;
