import { Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import { navData } from './navData';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <Grid container spacing={2}>
            {
                navData.map((item)=>
                    <Grid item xs={item.xs}>
                    <Link to={item.path}>

                    <Button variant='contained' fullWidth >{item.label}</Button>
                    </Link>
                        
                    </Grid>
                )
            }
        </Grid>
    );
};

export default Nav;