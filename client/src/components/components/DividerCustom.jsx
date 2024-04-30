import React from 'react'
import { Grid, Typography } from "@mui/material";

function DividerCustom({title, widthLine, widthText}) {
  return (
      <Grid container alignItems="flex-end">
          <Grid item xs={widthText}>
              <Typography variant="h6" style={{ fontWeight:'bold'}}>{title}</Typography>
          </Grid>
          <Grid item xs={widthLine}>
              <hr style={{ borderTop: '1px solid' }} />
          </Grid>
      </Grid>
  )
}

export {DividerCustom}