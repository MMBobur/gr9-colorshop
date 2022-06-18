import { Button, Grid, Input, Typography, Box, TextField, Container } from "@mui/material";
import React from "react";

function NewsLetter() {
  return (
    <><br /><br /><br />
      <Box sx={{ backgroundColor: '#F2F2F2', height: { lg: '15vh', md: '20vh', xs: '30vh' }, display: 'flex', alignItems: 'center' }}>
        <Container>
          <Grid container columns={12}>
            <Grid item xs={12} md={6} lg={6}>
              <Typography>Newsletter</Typography>
              <Typography>
                Subscribe to our newsletter and get 20% off your first purchase
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Box>
                <TextField sx={{ width: "350px", height: "55px", backgroundColor: '#FFFFFF', color: '#B9B4CC' }} label='Your Email'></TextField>
                <Button sx={{ width: "200px", height: "55px", backgroundColor: 'red', color: 'white' }}>SUBSCRIBE</Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default NewsLetter;
