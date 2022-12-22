import {useState} from "react";

export const Preview = (props: { file: File | null }) => {
   const emptyPreview = (
      <label>ここにプレビューが表示されます</label>
  )
  const [previewElement, setPreviewElement] = useState(emptyPreview)

  if (props.file == null) { return emptyPreview }
  const reader = new FileReader()
  if (reader == null) { return emptyPreview }

  reader.onload = (event) => {
    const fileResult = event?.target?.result
    const mimeType = props.file?.type
    console.log(mimeType)
    if (mimeType == null || fileResult == null || typeof fileResult != 'string') {
      console.log(typeof fileResult)
      return
    }
    const previewElement = getElementFromMimeType(mimeType,fileResult)
    if (previewElement == null) {
      console.log("previewElement is null")
      return
    }
    console.log(previewElement)
    setPreviewElement(previewElement)
  }
  reader.readAsDataURL(props.file);

  const getElementFromMimeType = (mimeType: string, src: string) =>  {
    const getTagNameFromMimeType = (mimeType: string) => {
      const regexList = [
        {name: "audio", regex: new RegExp('audio/.*')},
        {name: "img", regex: new RegExp('image/.*')}
      ]

      const results = regexList.map((re) => {
        const result = re.regex.exec(mimeType)
        if ( result != null) {
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
    switch(tagName) {
      case "audio":
        return <audio controls src={src}/>
      case "img":
        return <img src={src}/>
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