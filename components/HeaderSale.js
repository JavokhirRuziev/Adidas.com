import { Box, Typography } from "@mui/material";
import React from "react";

function HeaderSale({ className }) {
  return (
    <Box
      className={className}
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "25px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
            SHOES
          </Typography>
          <Typography>Are you curious about what </Typography>
          <Typography>Are you curious </Typography>
          <Typography>Are you curious what </Typography>
          <Typography>Are you about what </Typography>
          <Typography>curious about what </Typography>
          <Typography> you curious about what </Typography>
          <Typography> about what </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
            CLOTHING
          </Typography>{" "}
          <Typography>Are you curious about what </Typography>
          <Typography>Are you curious </Typography>
          <Typography>Are you curious what </Typography>
          <Typography>Are you about what </Typography>
          <Typography>curious about what </Typography>
          <Typography> you curious about what </Typography>
          <Typography> about what </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
            ACCESSORIES
          </Typography>{" "}
          <Typography>Are you curious about what </Typography>
          <Typography>Are you curious </Typography>
          <Typography>Are you curious what </Typography>
          <Typography>Are you about what </Typography>
          <Typography>curious about what </Typography>
          <Typography> you curious about what </Typography>
          <Typography> about what </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
            SHOP BY SPORT
          </Typography>
          <Typography>Are you curious about what </Typography>
          <Typography>Are you curious </Typography>
          <Typography>Are you curious what </Typography>
          <Typography>Are you about what </Typography>
          <Typography>curious about what </Typography>
          <Typography> you curious about what </Typography>
          <Typography> about what </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
            SHOP BY COLLECTION
          </Typography>
          <Typography>Are you curious about what </Typography>
          <Typography>Are you curious </Typography>
          <Typography>Are you curious what </Typography>
          <Typography>Are you about what </Typography>
          <Typography>curious about what </Typography>
          <Typography> you curious about what </Typography>
          <Typography> about what </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "15px",
        }}
      >
        <Typography sx={{ fontWeight: "600" }}>Sale</Typography>
        <Typography sx={{ fontWeight: "600" }}>All Men's Shoes</Typography>
        <Typography sx={{ fontWeight: "600" }}>All Men's Clothing</Typography>
        <Typography sx={{ fontWeight: "600" }}>
          All Men's Accessories
        </Typography>
        <Typography sx={{ fontWeight: "600" }}>All Men's Sport</Typography>
        <Typography sx={{ fontWeight: "600" }}>All Men's</Typography>
      </Box>
    </Box>
  );
}

export default HeaderSale;
