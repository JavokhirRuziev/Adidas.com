import React, { useRef, useState } from "react";
import ComponentsOfSI from "../../components/ComponentsOfSI";
import { Box, Button, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import BlackButton from "../../components/BlackButton";
import {} from "../app/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeProduct,
  createProduct,
  toggle,
  addToRecentlyProducts,
} from "@/app/wishListProductSlice";

function StillInterested() {
  const toLeftSide = useRef();
  const toRightSide = useRef();
  const dispatch = useDispatch();

  function toRight() {
    toRightSide.current?.scrollIntoView({
      behavior: "smooth",
    });
  }
  const toLeft = () => {
    toLeftSide.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const sIProducts = useSelector((state) => state.wishList.sIProducts);

  return (
    <>
      <Box sx={{ margin: "20px" }}>
        <Box
          sx={{
            maxWidth: "1440px",
            margin: "auto",
            paddingTop: "30px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
            STILL INTERESTED?
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: "120px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <BlackButton onClick={toLeft} text={<KeyboardArrowLeftIcon />} />
            <BlackButton onClick={toRight} text={<KeyboardArrowRightIcon />} />
          </Box>
        </Box>
        <div
          style={{
            display: "flex",
            overflowY: "hidden",
            maxWidth: "1440px",
            margin: "auto",
            flexDirection: "column",
            paddingTop: "30px",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box ref={toLeftSide} />
            {sIProducts.map((product) => (
              <ComponentsOfSI
                addToRecently={() => dispatch(addToRecentlyProducts(product))}
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
            <Box ref={toRightSide} />
          </Box>
        </div>
      </Box>
    </>
  );
}

export default StillInterested;
