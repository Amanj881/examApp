import React from "react";
import UploadPhoto from "./UploadPhoto";
import "../../index.css";

export default {
  title: "UploadPhoto",
  component: UploadPhoto,
};

export const Default = () => (
  <UploadPhoto id="photo" labelText="Profile Photo" />
);