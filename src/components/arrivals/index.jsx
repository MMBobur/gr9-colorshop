import * as React from "react";
import "./Style.css"
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Rasm1 from '../../assets/arrivals_1.webp'
import Rasm2 from '../../assets/arrivals_2.webp'
import Rasm3 from '../../assets/arrivals_3.webp'
import Rasm4 from '../../assets/arrivals_4.webp'
import Rasm5 from '../../assets/arrivals_5.webp'
import Rasm6 from '../../assets/arrivals_6.webp'
import Rasm7 from '../../assets/arrivals_7.webp'
import Rasm8 from '../../assets/arrivals_8.webp'
import Rasm9 from '../../assets/arrivals_9.webp'
import Rasm10 from '../../assets/arrivals_10.webp'


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1, marginTop:'100px' }}>
      <Typography sx={{ textAlign: "center", fontSize: "40px", wordSpacing: "5px" }}> New Arrivals</Typography>
      <Grid justifyContent='center' container spacing={2}>
        <Grid item xs={11} >
                <Grid  container >
                <Grid item sx={{justifyContent:'center',display:'flex',marginTop:'1%'}} xs={12} >       
                  <Box sx={{borderBottom:'5px solid red',width:'70px'}} ></Box>
                </Grid>
                <Grid  sx={{paddingBottom:'5%',paddingTop:'3%'}} xs={12}>
                  <Box sx={{justifyContent:'center', display:'flex'}} >
                    <Button sx={{border:'1px solid #fe4c50', color:'white', background:'#fe4c50', "&:hover": { background:'#fe4c50' }}} >ALL</Button>
                    <Button sx={{border:'1px solid #ebebeb', color:'black', '&:active': { background:'#fe4c50', color:'white' }}}>WOMEN'S</Button>
                    <Button sx={{border:'1px solid #ebebeb', color:'black', '&:active': { background:'#fe4c50', color:'white' }}}>ACCESSORIES</Button>
                    <Button sx={{border:'1px solid #ebebeb', color:'black', '&:active': { background:'#fe4c50', color:'white' }}}>MEN'S</Button>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3} md={2.3} lg={2.3} >
                  <Box className='father' sx={{borderRight: "1px solid rgb(233, 233, 233)"}} >
                    <Box sx={{paddingTop:'5%'}} >
                      <Typography sx={{position:'relative',textAlign:'end',marginRight:'5%',}} ><span style={{padding:'1%',paddingLeft:'5%',paddingRight:'5%',fontSize:'15px',fontWeight:'550',color:'white',background:'#fe4c50',borderRadius:'2px'}} >-$20</span></Typography>
                      <Checkbox className='like' sx={{position:'relative',marginTop:'-50px',}} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    </Box>
                    <img src={Rasm1} style={{marginTop:'-50px',width:'100%'}} />
                    <Typography sx={{textAlign:'center', fontSize:'15px',fontWeight:'550',color:'#1e1e27',}} >
                    Fujifilm X100T 16 MP Digital Camera (Silver)
                    </Typography>
                    <Typography sx={{textAlign:'center'}} ><span style={{color:'#fe4c50', fontWeight:'550',fontSize:'16px'}} >$520.00</span>sasasa</Typography>
                    <Box sx={{border:'1px solid white',marginTop:'7%',width:'99.6%'}} >
                      <Button className='btn' sx={{ textAlign:'center',width:'100%',background:'#fe4c50',color:'white',fontSize:'14px',fontWeight:'550', "&:hover": {background:'#ed7b7d',color:'white',}}} >ADD TO CARD</Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3} md={2.3} lg={2.3}>
                <Box className='father' sx={{borderRight: "1px solid rgb(233, 233, 233)"}} >
                    <Box sx={{}}>
                      <Typography sx={{position:'relative',textAlign:'end',marginRight:'5%',}} >
                        <Checkbox className='like' sx={{position:'relative',}} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                      </Typography>
                      <Typography sx={{position:'relative',marginTop:'-30px',marginLeft:'5%'}} ><span style={{padding:'1%',paddingLeft:'5%',paddingRight:'5%',fontSize:'15px',fontWeight:'550',color:'white',background:'#51a042',borderRadius:'2px'}} >NEW</span></Typography>
                      <Box sx={{paddingTop:'9%'}}></Box>
                    </Box>
                    <img src={Rasm2} style={{marginTop:'-50px',width:'100%'}} />
                    <Typography sx={{textAlign:'center', fontSize:'15px',fontWeight:'550',color:'#1e1e27',}} >
                    Samsung CF591 Series Curved 27-Inch FHD Monitor
                    </Typography>
                    <Typography sx={{textAlign:'center'}} ><span style={{color:'#fe4c50', fontWeight:'550',fontSize:'16px'}} >$520.00</span></Typography>
                    <Box sx={{border:'1px solid white',marginTop:'7%',width:'99.5%'}} >
                      <Button className='btn' sx={{ textAlign:'center',width:'100%',background:'#fe4c50',color:'white',fontSize:'14px',fontWeight:'550', "&:hover": {background:'#ed7b7d',color:'white',}}} >ADD TO CARD</Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3} md={2.3} lg={2.3}>
                <Box className='father' sx={{borderRight: "1px solid rgb(233, 233, 233)"}} >
                    <Box>
                    <Typography sx={{position:'relative',textAlign:'end',marginRight:'5%',}} >
                        <Checkbox className='like' sx={{position:'relative',}} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                      </Typography>
                      <Box sx={{paddingTop:'5%'}}></Box>
                    </Box>
                    <img src={Rasm3} style={{marginTop:'-50px',width:'100%'}} />
                    <Typography sx={{textAlign:'center', fontSize:'15px',fontWeight:'550',color:'#1e1e27',}} >
                    Blue Yeti USB Microphone Blackout Edition 
                    </Typography>
                    <Typography sx={{textAlign:'center'}} ><span style={{color:'#fe4c50', fontWeight:'550',fontSize:'16px'}} >$520.00</span></Typography>
                    <Box sx={{border:'1px solid white',marginTop:'7%',width:'99.5%'}} >
                      <Button className='btn' sx={{ textAlign:'center',width:'100%',background:'#fe4c50',color:'white',fontSize:'14px',fontWeight:'550', "&:hover": {background:'#ed7b7d',color:'white',}}} >ADD TO CARD</Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3} md={2.3} lg={2.3}>
                <Box className='father' sx={{borderRight: "1px solid rgb(233, 233, 233)"}} >
                    <Box sx={{paddingTop:'5%'}} >
                      <Typography sx={{position:'relative',textAlign:'end',marginRight:'5%',}} ><span style={{padding:'1%',paddingLeft:'5%',paddingRight:'5%',fontSize:'15px',fontWeight:'550',color:'white',background:'#fe4c50',borderRadius:'2px'}} >sale</span></Typography>
                      <Checkbox className='like' sx={{position:'relative',marginTop:'-50px',}} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    </Box>
                    <img src={Rasm4} style={{marginTop:'-50px',width:'100%'}} />
                    <Typography sx={{textAlign:'center', fontSize:'15px',fontWeight:'550',color:'#1e1e27',}} >
                    DYMO LabelWriter 450 Turbo Thermal Label Printer
                    </Typography>
                    <Typography sx={{textAlign:'center'}} ><span style={{color:'#fe4c50', fontWeight:'550',fontSize:'16px'}} >$520.00</span></Typography>
                    <Box sx={{border:'1px solid white',marginTop:'7%',width:'99.6%'}} >
                      <Button className='btn' sx={{ textAlign:'center',width:'100%',background:'#fe4c50',color:'white',fontSize:'14px',fontWeight:'550', "&:hover": {background:'#ed7b7d',color:'white',}}} >ADD TO CARD</Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3} md={2.3} lg={2.3}>
                <Box className='father'>
                    <Box>
                      <Typography sx={{position:'relative',textAlign:'end',marginRight:'5%',}} >
                        <Checkbox className='like' sx={{position:'relative',}} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                      </Typography>
                      <Box sx={{paddingTop:'5%'}}></Box>
                    </Box>
                    <img src={Rasm5} style={{marginTop:'-50px',width:'100%'}} />
                    <Typography sx={{textAlign:'center', fontSize:'15px',fontWeight:'550',color:'#1e1e27',}} >
                    Pryma Headphones, Rose Gold & Grey
                    </Typography>
                    <Typography sx={{textAlign:'center'}} ><span style={{color:'#fe4c50', fontWeight:'550',fontSize:'16px'}} >$520.00</span></Typography>
                    <Box sx={{border:'1px solid white',marginTop:'7%',width:'99.5%'}} >
                      <Button className='btn' sx={{ textAlign:'center',width:'100%',background:'#fe4c50',color:'white',fontSize:'14px',fontWeight:'550', "&:hover": {background:'#ed7b7d',color:'white',}}} >ADD TO CARD</Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3} md={2.3} lg={2.3} >
                  <Box className='father' sx={{borderRight: "1px solid rgb(233, 233, 233)"}} >
                    <Box sx={{paddingTop:'5%'}} >
                      <Typography sx={{position:'relative',textAlign:'end',marginRight:'5%',}} ><span style={{padding:'1%',paddingLeft:'5%',paddingRight:'5%',fontSize:'15px',fontWeight:'550',color:'white',background:'#fe4c50',borderRadius:'2px'}} >-$20</span></Typography>
                      <Checkbox className='like' sx={{position:'relative',marginTop:'-50px',}} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    </Box>
                    <img src={Rasm6} style={{marginTop:'-50px',width:'100%'}} />
                    <Typography sx={{textAlign:'center', fontSize:'15px',fontWeight:'550',color:'#1e1e27',}} >
                    Fujifilm X100T 16 MP Digital Camera (Silver)
                    </Typography>
                    <Typography sx={{textAlign:'center'}} ><span style={{color:'#fe4c50', fontWeight:'550',fontSize:'16px'}} >$520.00</span>sasasa</Typography>
                    <Box sx={{border:'1px solid white',marginTop:'7%',width:'99.5%'}} >
                      <Button className='btn' sx={{ textAlign:'center',width:'100%',background:'#fe4c50',color:'white',fontSize:'14px',fontWeight:'550', "&:hover": {background:'#ed7b7d',color:'white',}}} >ADD TO CARD</Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3} md={2.3} lg={2.3}>
                <Box className='father' sx={{borderRight: "1px solid rgb(233, 233, 233)"}}>
                    <Box>
                      <Typography sx={{position:'relative',textAlign:'end',marginRight:'5%',}} >
                        <Checkbox className='like' sx={{position:'relative',}} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                      </Typography>
                      <Box sx={{paddingTop:'5%'}}></Box>
                    </Box>
                    <img src={Rasm7} style={{marginTop:'-50px',width:'100%'}} />
                    <Typography sx={{textAlign:'center', fontSize:'15px',fontWeight:'550',color:'#1e1e27',}} >
                    Samsung CF591 Series Curved 27-Inch FHD Monitor
                    </Typography>
                    <Typography sx={{textAlign:'center'}} ><span style={{color:'#fe4c50', fontWeight:'550',fontSize:'16px'}} >$520.00</span></Typography>
                    <Box sx={{border:'1px solid white',marginTop:'7%',width:'99.5%'}} >
                      <Button className='btn' sx={{ textAlign:'center',width:'100%',background:'#fe4c50',color:'white',fontSize:'14px',fontWeight:'550', "&:hover": {background:'#ed7b7d',color:'white',}}} >ADD TO CARD</Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3} md={2.3} lg={2.3}>
                <Box className='father' sx={{borderRight: "1px solid rgb(233, 233, 233)"}}>
                    <Box>
                      <Typography sx={{position:'relative',textAlign:'end',marginRight:'5%',}} >
                        <Checkbox className='like' sx={{position:'relative',}} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                      </Typography>
                      <Box sx={{paddingTop:'5%'}}></Box>
                    </Box>
                    <img src={Rasm8} style={{marginTop:'-50px',width:'100%'}} />
                    <Typography sx={{textAlign:'center', fontSize:'15px',fontWeight:'550',color:'#1e1e27',}} >
                    Blue Yeti USB Microphone Blackout Edition
                    </Typography>
                    <Typography sx={{textAlign:'center'}} ><span style={{color:'#fe4c50', fontWeight:'550',fontSize:'16px'}} >$520.00</span></Typography>
                    <Box sx={{border:'1px solid white',marginTop:'7%',width:'99.5%'}} >
                      <Button className='btn' sx={{ textAlign:'center',width:'100%',background:'#fe4c50',color:'white',fontSize:'14px',fontWeight:'550', "&:hover": {background:'#ed7b7d',color:'white',}}} >ADD TO CARD</Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3} md={2.3} lg={2.3} >
                  <Box className='father' sx={{borderRight: "1px solid rgb(233, 233, 233)"}} >
                    <Box sx={{paddingTop:'5%'}} >
                      <Typography sx={{position:'relative',textAlign:'end',marginRight:'5%',}} ><span style={{padding:'1%',paddingLeft:'5%',paddingRight:'5%',fontSize:'15px',fontWeight:'550',color:'white',background:'#fe4c50',borderRadius:'2px'}} >sale</span></Typography>
                      <Checkbox className='like' sx={{position:'relative',marginTop:'-50px',}} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    </Box>
                    <img src={Rasm9} style={{marginTop:'-50px',width:'100%'}} />
                    <Typography sx={{textAlign:'center', fontSize:'15px',fontWeight:'550',color:'#1e1e27',}} >
                    DYMO LabelWriter 450 Turbo Thermal Label Printer
                    </Typography>
                    <Typography sx={{textAlign:'center'}} ><span style={{color:'#fe4c50', fontWeight:'550',fontSize:'16px'}} >$520.00</span></Typography>
                    <Box sx={{border:'1px solid white',marginTop:'7%',width:'99.5%'}} >
                      <Button className='btn' sx={{ textAlign:'center',width:'100%',background:'#fe4c50',color:'white',fontSize:'14px',fontWeight:'550', "&:hover": {background:'#ed7b7d',color:'white',}}} >ADD TO CARD</Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3} md={2.3} lg={2.3}>
                <Box className='father'>
                    <Box>
                      <Typography sx={{position:'relative',textAlign:'end',marginRight:'5%',}} >
                        <Checkbox className='like' sx={{position:'relative',}} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                      </Typography>
                      <Box sx={{paddingTop:'5%'}}></Box>
                    </Box>
                    <img src={Rasm10} style={{marginTop:'-50px',width:'100%'}} />
                    <Typography sx={{textAlign:'center', fontSize:'15px',fontWeight:'550',color:'#1e1e27',}} >
                    Pryma Headphones, Rose Gold & Grey
                    </Typography>
                    <Typography sx={{textAlign:'center'}} ><span style={{color:'#fe4c50', fontWeight:'550',fontSize:'16px'}} >$520.00</span></Typography>
                    <Box sx={{border:'1px solid white',marginTop:'7%',width:'99.5%'}} >
                      <Button className='btn' sx={{ textAlign:'center',width:'100%',background:'#fe4c50',color:'white',fontSize:'14px',fontWeight:'550', "&:hover": {background:'#ed7b7d',color:'white',}}} >ADD TO CARD</Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
        </Grid>
      </Grid>
      
    </Box>
  );
}
