import { Button, Grid } from "@mui/material";
import React, { useState } from "react";

export const Bulb = () => {
  const [data, setData] = useState(false);
//   console.log("Mydataaa", data);
  return (
    <div style={{ backgroundColor: "black", height: "100vh" }}>
      <Grid container spacing={2}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <img
            style={{ width: "300px", height: "500px", marginLeft: "50px" }}
            src={`./images/${data ? `Bulbon` : `Bulboff`}.png`}
            alt=""
          />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Button onClick={() => setData(!data)} variant="contained" fullWidth>
            {data ? "ON" : "OFF"}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};