import { Grid,Button } from "@mui/material";
import React, { useEffect, useState } from "react";

export const Speedo=()=>{
    const[data,setData]=useState(0);
    const[clr,setClr]=useState("");

useEffect(()=>{
    if(data>=0 && data<=20){
        setClr("green");
    }
    else if(data>20 && data<=30){
        setClr("blue")
    }
    else if(data>30 && data<=40){
        setClr("yellow");
    }
    else{
        setClr("red");
    }
},[data])

    return(

        <Grid container spacing={2} sx={{marginTop:"50px"}}>
            <Grid item xs={4}>
                <Button variant="contained" fullWidth onClick={()=> data>0 &&  setData(data-5) } disabled={data===0}>Minus (-)</Button>
            </Grid>
            <Grid item xs={4}>
                <h3 style={{textAlign:"center"}}>{data}</h3>
             </Grid>
             <Grid item xs={4}>
                <Button variant="contained" fullWidth onClick={()=>data<50 &&  setData(data+5)} disabled={data===50}>Plus (+)</Button>
             </Grid>
             <Grid item xs={3}></Grid>
             <Grid item xs={6} sx={{height:"200px", width:"700px", bgcolor:clr,marginTop:"20px",borderRadius:"30px", border:"5px solid brown "}}>

             </Grid>
             <Grid item xs={3}></Grid>
        </Grid>
    );
}