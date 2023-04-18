import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Image from "next/image";
import Link from "next/link";

function ComponentsOfSAH({
  price,
  productName,
  productType,
  productDescription,
  image,
  membersOnly,
  sale,
  discount,
  onClick,
  heartIcon,
  heartIconDark,
  addItem,
  toggled,
  removeItem,
  recently,
}) {
  const [prices, setPrice] = useState(false);

  const setPriceHover = () => {
    setPrice(!prices);
  };
  return (
    <Box onClick={recently}>
      <Box
        onClick={onClick}
        onMouseEnter={setPriceHover}
        onMouseLeave={setPriceHover}
        className="borderSI"
        sx={{
          width: "280px",
          height: "380px",
          margin: "10px",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", right: "5px", top: "10px" }}>
            <Box className={toggled ? "" : "bg"} onClick={addItem}>
              <IconButton
                className={toggled ? "" : "bg"}
                onClick={heartIconDark}
              >
                <FavoriteBorderIcon />
              </IconButton>
            </Box>
            <Box className={toggled ? "bg" : ""} onClick={removeItem}>
              <IconButton className={toggled ? "bg" : ""} onClick={heartIcon}>
                <FavoriteIcon />
              </IconButton>
            </Box>
          </Box>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            href={"/Product"}
          >
            <Image src={image} width={280} height={280} />
            <Box
              className={prices ? "price" : ""}
              sx={{
                position: "absolute",
                bottom: "0px",
                bgcolor: "white",
                left: "10px",
                padding: "1px 3px",
                transition: "200ms",
              }}
            >
              <Typography sx={{ fontSize: "12px" }}>{price}</Typography>
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    textDecoration: "line-through",
                    color: "grey",
                  }}
                >
                  {discount}
                </Typography>
                <Typography
                  sx={{ fontSize: "12px", color: "#d92f4c", marginLeft: "4px" }}
                >
                  {sale}
                </Typography>
              </Box>
            </Box>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            padding: "10px",
          }}
        >
          <Typography sx={{ fontSize: "12px" }}>{productName}</Typography>
          <Typography sx={{ fontSize: "12px", color: "grey" }}>
            {productDescription}
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>{productType}</Typography>
          <Typography sx={{ fontSize: "12px", color: "#0081c7" }}>
            {membersOnly}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ComponentsOfSAH;
