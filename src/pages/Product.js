import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import AppBar from "../../components/AppBar";
import PageFooter from "./PageFooter";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import HeaderSection from "../../components/HeaderSection";
import { useDispatch, useSelector } from "react-redux";
import BlackButton from "../../components/BlackButton";
import FixedButton from "../../components/FixedButton";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CheckIcon from "@mui/icons-material/Check";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import ComponentsOfProduct from "../../components/ComponentsOfProduct";
import {
  addToBag,
  createProduct,
  toggleButton,
} from "@/app/wishListProductSlice";
import { addItem, removeProduct, toggle } from "@/app/wishListProductSlice";
import HeaderAppBarStatic from "../../components/HeaderAppBarStatic";
import ComponentsOfRecentlys from "../../components/ComponentsOfRecentlys";

function Product() {
  const [size, setSize] = useState([
    5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 11,
  ]);
  const product = useSelector((state) => state.wishList.product);
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
      <Box sx={{ maxWidth: "1440px", margin: "auto" }}>
        <HeaderAppBarStatic />
        {product.length
          ? product.map((product) => (
              <>
                <Box className={"responsive"}>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      height: "100%",
                      zIndex: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        height: "100%",
                        padding: "50px",
                        alignItems: "center",
                      }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <Box sx={{ maxWidth: "400px", padding: "1px" }}>
                          <TransformWrapper>
                            <TransformComponent>
                              <img
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  transition: "1s",
                                }}
                                src={product.image1}
                              />
                            </TransformComponent>
                          </TransformWrapper>
                        </Box>
                        <Box sx={{ maxWidth: "400px", padding: "1px" }}>
                          <TransformWrapper>
                            <TransformComponent>
                              <img
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  transition: "1s",
                                }}
                                src={product.image2}
                              />
                            </TransformComponent>
                          </TransformWrapper>
                        </Box>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Box sx={{ maxWidth: "400px", padding: "1px" }}>
                          <TransformWrapper>
                            <TransformComponent>
                              <img
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  TransitionEvent: "1s",
                                }}
                                src={product.image3}
                              />
                            </TransformComponent>
                          </TransformWrapper>
                        </Box>
                        <Box sx={{ maxWidth: "400px", padding: "1px" }}>
                          <TransformWrapper>
                            <TransformComponent>
                              <img
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  transition: "1s",
                                }}
                                src={product.image4}
                              />
                            </TransformComponent>
                          </TransformWrapper>
                        </Box>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        position: "sticky",
                        overflowX: "hidden",
                        height: "900px",
                        bgcolor: "white",
                        top: "0",
                        bottom: "-600px",
                        width: "380px",
                        right: 0,
                        padding: "20px",
                      }}
                    >
                      <Typography>{product.productType}</Typography>
                      <Typography
                        sx={{
                          fontSize: "24px",
                          fontWeight: "600",
                          margin: "15px 0 15px 0",
                        }}
                      >
                        {product.productName}
                      </Typography>
                      <Box>
                        <Typography
                          sx={{ fontWeight: "600", fontSize: "18px" }}
                        >
                          {product.price}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "600",
                            fontSize: "18px",
                            textDecoration: "line-through",
                            color: "lightgray",
                          }}
                        >
                          {product.sale}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "600",
                            fontSize: "18px",
                            color: "#e32b2b",
                          }}
                        >
                          {product.discount}
                        </Typography>
                      </Box>
                      <Box sx={{ margin: "30px 0 30px 0" }}>
                        <Typography sx={{ fontWeight: "600" }}>
                          Adidas Favorites Sale
                        </Typography>
                        <Typography>
                          Get up to 50% off Adidas Favorites. No code needed.
                          This deal ends April 13th.
                        </Typography>
                        <BlackButton text={"Shop Eligible Products"} />
                      </Box>
                      <Box>
                        <Grid container>
                          {size.map((size) => (
                            <Grid item sm={4} md={4} lg={4} xl={4}>
                              <FixedButton text={size} />
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                      <Box sx={{ display: "flex", margin: "50px 0 0 0" }}>
                        <ComponentsOfProduct
                          addTogBag={() => dispatch(addToBag(product))}
                          productName={product.productName}
                          image={product.image1}
                          price={product.price}
                          product={product.image1}
                        />
                        <Box
                          sx={{
                            padding: "0 5px 0 5px",
                            margin: "0 0 0 10px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            className={product.toggle ? "" : "bg"}
                            onClick={() => dispatch(addItem(product))}
                          >
                            <Button
                              sx={{ border: "solid 1px black" }}
                              className={product.toggle ? "" : "bg"}
                              onClick={() => dispatch(toggle(product))}
                            >
                              <FavoriteBorderIcon />
                            </Button>
                          </Box>
                          <Box
                            className={product.toggle ? "bg" : ""}
                            onClick={() =>
                              dispatch(removeProduct(product.image1))
                            }
                          >
                            <Button
                              sx={{ border: "solid 1px black" }}
                              className={product.toggle ? "bg" : ""}
                              onClick={() => dispatch(toggle(product))}
                            >
                              <FavoriteIcon />
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                      <Box sx={{ margin: "50px 0 0 0" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <CheckIcon />
                          <BlackButton
                            text={
                              "Pay over time in interest-free installments with Affirm, Klarna or Afterpay"
                            }
                          />
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <AirportShuttleIcon />
                          <BlackButton
                            text={
                              "Join adiClub to get unlimited free standard shipping,returns, & exchanges"
                            }
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className={"responsiveVerse"}>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      fontWeight: "600",
                      margin: "15px 0 15px 15px",
                    }}
                  >
                    {product.productName}
                  </Typography>
                  <Box>
                    <Box
                      sx={{
                        padding: "1px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <TransformWrapper>
                        <TransformComponent>
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              transition: "1s",
                            }}
                            src={product.image1}
                          />
                        </TransformComponent>
                      </TransformWrapper>
                    </Box>
                    <Box
                      sx={{
                        padding: "1px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <TransformWrapper>
                        <TransformComponent>
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              transition: "1s",
                            }}
                            src={product.image2}
                          />
                        </TransformComponent>
                      </TransformWrapper>
                    </Box>
                    <Box
                      sx={{
                        padding: "1px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <TransformWrapper>
                        <TransformComponent>
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              transition: "1s",
                            }}
                            src={product.image1}
                          />
                        </TransformComponent>
                      </TransformWrapper>
                    </Box>
                    <Box
                      sx={{
                        padding: "1px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <TransformWrapper>
                        <TransformComponent>
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              transition: "1s",
                            }}
                            src={product.image2}
                          />
                        </TransformComponent>
                      </TransformWrapper>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "10px",
                    }}
                  >
                    <Typography sx={{ fontWeight: "600" }}>Sizes</Typography>
                    <Box sx={{ display: "flex", overflowY: "hidden" }}>
                      {size.map((size) => (
                        <Box sx={{ border: "1px solid lightgray" }}>
                          <FixedButton text={size} />
                        </Box>
                      ))}
                    </Box>
                  </Box>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        margin: "50px 0 0 0",
                        justifyContent: "center",
                      }}
                    >
                      <ComponentsOfProduct
                        addTogBag={() => dispatch(addToBag(product))}
                        productName={product.productName}
                        image={product.image1}
                        price={product.price}
                        product={product.image1}
                      />

                      <Box
                        sx={{
                          padding: "0 5px 0 5px",
                          margin: "0 0 0 10px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          className={product.toggle ? "" : "bg"}
                          onClick={() => dispatch(addItem(product))}
                        >
                          <Button
                            sx={{ border: "solid 1px black" }}
                            className={product.toggle ? "" : "bg"}
                            onClick={() => dispatch(toggle(product))}
                          >
                            <FavoriteBorderIcon />
                          </Button>
                        </Box>
                        <Box
                          className={product.toggle ? "bg" : ""}
                          onClick={() =>
                            dispatch(removeProduct(product.image1))
                          }
                        >
                          <Button
                            sx={{ border: "solid 1px black" }}
                            className={product.toggle ? "bg" : ""}
                            onClick={() => dispatch(toggle(product))}
                          >
                            <FavoriteIcon />
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ margin: "50px 0 0 0" }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <CheckIcon />
                        <BlackButton
                          text={
                            "Pay over time in interest-free installments with Affirm, Klarna or Afterpay"
                          }
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <AirportShuttleIcon />
                        <BlackButton
                          text={
                            "Join adiClub to get unlimited free standard shipping,returns, & exchanges"
                          }
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </>
            ))
          : ""}
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
            sx={{
              fontSize: "28px",
              fontWeight: "600",
              margin: "20px 0 20px 0",
            }}
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
        <PageFooter onClick={toTop} />
      </Box>
    </>
  );
}

export default Product;
