import React from "react";
import {UploadFile} from "../util/UploadFile";

export const UploadAudio = () => {
  const fileType = "audio/*"
  const uploadPath = '/api/audio'

  return (
    <UploadFile fileType={fileType} uploadPath={uploadPath} />
  )
};