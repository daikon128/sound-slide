import React from "react";

export const ImageElement = (props: {id: number, srcQuery?: string, srcSetQuery?: string}) => {
  const imagePath = `/api/image/${props.id}`
  const src = `${imagePath}?${props.srcQuery}`
  const setSrc = `${imagePath}?${props.srcSetQuery}`
  return (
    <div>
      <img src={src} srcSet={setSrc} alt="sample"/>
    </div>
  )
}
