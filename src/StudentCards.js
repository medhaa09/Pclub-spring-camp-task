import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
// this part is for the cards containing student info that appears on search showing the student name,roll no and department
const StudentCards = ({ student }) => {
  return ( // Material-UI Card component
    <Card sx={{display: 'inline-block', minWidth: '320px', minHeight:'170px',  m: 2, borderRadius: '10px', boxShadow: 3 }}>
      <CardMedia
        component="img"
        sx={{ width: 100, height: 100, margin:"1%", borderRadius: '50%', bgcolor: 'background.paper' }}
        image="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg"
      />
      <CardContent sx={{ textAlign: 'center', pt: 1 }}>
        <Typography gutterBottom variant="subtitle1" component="div">
          {student.n}  
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {student.d}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {student.i}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StudentCards;
