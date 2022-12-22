import {useEffect, useState} from "react";

export const Preview = (props: { file: File | null }) => {
  const emptyPreview = (
    <label>ここにプレビューが表示されます</label>
  )
  const [previewElement, setPreviewElement] = useState(emptyPreview)

  useEffect(() => {
    if (props.file == null) {
      return
    }
    const reader = new FileReader()
    if (reader == null) {
      return
    }

    reader.onload = (event) => {
      const fileResult = event?.target?.result
      const mimeType = props.file?.type
      if (mimeType == null || typeof fileResult != 'string') {
        return
      }
      const element = getElementFromMimeType(mimeType, fileResult)
      if (element == null) {
        return
      }
      setPreviewElement(element)
    }
    reader.readAsDataURL(props.file);
  }, [props.file])

  const getElementFromMimeType = (mimeType: string, src: string) => {
    const getTagNameFromMimeType = (mimeType: string) => {
      const regexList = [
        {name: "audio", regex: new RegExp('audio/.*')},
        {name: "img", regex: new RegExp('image/.*')},
        {name: "video", regex: new RegExp('video/.*')},
      ]

      const results = regexList.map((re) => {
        const result = re.regex.exec(mimeType)
        if (result != null) {
          return re.name
        }
      }).filter((item): item is string => item != undefined)
      if (results.length == 0) {
        console.log("results length 0")
        return ""
      }
      console.dir(results)
      return results[0]
    }

    const tagName = getTagNameFromMimeType(mimeType)
    console.log(tagName)
    switch (tagName) {
      case "audio":
        return <audio controls src={src}/>
      case "img":
        return <img src={src} alt="preview"/>
      case "video":
        return <video controls src={src}/>
      default:
        Error("not support mime type: " + mimeType)
    }
  }

  return (
    <>
      {previewElement}
    </>
  )
}