import { handleChange } from "@/app/wishListProductSlice";
import { Close, FavoriteBorder } from "@mui/icons-material";
import {
  Box,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function ComponentsOfBag({
  image,
  productName,
  price,
  sale,
  discount,
  removeFromBag,
  counter,
  heartIcon,
  toggled,
  heartIconDark,
  addItem,
  removeItem,
}) {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishList.wishListProducts);
  return (
    <>
      <Box className="bagComponent">
        <Box
          sx={{
            maxWidth: "630px",
            height: "250px",
            display: "flex",
            border: "1px solid black",
            margin: "50px 0 50px 0",
          }}
        >
          <img style={{ width: "250px", height: "250px" }} src={image} />
          <Box
            sx={{
              display: "flex",
              padding: "15px",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography sx={{ fontSize: "12px", padding: "5px" }}>
                  {productName}
                </Typography>
                <Typography sx={{ fontSize: "12px", padding: "5px" }}>
                  SIZE: 9 (US Women)
                </Typography>
              </Box>
              <Box>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    value={counter}
                    onChange={(e) => dispatch(handleChange(e.target.value))}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    sx={{ overflowY: "hidden" }}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box sx={{ fontSize: "12px", padding: "5px" }}>
              <Typography
                sx={{
                  fontSize: "12px",
                  padding: "1px 5px 1px 5px",
                  textDecoration: "line-through",
                  color: "lightgray",
                }}
              >
                {sale}
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  padding: "1px 5px 1px 5px",
                  color: "#e32b2b",
                }}
              >
                {discount}
              </Typography>
              <Typography sx={{ fontSize: "12px", padding: "1px 5px 1px 5px" }}>
                {price}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <IconButton color="primary">
                <Close onClick={removeFromBag} sx={{ padding: "0 0 5px 0" }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="bagComponentVerse">
        <Box
          sx={{
            maxWidth: "630px",
            height: "250px",
            display: "flex",
            border: "1px solid black",
            margin: "50px 0 50px 0",
          }}
        >
          <img style={{ width: "250px", height: "250px" }} src={image} />
          <Box
            sx={{
              display: "flex",
              padding: "15px",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography sx={{ fontSize: "12px", padding: "5px" }}>
                  {productName}
                </Typography>
                <Typography sx={{ fontSize: "12px", padding: "5px" }}>
                  SIZE: 9 (US Women)
                </Typography>
              </Box>
              <Box>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    value={counter}
                    onChange={(e) => dispatch(handleChange(e.target.value))}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    sx={{ overflowY: "hidden" }}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box sx={{ fontSize: "12px", padding: "5px" }}>
              <Typography
                sx={{
                  fontSize: "12px",
                  padding: "1px 5px 1px 5px",
                  textDecoration: "line-through",
                  color: "lightgray",
                }}
              >
                {sale}
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  padding: "1px 5px 1px 5px",
                  color: "#e32b2b",
                }}
              >
                {discount}
              </Typography>
              <Typography sx={{ fontSize: "12px", padding: "1px 5px 1px 5px" }}>
                {price}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <IconButton color="primary">
                <Close onClick={removeFromBag} sx={{ padding: "0 0 5px 0" }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ComponentsOfBag;
