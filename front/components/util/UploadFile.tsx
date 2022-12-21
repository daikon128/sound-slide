import React from "react";
import axios from "axios";
import {Backdrop, Button, CircularProgress} from "@mui/material";
import {FileOpen, Upload} from "@mui/icons-material";
import style from "./UploadFile.module.css"

type UploadFileProp = {
  fileType: string,
  uploadPath: string
  // TODO add preview component
}
export const UploadFile = (props: UploadFileProp) => {
  const inputFileElement = React.createRef<HTMLInputElement>()
  const [isLoading, setIsLoading] = React.useState(false)
  type FileState = {
    file : File | null
  }
  const [currentFile, setCurrentFile] = React.useState<FileState>({ file: null })
  const [message, setMessage] = React.useState("")

  const upload = async () => {
    if (currentFile.file == null) {
      setMessage("file not selected")
      return
    }
    setIsLoading(true)
    const formData = new FormData()
    formData.append('audio', currentFile.file)
    const response = await axios.post(props.uploadPath, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).finally(() => setIsLoading(false))
    console.log(response)
  }

  const fileSelected = () => {
    const file = inputFileElement.current?.files?.item(0)
    if (file != undefined) {
      setCurrentFile({ file: file })
    }
  }

  let button;
  if (currentFile.file == null) {
    button = <Button variant="outlined" component="label" startIcon={<FileOpen/>}>
      ファイルを選択する
      <input type="file" accept={props.fileType} ref={inputFileElement} onChange={fileSelected} hidden/>
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
