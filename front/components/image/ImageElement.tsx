import React from "react";

export const ImageElement = (props: {id: number, srcQuery?: string, srcSetQuery?: string, width?: number, height?: number}) => {
  const imagePath = `/api/image/${props.id}`
  const src = `${imagePath}?${props.srcQuery}`
  const setSrc = `${imagePath}?${props.srcSetQuery}`
  return (
      <img src={src} style={{objectFit: "scale-down"}} width={props.width} height={props.height} srcSet={setSrc} alt="sample"/>
  )
}
