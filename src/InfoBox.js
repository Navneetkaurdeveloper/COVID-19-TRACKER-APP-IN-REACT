import React from 'react'
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({title,cases,total}) {
    return (
        
        <Card
      
    >
      <CardContent>
        <Typography className='infoBox__title' color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <h2 className='infoBx__cases' >
          {cases} NEW
        </h2>

        <Typography className="infoBox__total" color="textSecondary">
          {total} TOTAL
        </Typography>
      </CardContent>
    </Card>
  );
}


export default InfoBox
