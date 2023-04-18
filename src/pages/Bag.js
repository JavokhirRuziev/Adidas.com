import { Box, Button, Grid, Select, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import AppBar from "../../components/AppBar";
import HeaderSection from "../../components/HeaderSection";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import PageFooter from "./PageFooter";
import EastIcon from "@mui/icons-material/East";
import ComponentsOfBag from "../../components/ComponentsOfBag";
import BlackButton from "../../components/BlackButton";
import CheckIcon from "@mui/icons-material/Check";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import Image from "next/image";
import {
  addItem,
  createProduct,
  removeProduct,
  toggle,
  toggleProduct,
} from "@/app/wishListProductSlice";
import { removeFromBag } from "@/app/wishListProductSlice";
import HeaderAppBar from "../../components/HeaderAppBar";
import Link from "next/link";
import ComponentsOfRecentlys from "../../components/ComponentsOfRecentlys";

function Bag() {
  const bag = useSelector((state) => state.product.bag);
  const recentlyProducts = useSelector(
    (state) => state.recentlys.recentlyProducts
  );
  const dispatch = useDispatch();
  const ref = useRef();
  const toTop = () => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "end",
    });
  };
  return (
    <>
      <div ref={ref}></div>
      <HeaderAppBar />
      <Box
        className={bag.length ? "" : "bg"}
        sx={{
          display: "flex",
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        <Box sx={{ margin: "30px" }}>
          <Box
            sx={{
              position: "relative",
              width: "200px",
              height: "200px",
            }}
          >
            <Box>
              <MarkChatUnreadIcon sx={{ width: "200px", height: "200px" }} />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "30%",
                left: "50%",
                transform: "translateY(-50%)",
                transform: "translateX(-50%)",
                color: "white",
              }}
            >
              <Typography sx={{ fontSize: "22px", fontWeight: "600" }}>
                HELLO JAVOKHIR
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "600",
                padding: "5px 0 5px 0",
              }}
            >
              YOUR BAG
            </Typography>
            <Typography sx={{ padding: "5px 0 5px 0" }}>
              TOTAL: (1 item) $162.99
            </Typography>
            <Typography sx={{ padding: "5px 0 5px 0" }}>
              Items in your bag are not reserved — check out now to make them
              yours.
            </Typography>
          </Box>
          <Box>
            {bag.length
              ? bag.map((product) => (
                  <ComponentsOfBag
                    toggled={product.image1}
                    addItem={() => dispatch(addItem(product))}
                    heartIcon={() => dispatch(toggleProduct(product))}
                    removeItem={() => dispatch(removeProduct(product.image1))}
                    heartIconDark={() => dispatch(toggleProduct(product))}
                    image={product.image1}
                    productName={product.productName}
                    price={product.price}
                    sale={product.sale}
                    discount={product.discount}
                    removeFromBag={() => dispatch(removeFromBag(product))}
                    counter={product.quentity}
                  />
                ))
              : ""}
          </Box>
        </Box>
        <Box
          className="responsive"
          sx={{
            width: "400px",
            margin: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            height: "700px",
          }}
        >
          <Box>
            <Box
              sx={{
                position: "relative",
                border: "solid 1px black",
                height: "42.5px",
                cursor: "pointer",
                margin: "10px 0 10px 0",
              }}
            >
              <Button
                className="button"
                style={{
                  position: "absolute",
                  bottom: "3px",
                  zIndex: "1",
                  right: "3px",
                  fontSize: "12px",
                  fontWeight: "600",
                  padding: "10px 0 10px 0",
                  display: "flex",
                  justifyContent: "space-around",
                  width: "100%",
                }}
                color="primary"
                variant="contained"
              >
                CHECKOUT <EastIcon sx={{ marginLeft: "10px" }} />
              </Button>
            </Box>
            <Typography
              sx={{
                width: "50%",
                margin: "auto",
                textAlign: "center",
                fontWeight: "600",
              }}
            >
              OR
            </Typography>
            <Button
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-around",
                border: "solid 1px black",
                margin: "10px 0 10px 0",
              }}
            >
              <img style={{ width: "50px", height: "40px" }} src="paypal.svg" />
              <EastIcon sx={{ marginLeft: "10px" }} />
            </Button>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "600", padding: "10px 0 10px 0" }}>
              ORDER SUMMARY
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 0 10px 0",
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: "12px", color: "gray" }}>
                    1 item
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "12px", color: "gray" }}>
                    $160
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography sx={{ fontSize: "12px", color: "gray" }}>
                    Original price
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "12px", color: "gray" }}>
                    $200
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 0 10px 0",
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: "12px", color: "gray" }}>
                    Sales Tax
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "12px", color: "gray" }}>
                    -
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography sx={{ fontSize: "12px", color: "gray" }}>
                    Delivery
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "12px", color: "gray" }}>
                    $2.99
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 0 10px 0",
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: "12px", color: "gray" }}>
                    Sale
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "12px", color: "gray" }}>
                    -$40
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderTop: "1px solid black",
                  borderBottom: "1px solid black",
                  padding: "10px 0 10px 0",
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
                    Total
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
                    $162.99
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ margin: "40px" }}>
        <Box
          className={bag.length ? "bg" : ""}
          sx={{
            padding: "50px 0 50px 0",
            maxWidth: "1440px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: "600",
              margin: "20px 0 20px 0",
            }}
          >
            YOUR BAG IS EMPTY
          </Typography>
          <Typography sx={{ color: "gray", margin: "10px 0 10px 0" }}>
            Items you add to your bag will be saved here for you.
          </Typography>
          <Box sx={{ margin: "30px 0 30px 0" }}>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "600",
                margin: "20px 0 20px 0",
              }}
            >
              START SHOPPING
            </Typography>
            <Grid
              className="grid2x2"
              container
              spacing={1}
              sx={{
                display: "flex",
                margin: "auto",
                maxWidth: "1320px",
                justifyContent: "center",
              }}
            >
              <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                <Link href={"/GridSystem"} style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      maxWidth: "320px",
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      bgcolor: "#8882",
                      height: "236px",
                      margin: "auto",
                    }}
                  >
                    <Image
                      className="shoesImage"
                      src={"/mens.webp"}
                      width={200}
                      height={200}
                      alt={"men"}
                    />
                    <BlackButton text={"shoes"} />
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                <Link href={"/GridSystem"} style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      maxWidth: "320px",
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      bgcolor: "#8882",
                      height: "236px",
                      margin: "auto",
                    }}
                  >
                    <Image
                      className="shoesImage"
                      src={"/shoes.webp"}
                      width={200}
                      height={200}
                      alt={"shoes"}
                    />
                    <BlackButton text={"clothing"} />
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                <Link href={"/GridSystem"} style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      maxWidth: "320px",
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      bgcolor: "#8882",
                      height: "236px",
                      margin: "auto",
                    }}
                  >
                    <Image
                      src={"/womens.webp"}
                      width={200}
                      height={200}
                      alt={"women"}
                      className="shoesImage"
                    />
                    <BlackButton text={"accessories"} />
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                <Link href={"/GridSystem"} style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      maxWidth: "320px",
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      bgcolor: "#8882",
                      height: "236px",
                      margin: "auto",
                    }}
                  >
                    <Image
                      src={"/womens.webp"}
                      width={200}
                      height={200}
                      alt={"women"}
                      className="shoesImage"
                    />
                    <BlackButton text={"new arrivals"} />
                  </Box>
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Box sx={{ display: "flex", margin: "10px 0 10px 0" }}>
              <AirportShuttleIcon />
              <BlackButton
                text={
                  "Join adiClub to get unlimited free standard shipping, returns, & exchanges"
                }
              />
            </Box>
            <Box sx={{ display: "flex", margin: "10px 0 10px 0" }}>
              <CheckIcon />
              <BlackButton
                text={
                  "Pay over time in interest-free installments with Affirm, Klarna or Afterpay"
                }
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          padding: "10px",
          maxWidth: "1440px",
          margin: "auto",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ fontSize: "28px", fontWeight: "600", margin: "20px 0 20px 0" }}
        >
          RECENTLY VIEWED ITEMS
        </Typography>
        <Box sx={{ overflowY: "hidden", display: "flex" }}>
          {recentlyProducts.map((product) => (
            <ComponentsOfRecentlys
              toggled={product.toggle}
              addItem={() => dispatch(addItem(product))}
              heartIcon={() => dispatch(toggle(product))}
              removeItem={() => dispatch(removeProduct(product.image1))}
              heartIconDark={() => dispatch(toggle(product))}
              onClick={() => dispatch(createProduct(product))}
              image={product.image1}
              price={product.price}
              productName={product.productName}
              productType={product.productType}
              discount={product.discount}
              sale={product.sale}
            />
          ))}
        </Box>
      </Box>
      <PageFooter onClick={toTop} maxWidth={"1440px"} margin={"auto"} />
    </>
  );
}

export default Bag;
