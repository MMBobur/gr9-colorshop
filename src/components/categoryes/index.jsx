import React from 'react'
import { Grid } from '@mui/material'
import './index.css'

function Categorys() {
  return (
    <Grid container columns={12}>
        <Grid className='d' item xs={12} md={6} lg={4}></Grid>
        <Grid className='m' item xs={12} md={6} lg={4}></Grid>
        <Grid className='n' item xs={12} md={6} lg={4}></Grid>
    </Grid>
  )
}

export default Categorys