import React from "react";

export const SlideImage = (props: {id: number}) => {
  const imagePath = `/api/image/${props.id}`
  return (
    <div>
      <img src={imagePath} alt="sample"/>
    </div>
  )
}
