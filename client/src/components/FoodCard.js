import { Card, CardMedia } from "@mui/material";
import React from "react";

const FoodCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        image="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
    </Card>
  );
};

export default FoodCard;
