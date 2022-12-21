import React from "react";
import {UploadFile} from "../util/UploadFile";

export const UploadImage = () => {
  const fileType = "image/*"
  const uploadPath = "/api/image"

  return (
    <UploadFile fileType={fileType} uploadPath={uploadPath} />
  )
};
