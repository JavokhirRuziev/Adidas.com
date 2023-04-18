import { IconButton, Typography, Box } from "@mui/material";
import Image from "next/image";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

function ComponentsOfGS({
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
  image2,
  recently,
}) {
  const [prices, setPrice] = useState(false);
  const [images, setImage] = useState(true);

  const setImageHover = () => {
    setImage(!images);
  };

  const setPriceHover = () => {
    setPrice(!prices);
  };

  return (
    <Box onClick={recently}>
      <Box
        onClick={onClick}
        onMouseEnter={setPriceHover}
        onMouseLeave={setPriceHover}
        className="gridHover"
        sx={{
          maxWidth: "345px",
          maxHeight: "450px",
        }}
      >
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
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
            onMouseEnter={setImageHover}
            onMouseLeave={setImageHover}
            style={{ textDecoration: "none", color: "black" }}
            href={"/Product"}
          >
            <Box>
              <Image
                className={`gridImage ${images ? "bg" : ""}`}
                src={image}
                width={345}
                height={345}
              />
              <Image
                className={`gridImage ${images ? "" : "bg"}`}
                src={image2}
                width={345}
                height={345}
              />
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
                    sx={{
                      fontSize: "12px",
                      color: "#d92f4c",
                      marginLeft: "4px",
                    }}
                  >
                    {sale}
                  </Typography>
                </Box>
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

export default ComponentsOfGS;
