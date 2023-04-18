import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useRef, useState } from "react";
import PageFooter from "./PageFooter";
import AppBar from "../../components/AppBar";
import HeaderSection from "../../components/HeaderSection";
import BlackButton from "../../components/BlackButton";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeProduct,
  toggle,
  createProduct,
  addToRecentlyProducts,
} from "@/app/wishListProductSlice";
import {} from "@/app/productsSlice";
import GridSystemDrawer from "../../components/GridSystemDrawer";
import ComponentsOfGS from "../../components/ComponentsOfGS";
import HeaderAppBarStatic from "../../components/HeaderAppBarStatic";

function GridSystem() {
  const [onClick, setOnClick] = useState({
    allMenShoes: true,
    sneakers: false,
    football: false,
  });
  const amshProducts = useSelector((state) => state.wishList.amshProducts);
  const naProducts = useSelector((state) => state.wishList.naProducts);
  const wtProducts = useSelector((state) => state.wishList.wtProducts);
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
    <Box sx={{ maxWidth: "1440px", margin: "auto" }}>
      <div ref={ref}></div>
      <HeaderAppBarStatic />
      <Box sx={{ margin: "30px" }}>
        <Box sx={{ display: "flex", margin: "30px 0 30px 0" }}>
          <BlackButton
            text={
              <>
                <KeyboardReturnIcon />
                Back
              </>
            }
          />
          <BlackButton text={"Home"} />
          <BlackButton text={"Men"} />
          <BlackButton text={"Football"} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            className={onClick.allMenShoes ? "" : "bg"}
            sx={{ display: "flex" }}
          >
            <Typography>MEN'S ATHLETIC SHOES & SNEAKERS</Typography>
            <Typography
              sx={{ margin: "0 0 0 10px", fontSize: "10px", color: "gray" }}
            >
              [12]
            </Typography>
          </Box>
          <Box
            className={onClick.sneakers ? "" : "bg"}
            sx={{ display: "flex" }}
          >
            <Typography>MEN'S FOOTBALL CLEATS</Typography>
            <Typography
              sx={{ margin: "0 0 0 10px", fontSize: "10px", color: "gray" }}
            >
              [12]
            </Typography>
          </Box>
          <Box
            className={onClick.football ? "" : "bg"}
            sx={{ display: "flex" }}
          >
            <Typography>MEN'S SHOES</Typography>
            <Typography
              sx={{ margin: "0 0 0 10px", fontSize: "10px", color: "gray" }}
            >
              [12]
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "97%",
          justifyContent: "space-between",
          position: "sticky",
          top: "0",
          margin: "auto",
          zIndex: 1,
          bgcolor: "white",
          borderBottom: "solid 1px lightgray",
          padding: "30px 0 30px 0",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography
            onClick={() =>
              setOnClick({
                allMenShoes: true,
                sneakers: false,
                football: false,
              })
            }
            className={onClick.allMenShoes ? "category" : ""}
            sx={{ padding: "0 15px 0 0" }}
          >
            All Men's Shoes
          </Typography>
          <Typography
            onClick={() =>
              setOnClick({
                allMenShoes: false,
                sneakers: true,
                football: false,
              })
            }
            className={onClick.sneakers ? "category" : ""}
            sx={{ padding: "0 15px 0 15px" }}
          >
            Sneakers
          </Typography>
          <Typography
            onClick={() =>
              setOnClick({
                allMenShoes: false,
                sneakers: false,
                football: true,
              })
            }
            className={onClick.football ? "category" : ""}
            sx={{ padding: "0 15px 0 15px" }}
          >
            Football
          </Typography>
        </Box>
        <Box>
          <GridSystemDrawer />
        </Box>
      </Box>
      <Box sx={{ padding: "30px" }}>
        <Box>
          <Grid
            container
            sx={{
              display: "flex",
              margin: "auto",
            }}
            className="gridContainer"
          >
            {amshProducts.map((product) => (
              <Grid
                className={onClick.allMenShoes ? "" : "bg"}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={3}
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ComponentsOfGS
                  toggled={product.toggle}
                  addItem={() => dispatch(addItem(product))}
                  heartIcon={() => dispatch(toggle(product))}
                  removeItem={() => dispatch(removeProduct(product.image1))}
                  heartIconDark={() => dispatch(toggle(product))}
                  onClick={() => dispatch(createProduct(product))}
                  image={product.image1}
                  image2={product.image2}
                  price={product.price}
                  discount={product.discount}
                  sale={product.sale}
                  productName={product.productName}
                  productType={product.productType}
                  recently={() => dispatch(addToRecentlyProducts(product))}
                />
              </Grid>
            ))}
            {naProducts.map((product) => (
              <Grid
                className={onClick.sneakers ? "" : "bg"}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={3}
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ComponentsOfGS
                  toggled={product.toggle}
                  addItem={() => dispatch(addItem(product))}
                  heartIcon={() => dispatch(toggle(product))}
                  removeItem={() => dispatch(removeProduct(product.image1))}
                  heartIconDark={() => dispatch(toggle(product))}
                  onClick={() => dispatch(createProduct(product))}
                  image={product.image1}
                  image2={product.image2}
                  price={product.price}
                  productName={product.productName}
                  productType={product.productType}
                  discount={product.discount}
                  sale={product.sale}
                  recently={() => dispatch(addToRecentlyProducts(product))}
                />
              </Grid>
            ))}
            {wtProducts.map((product) => (
              <Grid
                className={onClick.football ? "" : "bg"}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={3}
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ComponentsOfGS
                  toggled={product.toggle}
                  addItem={() => dispatch(addItem(product))}
                  heartIcon={() => dispatch(toggle(product))}
                  removeItem={() => dispatch(removeProduct(product.image1))}
                  heartIconDark={() => dispatch(toggle(product))}
                  onClick={() => dispatch(createProduct(product))}
                  image={product.image1}
                  image2={product.image2}
                  price={product.price}
                  productName={product.productName}
                  productType={product.productType}
                  discount={product.discount}
                  sale={product.sale}
                  recently={() => dispatch(addToRecentlyProducts(product))}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <PageFooter onClick={toTop} maxWidth={"1440px"} margin={"auto"} />
    </Box>
  );
}

export default GridSystem;
