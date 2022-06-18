import * as React from "react";

import Rasm from '../../assets/photo4.webp'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CircleIcon from '@mui/icons-material/Circle';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Countdown = (props) => {
  const [seconds, setSeconds] = React.useState(59);
  const [minutes, setMinutes] = React.useState(59);
  const [hours, setHours] = React.useState(23);
  const [days, setDays] = React.useState(3);
  const [timeDone, setDone] = React.useState(false);
  //SECONDS

  //seconds 60 -> 0
  React.useEffect(() => {
    const secondsCounter =
      seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
    return () => clearInterval(secondsCounter);
  }, [seconds]);

  //seconds == 60 (when seconds == 0)
  React.useEffect(() => {
    return () => setSeconds(59);
  }, [seconds == 0 && !timeDone]);

  //MINUTES

  //Minutes 60 -> 0  (when seconds == 0)
  React.useEffect(() => {
    return () => setMinutes(minutes - 1)
  }, [seconds == 0]);

  //Minutes == 60 (when minutes == 0)
  React.useEffect(() => {
    return () => setMinutes(59);
  }, [minutes == 0 && !timeDone]);

  //HOURS

  //hours 24 => 0 (when minutes == 0)
  React.useEffect(() => {
    return () => setHours(hours - 1);
  }, [minutes == 0]);

  //hours == 23 (when hours == 0)
  React.useEffect(() => {
    return () => setHours(23);
  }, [hours == 0 && !timeDone]);

  //DAYS
  //days 5 => 0 (when hours == 0)
  React.useEffect(() => {
    return () => setDays(days - 1);
  }, [hours == 0 && !timeDone])

  //DONE

  React.useEffect(() => {
    return () => setDone(true)
  }, [days == 0 && hours == 0 && minutes == 0 && seconds == 0])


  return (
    // <div style={{background:{url:(Rasm)}}} >
    //   <p>
    //     countdown: {days} : {hours} : {minutes} : {seconds}
    //   </p>

    //   <h1>{days}</h1>
    //   <h1>{hours}</h1>
    //   <h1>{minutes}</h1>
    //   <h1>{seconds}</h1>
    // </div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid sx={{ background: '#f2f2f2', marginTop: '5%' }} justifyContent='center' container >
        <Grid xs={10} sm={10} md={4.2} lg={4.2}>
          <img src={Rasm} height='100%' width='100%' />
        </Grid>
        <Grid xs={10} sm={10} md={5.4} lg={5.4} sx={{ marginTop: { xs: '-90%', sm: '-600px', md: '0px', lg: '0px' } }} >
          <Box sx={{ textAlign: 'center', paddingTop: '15%', justifyContent: 'center' }} >
            <Typography sx={{ fontSize: '40px', paddingLeft: '10%', fontWeight: '550' }} >Deal Of The Week</Typography>
            <Box sx={{ justifyContent: 'center', display: 'flex' }} ><Box sx={{ borderBottom: '3px solid #fe4c50', marginLeft: '10%', width: '70px', }} ></Box></Box>
            {/* <Box sx={{border:'1px solid red'}} >{days}</Box>
            <Box sx={{border:'1px solid red'}} >{hours}</Box>
            <Box sx={{border:'1px solid red'}} >{minutes}</Box>
            <Box sx={{border:'1px solid red'}} >{seconds}</Box>
           */}
            {/* <Typography  direction="row" >
             <Typography sx={{border:'1px solid red',width:'50px',height:'50px',borderRadius:'30px'}} >{days}</Typography>
             <Typography sx={{border:'1px solid red',width:'50px',height:'50px',borderRadius:'30px'}} >{hours}</Typography>
             <Typography sx={{border:'1px solid red',width:'50px',height:'50px',borderRadius:'30px'}} >{minutes}</Typography>
             <Typography sx={{border:'1px solid red',width:'50px',height:'50px',borderRadius:'30px'}} >{seconds}</Typography>
           </Typography> */}
            {/* <Stack direction="row" spacing={2}>
           <Typography sx={{border:'1px solid red',width:'100px',height:'100px',borderRadius:'50px'}} ><span style={{fontSize:'50px'}} >{days}</span><br/><span style={{position:'absolute', marginTop:'-10px',marginLeft:'-15px'}} >Day</span></Typography>
             <Typography sx={{border:'1px solid red',width:'100px',height:'100px',borderRadius:'50px'}} >{hours}</Typography>
             <Typography sx={{border:'1px solid red',width:'100px',height:'100px',borderRadius:'50px'}} >{minutes}</Typography>
             <Typography sx={{border:'1px solid red',width:'100px',height:'100px',borderRadius:'50px'}} >{seconds}</Typography>
      </Stack> */}
            <Stack justifyContent='center' sx={{ marginLeft: '10%', marginTop: '5%' }} direction="row" spacing={2}  >
              <Avatar
                sx={{ bgcolor: 'white', color: 'black', width: { xs: '50px', sm: '100px', md: '100px', lg: '100px', }, height: { xs: '50px', sm: '100px', md: '100px', lg: '100px', } }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              >
                <Typography style={{ fontSize: '30px', marginLeft: '5px', marginTop: '-30px',color:'#FE4C50',fontFamily:'Arial Black'}} > {days} </Typography><br />
                <Typography sx={{ marginTop: '40px', marginLeft: '-23px' }}>Day</Typography>
              </Avatar>
              <Avatar
                sx={{ bgcolor: 'white', color: 'black', width: { xs: '50px', sm: '100px', md: '100px', lg: '100px', }, height: { xs: '50px', sm: '100px', md: '100px', lg: '100px', } }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              >
                <Typography style={{ fontSize: '30px', marginLeft: '7px', marginTop: '-30px',color:'#FE4C50',fontFamily:'Arial Black'}} > {hours} </Typography>
                <Typography sx={{ marginTop: '40px', marginLeft: '-37px' }}>hours</Typography>
              </Avatar>
              <Avatar
                sx={{ bgcolor: 'white', color: 'black', width: { xs: '50px', sm: '100px', md: '100px', lg: '100px', }, height: { xs: '50px', sm: '100px', md: '100px', lg: '100px', } }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              >
                <Typography style={{ fontSize: '30px', marginLeft: '15px', marginTop: '-30px',color:'#FE4C50',fontFamily:'Arial Black'}} > {minutes} </Typography>
                <Typography sx={{ marginTop: '40px', marginLeft: '-45px' }}>minutes</Typography>
              </Avatar>
              <Avatar

                sx={{ bgcolor: 'white', color: 'black', width: { xs: '50px', sm: '100px', md: '100px', lg: '100px', }, height: { xs: '50px', sm: '100px', md: '100px', lg: '100px', } }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              >
                <Typography style={{ fontSize: '30px', marginLeft: '15px', marginTop: '-30px',color:'#FE4C50',fontFamily:'Arial Black'}} > {seconds} </Typography>
                <Typography sx={{ marginTop: '40px', marginLeft: '-45px' }} >seconds</Typography>
              </Avatar>
            </Stack>
          </Box>
          <Box style={{display:'flex',justifyContent:'center',marginLeft:'10%',marginTop:'5%'}}>
            <Button style={{ width: '20%', height: '8%', backgroundColor: '#1E1E27', color: 'white', fontSize: '12px', textAlign: 'center' }}>SHOP NOW</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Countdown;