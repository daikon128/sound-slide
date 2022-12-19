import React from "react";
import axios from "axios";
import {Backdrop, Button, CircularProgress} from "@mui/material";
import {FileOpen, Upload} from "@mui/icons-material";
import style from "./UploadAudio.module.css"

export const UploadAudio = () => {
  const inputFileElement = React.createRef<HTMLInputElement>()
  const [isLoading, setIsLoading] = React.useState(false)
  type FileState = {
    file : File | null
  }
  const [currentFile, setCurrentFile] = React.useState<FileState>({ file: null })

  const upload = async () => {
    setIsLoading(true)
    await new Promise(_ => setTimeout(_, 1000))
    const response = await axios.post('/api/audio', {
      foo: "bar"
    }).finally(() => setIsLoading(false))
    console.log(response)
  }

  const fileSelected = () => {
    console.log("file selected")
    console.log(inputFileElement.current?.files?.length)
    const file = inputFileElement.current?.files?.item(0)
    if (file != undefined) {
      setCurrentFile({ file: file })
    }
  }

  let button;
  if (currentFile.file == null) {
    button = <Button variant="outlined" component="label" startIcon={<FileOpen/>}>
      ファイルを選択する
      <input type="file" ref={inputFileElement} onChange={fileSelected} hidden/>
    </Button>;
  } else {
    button = <Button variant="outlined" onClick={upload} startIcon={<Upload/>}>アップロード</Button>;
  }

  return (
    <div className={style.main}>
      <div>
        {button}
      </div>
      <div>
        { currentFile.file?.name }
      </div>
      <Backdrop
        sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
        open={isLoading}>
        <CircularProgress></CircularProgress>
      </Backdrop>
    </div>
  )
};