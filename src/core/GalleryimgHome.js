import React from "react";
import Gallery from "react-photo-gallery";

import { photos } from "./Photos";
export default function GalleryimgHome(){
  return (
    <div className="container my-3 border-top">
    <Gallery photos={photos} />;
    </div>
  );
};
