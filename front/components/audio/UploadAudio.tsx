import React from "react";
import axios from "axios";
import {Button} from "@mui/material";
import {Upload} from "@mui/icons-material";

export const UploadAudio = () => {
  const inputFileElement = React.createRef<HTMLInputElement>()
  const upload = async () => {
    const response = await axios.post('/api/audio', {
      foo: "bar"
    })
    console.log(response)
  }

  return (
    <div>
      <div>
        音声ファイルをアップロードしてください
      </div>
      <div>
        <input type="file" ref={inputFileElement}/>
      </div>
      <div>
        <Button variant="outlined" onClick={upload} startIcon={<Upload />}>アップロード</Button>
      </div>
    </div>
  )
};