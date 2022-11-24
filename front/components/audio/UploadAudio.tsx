import React from "react";
import axios from "axios";

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
        <input type="button" value="アップロード" onClick={upload}/>
      </div>
    </div>
  )
};