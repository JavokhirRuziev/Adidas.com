import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchIcon from "@mui/icons-material/Search";
import HeaderButton from "./HeaderButton";
import HeaderMen from "./HeaderMen";
import HeaderWomen from "./HeaderWomen";
import HeaderKids from "./HeaderKids";
import HeaderSale from "./HeaderSale";
import HeaderStripeLife from "./HeaderStripeLife";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EastIcon from "@mui/icons-material/East";
import JoinAdiClub from "./JoinAdiClub";
import Link from "next/link";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeaderDrawer from "./HeaderDrawer";
import { useDispatch, useSelector } from "react-redux";

function HeaderSection({ maxWidth, margin }) {
  const [onHover, setOnHover] = useState({
    box: false,
    men: false,
    women: false,
    kids: false,
    sale: false,
    stripeLife: false,
    bag: false,
    flag: false,
  });
  const wishListProducts = useSelector(
    (state) => state.wishList.wishListProducts
  );
  const bag = useSelector((state) => state.product.bag);
  return (
    <>
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-end",
            maxWidth: "1440px",
            margin: "auto",
          }}
        >
          <Link href={"/"}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                height: "60px",
                cursor: "pointer",
              }}
            >
              <Image
                src={"/images.png"}
                width={60}
                height={37}
                alt={"adidas"}
              />
            </Box>
          </Link>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              width: "350px",
              height: "40px",
              justifyContent: "space-between",
            }}
          >
            <HeaderButton
              onMouseEnter={() => setOnHover({ men: true, box: true })}
              onMouseLeave={() => setOnHover({ men: false, box: false })}
              className={onHover.men ? "headerComponents" : ""}
              fontWeight={"600"}
              text={"MEN"}
            />
            <HeaderButton
              onMouseEnter={() => setOnHover({ women: true, box: true })}
              onMouseLeave={() => setOnHover({ men: false, box: false })}
              className={onHover.women ? "headerComponents" : ""}
              fontWeight={"600"}
              text={"WOMEN"}
            />
            <HeaderButton
              onMouseEnter={() => setOnHover({ kids: true, box: true })}
              onMouseLeave={() => setOnHover({ men: false, box: false })}
              className={onHover.kids ? "headerComponents" : ""}
              text={"KIDS"}
            />
            <HeaderButton
              onMouseEnter={() => setOnHover({ sale: true, box: true })}
              onMouseLeave={() => setOnHover({ men: false, box: false })}
              className={onHover.sale ? "headerComponents" : ""}
              text={"SALE"}
            />
            <HeaderButton
              onMouseEnter={() => setOnHover({ stripeLife: true, box: true })}
              onMouseLeave={() => setOnHover({ men: false, box: false })}
              className={onHover.stripeLife ? "headerComponents" : ""}
              text={"3 STRIPE LIFE"}
            />
          </Box>
          <Box
            className={onHover.box ? "headerComponents" : ""}
            onMouseLeave={() => setOnHover({ box: false })}
            sx={{
              bgcolor: "white",
              position: "absolute",
              maxWidth: "1440px",
              width: "100%",
              marginTop: "6px",
              display: "none",
              top: "96px",
            }}
          >
            <HeaderMen
              className={onHover.men ? "headerBox" : "headerBoxNone"}
            />
            <HeaderWomen
              className={onHover.women ? "headerBox" : "headerBoxNone"}
            />
            <HeaderKids
              className={onHover.kids ? "headerBox" : "headerBoxNone"}
            />
            <HeaderSale
              className={onHover.sale ? "headerBox" : "headerBoxNone"}
            />
            <HeaderStripeLife
              className={onHover.stripeLife ? "headerBox" : "headerBoxNone"}
            />
          </Box>
          <Box sx={{ width: "400px" }}>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                height: "40px",
              }}
            >
              <Link href={"/Help"} style={{ textDecoration: "none" }}>
                <Typography
                  className="headerText"
                  sx={{ fontSize: "12px", cursor: "pointer", color: "black" }}
                >
                  help
                </Typography>
              </Link>
              <Link
                href={"/ExchangesReturns"}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  className="headerText"
                  sx={{ fontSize: "12px", cursor: "pointer", color: "black" }}
                >
                  exchanges & returns
                </Typography>
              </Link>
              <Link href={"/OrderTracker"} style={{ textDecoration: "none" }}>
                <Typography
                  className="headerText"
                  sx={{
                    fontSize: "12px",
                    cursor: "pointer",
                    color: "black",
                  }}
                >
                  order tracker
                </Typography>
              </Link>
              <JoinAdiClub />
              <Box
                sx={{
                  cursor: "pointer",
                  zIndex: 1,
                  position: "relative",
                }}
              >
                <Box
                  onClick={() => setOnHover({ flag: !onHover.flag })}
                  className={onHover.flag ? "flagBorder" : ""}
                  sx={{ padding: "5px 10px 5px 10px" }}
                >
                  <Image
                    src={"/uzbekistan.png"}
                    width={20}
                    height={20}
                    alt="uzb"
                  />
                </Box>
                <Box
                  className={onHover.flag ? "flagDisplay" : "flagDisplayNone"}
                  sx={{
                    width: "250px",
                    height: "181px",
                    position: "absolute",
                    bgcolor: "white",
                    right: 0,
                    border: "solid 1px black",
                    top: "33px",
                    zIndex: 1,
                    overflow: "scroll",
                    padding: "15px",
                  }}
                >
                  <Typography
                    sx={{
                      padding: "5px",
                      margin: "5px",
                      fontSize: "14px",
                    }}
                  >
                    Choose your country
                  </Typography>
                  <Accordion
                    sx={{
                      margin: "15px 5px 20px 5px",
                    }}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Image
                        src={"/uzbekistan.png"}
                        width={20}
                        height={20}
                        alt="uzb"
                        style={{ marginRight: "10px" }}
                      />
                      <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
                        Uzbekistan
                      </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                      <Box
                        className="headerCHYC"
                        sx={{
                          display: "flex",
                          border: "1px solid black",
                          padding: "10px",
                          marginBottom: "-1px",
                        }}
                      >
                        <Image
                          src={"/uzbekistan.png"}
                          width={20}
                          height={20}
                          alt="uzb"
                          style={{ marginRight: "10px" }}
                        />
                        <Typography
                          sx={{ fontSize: "14px", fontWeight: "600" }}
                        >
                          Uzbekistan
                        </Typography>
                      </Box>
                      <Box
                        className="headerCHYC"
                        sx={{
                          display: "flex",
                          border: "1px solid black",
                          padding: "10px",
                        }}
                      >
                        <Image
                          src={"/us.svg"}
                          width={20}
                          height={20}
                          alt="uzb"
                          style={{ marginRight: "10px" }}
                        />
                        <Typography
                          sx={{ fontSize: "14px", fontWeight: "600" }}
                        >
                          United States
                        </Typography>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                  <Box
                    sx={{
                      position: "relative",
                      border: "solid 1px black",
                      width: "104px",
                      height: "43px",
                      cursor: "pointer",
                      margin: "auto",
                    }}
                  >
                    <Button
                      className="button"
                      style={{
                        position: "absolute",
                        width: "105px",
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
                      save <EastIcon sx={{ marginLeft: "10px" }} />
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Box>
                <TextField
                  className="input"
                  color="primary"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon sx={{ color: "black" }} />
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Search"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "100px",
                  justifyContent: "space-between",
                  position: "relative",
                }}
              >
                <HeaderDrawer />

                <Link href={"/WishList"} style={{ textDecoration: "none" }}>
                  <Box sx={{ position: "relative" }}>
                    <Box
                      className={wishListProducts.length ? "" : "bg"}
                      sx={{
                        position: "absolute",
                        left: 15,
                        bottom: 15,
                        bgcolor: "#0071ae",
                        borderRadius: "50px",
                        padding: "3px 7px 3px 7px",
                      }}
                    >
                      <Box
                        sx={{
                          cursor: "pointer",
                          color: "white",
                          fontSize: "13px",
                          fontWeight: "600",
                          fontFamily: "sans-serif",
                        }}
                      >
                        {wishListProducts.length}
                      </Box>
                    </Box>
                    <FavoriteBorderOutlinedIcon
                      className={wishListProducts.length ? "bg" : ""}
                      sx={{
                        cursor: "pointer",
                        color: "black",
                      }}
                    />
                    <FavoriteIcon
                      className={wishListProducts.length ? "" : "bg"}
                      sx={{ cursor: "pointer", color: "black" }}
                    />
                  </Box>
                </Link>
                <Link
                  className={bag.length ? "" : "bg"}
                  href={"/Bag"}
                  style={{ textDecoration: "none" }}
                >
                  <Box sx={{ position: "relative" }}>
                    <Box
                      className={bag.length ? "" : "bg"}
                      sx={{
                        position: "absolute",
                        left: 15,
                        bottom: 15,
                        bgcolor: "#0071ae",
                        borderRadius: "50px",
                        padding: "3px 7px 3px 7px",
                      }}
                    >
                      <Box
                        sx={{
                          cursor: "pointer",
                          color: "white",
                          fontSize: "13px",
                          fontWeight: "600",
                          fontFamily: "sans-serif",
                        }}
                      >
                        {bag.length}
                      </Box>
                    </Box>
                    <ShoppingBagOutlinedIcon
                      sx={{ cursor: "pointer", color: "black" }}
                    />
                  </Box>
                </Link>
                <Box
                  className={bag.length ? "bg" : ""}
                  onMouseLeave={() => setOnHover({ bag: false })}
                >
                  <ShoppingBagOutlinedIcon
                    onMouseEnter={() => setOnHover({ bag: true })}
                    sx={{ cursor: "pointer", color: "black" }}
                  />
                  <Box
                    onMouseEnter={() => setOnHover({ bag: true })}
                    onMouseLeave={() => setOnHover({ bag: false })}
                    className={onHover.bag ? "headerBox" : "headerBoxNone"}
                    sx={{
                      position: "absolute",
                      bottom: "-50px",
                      bgcolor: "white",
                      width: "250px",
                      right: 0,
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 5px 30px 0 rgba(0,0,0,0.2)",
                      cursor: "pointer",
                    }}
                  >
                    <Typography sx={{ fontWeight: "600" }}>
                      YOUR CART IS EMPTY
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default HeaderSection;
