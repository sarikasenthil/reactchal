import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const CourseBenefits = () => {
  return (
    <Box sx={{ bgcolor: '#f4f0ff', p: { xs: 4, md: 8 } }}>
      <Grid container spacing={4} alignItems="center"></Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: '#240054' }}>
            Course Benefits :
          </Typography>

      </Grid>
    </Box>
  );
};

export default CourseBenefits;
