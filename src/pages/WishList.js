import { Box, Grid, Typography } from "@mui/material";
import React, { useRef } from "react";
import PageFooter from "./PageFooter";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  toggle,
  removeProduct,
  createProduct,
} from "@/app/wishListProductSlice";
import ComponentsOfWSHL from "../../components/ComponentsOfWSHL";
import HeaderAppBar from "../../components/HeaderAppBar";
import ComponentsOfRecentlys from "../../components/ComponentsOfRecentlys";

function WishList() {
  const dispatch = useDispatch();
  const wishListProducts = useSelector(
    (state) => state.wishList.wishListProducts
  );
  const recentlyProducts = useSelector(
    (state) => state.recentlys.recentlyProducts
  );
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
      <Box sx={{ maxWidth: "1440px", margin: "auto" }}>
        <Box sx={{ padding: "50px" }}>
          <Typography
            sx={{ fontSize: "28px", fontWeight: "600", padding: "30px" }}
          >
            MY WISHLIST
          </Typography>
          <Grid
            container
            sx={{
              display: "flex",
              margin: "auto",
            }}
            className="gridContainer"
          >
            {wishListProducts.length ? (
              wishListProducts.map((product) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <ComponentsOfWSHL
                    toggled={product.toggle}
                    addItem={() => dispatch(addItem(product))}
                    heartIcon={() => dispatch(toggle(product))}
                    removeItem={() => dispatch(removeProduct(product.image1))}
                    heartIconDark={() => dispatch(toggle(product))}
                    onClick={() => dispatch(createProduct(product))}
                    image={product.image1}
                    productName={product.productName}
                    productType={product.productType}
                    price={product.price}
                  />
                </Grid>
              ))
            ) : (
              <>
                <Typography>0 ITEMS</Typography>
                <Typography>
                  You haven't saved any items to your wishlist yet. Start
                  shopping and add your favorite items to your wishlist.
                </Typography>
              </>
            )}
          </Grid>
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
      <PageFooter onClick={toTop} maxWidth={"1440px"} margin={"auto"} />
    </>
  );
}

export default WishList;
