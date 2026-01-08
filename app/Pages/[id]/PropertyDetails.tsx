import { ThemeContext } from "@/app/Context/Context";
import React, { useContext, useState } from "react";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

interface PropertyProps {
  id: string;
}

const PropertyDetails = ({ id }: PropertyProps) => {
  const properties = useContext(ThemeContext);
  const [property, setData]: any = useState(
    properties.find((e: any) => e.id === id)
  );

  console.log(properties, "id page");
  return (
    <section className="bg-slate-50 min-h-screen pb-12">
      <div className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content (Left Side) */}
          <main className="md:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
                {property.type}
              </span>
              <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-4">
                {property.name}
              </h1>

              <div className="flex items-center text-slate-500 mb-6">
                <LocationOnIcon
                  className="text-red-500 mr-1"
                  fontSize="small"
                />
                <span>
                  {property.location.street}, {property.location.city},{" "}
                  {property.location.state} {property.location.zipcode}
                </span>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-slate-100 mb-6">
                <div className="flex flex-col items-center">
                  <BedIcon className="text-slate-400 mb-1" />
                  <span className="font-bold text-slate-800">
                    {property.beds}{" "}
                    <span className="font-normal text-slate-500 text-sm">
                      Beds
                    </span>
                  </span>
                </div>
                <div className="flex flex-col items-center border-x border-slate-100">
                  <BathtubIcon className="text-slate-400 mb-1" />
                  <span className="font-bold text-slate-800">
                    {property.baths}{" "}
                    <span className="font-normal text-slate-500 text-sm">
                      Baths
                    </span>
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <SquareFootIcon className="text-slate-400 mb-1" />
                  <span className="font-bold text-slate-800">
                    {property.square_feet}{" "}
                    <span className="font-normal text-slate-500 text-sm">
                      sqft
                    </span>
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Description
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {property.description}
              </p>

              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Amenities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3">
                {property.amenities.map((amenity: any, index: number) => (
                  <div key={index} className="flex items-center text-slate-600">
                    <CheckCircleIcon
                      className="text-green-500 mr-2"
                      sx={{ fontSize: 18 }}
                    />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </main>

          {/* Sidebar (Right Side) */}
          <aside className="space-y-6">
            {/* Rates Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Pricing</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                  <span className="text-slate-500">Weekly</span>
                  <span className="text-2xl font-bold text-blue-600">
                    ${property.rates.weekly.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-500">Monthly</span>
                  <span className="text-2xl font-bold text-blue-600">
                    $
                    {property.rates.monthly
                      ? property.rates.monthly.toLocaleString()
                      : "X"}
                  </span>
                </div>
              </div>
            </div>

            {/* Seller Contact Card */}
            <div className="bg-slate-900 p-6 rounded-xl shadow-lg text-white">
              <h3 className="text-xl font-bold mb-4">Contact Seller</h3>
              <p className="text-slate-300 font-medium mb-4 text-lg">
                {property.seller_info.name}
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <EmailIcon fontSize="small" />
                  <span className="truncate">{property.seller_info.email}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <PhoneIcon fontSize="small" />
                  <span>{property.seller_info.phone}</span>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg mt-6 transition duration-300 shadow-md">
                Send Inquiry
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
