import { Box } from "@mui/material";
import React from "react";
import ComponentsOfSAH from "./ComponentsOfSAH";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  toggle,
  removeProduct,
  createProduct,
  addToRecentlyProducts,
} from "@/app/wishListProductSlice";

function WhatsTrending({ className, right, left }) {
  const wtProducts = useSelector((state) => state.wishList.wtProducts);
  const dispatch = useDispatch();

  return (
    <>
      <Box
        className={className}
        sx={{
          maxWidth: "1440px",
          display: "flex",
          margin: "auto",
        }}
      >
        {left}
        {wtProducts.map((product) => (
          <ComponentsOfSAH
            recently={() => dispatch(addToRecentlyProducts(product))}
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
        {right}
      </Box>
    </>
  );
}

export default WhatsTrending;
