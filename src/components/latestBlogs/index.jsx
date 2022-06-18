import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Box,Typography} from '@mui/material';
import './latest.css'
import Img1 from '../../assets/lates1.jpg'
import Img2 from '../../assets/lates2.jpg'
import Img3 from '../../assets/lates3.jpg'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant='h3' sx={{textAlign:'center',}}>
        Latest Blogs<br/>
        {/* <hr sx={{color:'red'}} /> */}
      </Typography>
        <Box sx={{border:'3px solid red',width:'100px',justifyContent:'center',textAlign:'center'}} ></Box>
      <Grid container spacing={35}>
        <Grid item xs={10} md={6} lg={3}>
        <Typography className='image'>
        <img className='img1' src={Img1} alt="" />
        <Typography className='overlay'>
          <Typography variant="h4" sx={{fontSize:"30px",opacity:'1'}}> Here are the trends I</Typography> 
          <Typography sx={{fontSize:"30px",opacity:'1'}}>see coming this fall</Typography>
          <Typography sx={{fontSize:'15px',pt:'3%'}}>
            BY ADMIN | DEC 01, 2017
          </Typography>
          <Typography sx={{color:'red',pt:'5%'}}>Readmore</Typography>
        </Typography>
      </Typography>
        </Grid>
        <Grid item xs={10} md={6} lg={3}>
        <Typography className='image'>
        <img className='img1' src={Img2} alt="" />
        <Typography className='overlay'>
          <Typography variant="h4" sx={{fontSize:"30px",opacity:'1'}}> Here are the trends I</Typography> 
          <Typography sx={{fontSize:"30px",opacity:'1'}}>see coming this fall</Typography>
          <Typography sx={{fontSize:'15px',pt:'3%'}}>
            BY ADMIN | DEC 01, 2017
          </Typography>
          <Typography sx={{color:'red',pt:'5%'}}>Readmore</Typography>
        </Typography>
      </Typography>
        </Grid>
        <Grid item xs={10} md={6} lg={3}>
        <Typography className='image'>
        <img className='img1' src={Img3} alt="" />
        <Typography className='overlay'>
          <Typography variant="h4" sx={{fontSize:"30px",opacity:'1'}}> Here are the trends I</Typography> 
          <Typography sx={{fontSize:"30px",opacity:'1'}}>see coming this fall</Typography>
          <Typography sx={{fontSize:'15px',pt:'3%'}}>
            BY ADMIN | DEC 01, 2017
          </Typography>
          <Typography sx={{color:'red',pt:'5%'}}>Readmore</Typography>
        </Typography>
      </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}