// "use client";
import { LocationOn } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from "@mui/material";

import * as React from "react";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { ThemeContext } from "@/app/Context/Context";

const HomeCards = () => {
  const Properties = useContext(ThemeContext);
  const router = useRouter();

  return (
    <div className="mt-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Properties.map((property: any, index: number) => (
          <Card
            sx={{
              maxWidth: 345,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.02)" },
            }}
            key={property.id || index}
            onClick={() => router.push(`/Pages/${property.id}`)}
          >
            {/* Displaying the property image here */}
            <CardMedia
              sx={{ height: 200 }}
              image={property.image_url} // <--- UPDATED THIS LINE
              title={property.name}
            />

            <CardContent className="flex-grow">
              <div className="flex flex-row justify-between items-start mb-2">
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className="leading-tight pr-2"
                >
                  {property.name}
                </Typography>
                <Tooltip title={Object.values(property.location).join(", ")}>
                  <LocationOn className="text-red-500" />
                </Tooltip>
              </div>

              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                className="line-clamp-3" // Limits text to 3 lines for visual consistency
              >
                {property.description}
              </Typography>
            </CardContent>

            <CardActions className="p-4 border-t border-gray-100">
              <Typography className="text-xl font-bold text-green-600">
                {property.rates.nightly
                  ? `₹${property.rates.nightly}/night`
                  : `₹${property.rates.weekly}/week`}
              </Typography>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomeCards;
