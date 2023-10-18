import { Card, Grid, CardContent, TextField,Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
     
        
      
        
        <Grid container spacing={2} >
        <Grid item xs={6}>
         <img src="https://static-00.iconduck.com/assets.00/web-developer-illustration-503x512-mega3xxj.png" style={{padding:"80px 10px 20px 100px",height:"400px", width:"400px" ,marginLeft:"30px" }} alt="" />
        </Grid>
        <Grid item xs={6}>
        <Card sx={{marginTop:"70px",border:"1px outset black",borderRadius:"40px",boxShadow:"5px 5px 5px 5px gray",marginBottom:"230px",height:"450px"}}>
          <CardContent>
        <Grid container spacing={2}>
       

          
            <Grid item xs={12}>
          <h1 style={{textAlign:"center"}}>Welcome to PickupBiz Software</h1>
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" label="Enter Username" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" label="Enter Password" fullWidth />
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
            <Link to="/product">
                <Button variant="contained" fullWidth sx={{marginTop:"30px",fontSize:"17px"}}>Log In</Button>
              </Link>
            </Grid>
            <Grid item xs={4}>
            <Link to="/signup">
            <Button variant="contained" fullWidth sx={{marginTop:"30px",fontSize:"17px"}}>Sign Up</Button>
            </Link>
            </Grid>
            <Grid item xs={2}></Grid>

        </Grid>
</CardContent>
        </Card>
        </Grid>
        
        
        </Grid>
        
      
    </div>
  );
};

export default Home;
