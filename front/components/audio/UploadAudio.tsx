import React from "react";
import axios from "axios";
import {Backdrop, Button, CircularProgress} from "@mui/material";
import {Upload} from "@mui/icons-material";

export const UploadAudio = () => {
  const inputFileElement = React.createRef<HTMLInputElement>()
  const [isLoading, setIsLoading] = React.useState(false)

  const upload = async () => {
    setIsLoading(true)
    await new Promise(_ => setTimeout(_, 1000))
    const response = await axios.post('/api/audio', {
      foo: "bar"
    }).finally(() => setIsLoading(false))
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
        <Button variant="outlined" onClick={upload} startIcon={<Upload/>}>アップロード</Button>
      </div>
      <Backdrop
        sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
        open={isLoading}>
        <CircularProgress></CircularProgress>
      </Backdrop>
    </div>
  )
};