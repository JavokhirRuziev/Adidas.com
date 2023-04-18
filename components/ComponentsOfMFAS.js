import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function ComponentsOfMFAS({ image, storyName, story }) {
  return (
    <Box sx={{ margin: "10px" }}>
      <Box
        sx={{
          position: "relative",
          width: "226px",
          height: "145px",
        }}
      >
        <Image src={image} width={226} height={145} />
        <Typography
          sx={{
            position: "absolute",
            bgcolor: "white",
            right: "0",
            width: "200px",
            padding: "0px 5px",
            fontSize: "13px",
            fontWeight: "600",
            bottom: "-15px",
          }}
        >
          {storyName}
        </Typography>
      </Box>
      <Typography sx={{ fontSize: "13px", marginTop: "20px" }}>
        {story}
      </Typography>
    </Box>
  );
}

export default ComponentsOfMFAS;
