"use client";
import Link from "@/node_modules/next/link";
// import properties from "@/properties.json";
import { LocationCity, LocationOn } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from "@mui/material";
import Property from "@/properties.json";
// import connectDB from "@/config/database";

import * as React from "react";

const page = () => {
  const Properties: any = Property as any;
  return (
    <div className="mt-10">
      <div className="grid grid-flow-row md:grid-cols-4 sm:grid-cols-2 gap-4 ml-2">
        {Properties.map((property: any, index: number) => (
          <Card sx={{ maxWidth: 345 }} key={index}>
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title={property.name}
            />
            <CardContent className="">
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="flex flex-row justify-between"
              >
                {property.name}
                <Tooltip title={Object.values(property.location).join(", ")}>
                  <LocationOn />
                </Tooltip>
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {property.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Typography className="text-3xl font-bold" color={"success"}>
                {property.rates.nightly
                  ? `₹${property.rates.nightly} night`
                  : `₹${property.rates.weekly} week`}
              </Typography>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default page;
