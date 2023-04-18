import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import BlackButton from "./BlackButton";
import Link from "next/link";

function ComponentsOfShN({ image, productName, productDescription, href }) {
  return (
    <Box sx={{ margin: "10px", height: "450px" }}>
      <Box>
        <Box>
          <Image src={image} width={260} height={350} alt={"image"} />
        </Box>
      </Box>
      <Box
        sx={{
          width: "260px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100px",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
            {productName}
          </Typography>
          <Typography
            sx={{ fontSize: "12px", color: "grey", marginTop: "5px" }}
          >
            {productDescription}
          </Typography>
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <Link style={{ textDecoration: "none" }} href={href ? href : ""}>
            <BlackButton text={"shop now"} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default ComponentsOfShN;
