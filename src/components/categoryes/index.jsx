// import React from 'react'
// import { Grid, Button } from '@mui/material'

// import Container from '@mui/material/Container';
// import './index.css'

// function Categorys() {
//   return (
//     <Container><br />
//       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//         <Grid className='d' sx={{ textAlign:'center', height:'280px'  }} item xs={12} md={6} lg={4}>
//           <Button sx={{width:'40%',height:'15%',"&:hover":{background:'white',color:'gray'},fontSize:'20px',borderRadius:'0',fontWeight:'bold',color:'black',marginTop:'120px', background:'white',}} >WOMEN'S</Button>
//         </Grid>
//         <Grid className='m'  sx={{ textAlign:'center', height:'280px' }} item xs={12} md={6} lg={4}>
//           <Button sx={{width:'55%',height:'15%',"&:hover":{background:'white',color:'gray'},fontSize:'20px',borderRadius:'0',fontWeight:'bold',color:'black',marginTop:'120px', background:'white',}}>ACCESSORIES'S</Button>

//         </Grid>
//         <Grid className='n' sx={{ textAlign:'center', height:'280px' }} item xs={12} md={6} lg={4}>
//           <Button sx={{width:'40%',height:'15%',"&:hover":{background:'white',color:'gray'},fontSize:'20px',borderRadius:'0',fontWeight:'bold',color:'black',marginTop:'120px', background:'white',}}>MEN'S</Button>

//         </Grid>
//       </Grid>

//     </Container>
//   )
// }

// export default Categorys

import React from 'react'
import { Box, Button, Container, Grid } from '@mui/material'
import './index.css'

function Categorys() {
  return (
    <Container><br />
      <Grid container columns={12} >
        <Grid item xs={12} md={6} lg={4}>
          <Box className='d' sx={{display:'flex',alignItems:'center', justifyContent: 'center'}}><Button sx={{width:'180px',height:'50px',backgroundColor:'white',color:'black',fontSize:'20px'}}>WOMEN'S</Button></Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        <Box className='m' sx={{display:'flex',alignItems:'center', justifyContent: 'center'}}><Button sx={{width:'240px',height:'50px',backgroundColor:'white',color:'black',fontSize:'20px'}}>ACCESSORIES'S</Button></Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        <Box className='n' sx={{display:'flex',alignItems:'center', justifyContent: 'center'}}><Button sx={{width:'180px',height:'50px',backgroundColor:'white',color:'black',fontSize:'20px'}}>MEN'S</Button></Box>
        </Grid>
    </Grid>
    </Container>
  )
}

export default Categorys