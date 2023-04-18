import React, { useState } from "react";
import AppBar from "./AppBar";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import HeaderDrawer from "./HeaderDrawer";
import HeaderHamburgerDrawer from "./HeaderHamburgerDrawer";
import HeaderSearchDrawer from "./HeaderSearchDrawer";

function HeaderResponsive() {
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
      <AppBar maxWidth={"1440px"} margin={"auto"} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1440px",
          margin: "auto",
          padding: "15px",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <HeaderHamburgerDrawer />
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
        </Box>
        <Link href={"/"}>
          <Image src={"/images.png"} width={60} height={37} alt={"adidas"} />
        </Link>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100px",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <HeaderDrawer />
              <HeaderSearchDrawer />
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
    </>
  );
}

export default HeaderResponsive;
