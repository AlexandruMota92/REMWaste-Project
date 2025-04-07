import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { Alert, Box, CardMedia, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

import './CustomCard.css';

const CustomCard = props => {
  const theme = useTheme();
  return (
    <Card sx={{ display: 'flex', border: '2px solid #0037c1' }}>
      <Box sx={{
        display: 'flex', flexDirection: 'column', backgroundColor: '#121212', color: '#fff',
      }}>
        <CardContent sx={{ minWidth: '20rem', flex: '1 0 auto' }}>
          <Typography component="div" variant="h4" sx={{ fontWeight: '700' }}>
            {`${props.skipSize} Yards Skip`}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              fontSize: '1.25rem',
              lineHeight: '1.75rem',
              paddingTop: '1rem',
              color: '#9ca3af'
            }}
          >
            {`${props.skipHirePeriod} day hire period`}
          </Typography>
          {!props.isPrivatePropertyDependent ? <Alert sx={{ marginTop: '1rem' }} severity="warning">Private Property Only.</Alert> : <Box sx={{ height: '4rem' }}></Box>}
          <Typography
            component="div"
            variant="h4"
            sx={{ marginTop: '6rem', color: '#0037c1', fontWeight: '700' }}
          >
            {`£${props.skipPrice ? props.skipPrice : ''}`} <Typography
              component="span"
              sx={{ color: '#9ca3af' }}
            >
              {`per week`}
            </Typography>
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={props.image}
        alt={props.alt}
      />
    </Card >
  );
};

export default CustomCard;
