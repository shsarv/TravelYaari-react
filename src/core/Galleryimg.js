import React from "react";
import Layout from './Layout';
import Gallery from "react-photo-gallery";

import { photos } from "./Photos";
export default function Galleryimg(){
  return (
    <Layout
    title=""
    description=""
    className="">
    <div className="container-fluid my-3">
    <h2 className="mb-3 p-3 text-center text-success font-weight-bold h2">Gallery</h2>
    <Gallery photos={photos} />;
    </div>
    </Layout>
  );
};
