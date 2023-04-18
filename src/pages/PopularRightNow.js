import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ComponentsOfPRN from "../../components/ComponentsOfPRN";

function PopularRightNow() {
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "30px",
        marginBottom: "30px",
      }}
    >
      <Typography
        sx={{
          fontSize: "30px",
          fontWeight: "600",
          marginBottom: "40px",
          margin: "0 0 0 20px",
        }}
      >
        Popular right now
      </Typography>
      <Grid container rowSpacing={4} spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <ComponentsOfPRN text={"ultraboost"} />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <ComponentsOfPRN text={"nmd"} />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <ComponentsOfPRN text={"backpacks"} />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <ComponentsOfPRN text={"cleats"} />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <ComponentsOfPRN text={"stan smith"} />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <ComponentsOfPRN text={"samba"} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default PopularRightNow;
