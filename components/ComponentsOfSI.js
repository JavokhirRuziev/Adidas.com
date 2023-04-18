import { IconButton, Typography, Box } from "@mui/material";
import Image from "next/image";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

function ComponentsOfSI({
  image,
  price,
  productName,
  productType,
  onClick,
  discount,
  sale,
  heartIcon,
  toggled,
  heartIconDark,
  addItem,
  removeItem,
  addToRecently,
}) {
  const [prices, setPrice] = useState(false);

  const setPriceHover = () => {
    setPrice(!prices);
  };

  return (
    <Box onClick={addToRecently}>
      <Box
        onClick={onClick}
        onMouseEnter={setPriceHover}
        onMouseLeave={setPriceHover}
        className="borderSI"
        sx={{
          width: "320px",
          height: "390px",
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
            <Image src={image} width={320} height={320} />
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
        <Link
          style={{ textDecoration: "none", color: "black" }}
          href={"/Product"}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <Typography sx={{ fontSize: "14px" }}>{productName}</Typography>
            <Typography sx={{ fontSize: "14px", color: "grey" }}>
              {productType}
            </Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  );
}

export default ComponentsOfSI;
