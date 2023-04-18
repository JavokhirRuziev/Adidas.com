import { Box } from "@mui/material";
import React from "react";
import ComponentsOfShN from "../../components/ComponentsOfShN";

function ShopNow() {
  return (
    <Box sx={{ margin: "30px" }}>
      <Box sx={{ maxWidth: "1120px", margin: "auto" }}>
        <Box
          sx={{
            display: "flex",
            margin: "auto",
            width: "100%",
            overflowY: "hidden",
          }}
        >
          <ComponentsOfShN
            productName={"ICONIC FEELS. REFINED."}
            productDescription={"Step up your street style in Ultraboost."}
            image={"/SHN1.webp"}
            href={"/GridSystem"}
          />
          <ComponentsOfShN
            productName={"SPRING SHOP"}
            productDescription={"Settle into spring with new 3-Stripes gear."}
            image={"/SHN.webp"}
            href={"/GridSystem"}
          />
          <ComponentsOfShN
            productName={"TIMELESS STYLE, REINVENTED."}
            productDescription={
              "A new Always Original collection thats fun, functional and full of statement looks."
            }
            image={"/first-photo2.webp"}
            href={"/GridSystem"}
          />
          <ComponentsOfShN
            productName={"TIMELESS STYLE, REINVENTED."}
            productDescription={
              "A new Always Original collection thats fun, functional and full of statement looks."
            }
            image={"/second-photo.webp"}
            href={"/GridSystem"}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default ShopNow;
