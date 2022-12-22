import {ImageElement} from "../../components/image/ImageElement";
import ImageListItem from "@mui/material/ImageListItem";
import ImageList from "@mui/material/ImageList";
import {useEffect, useState} from "react";
import {Image} from "../../model/image";
import {fetchImages} from "../../driver/ImageDriver";

export default function ImagePage() {
  const [images, setImages] = useState<Image[]>([])
  useEffect(() => {
    fetchImages().then((result) => {
      setImages(result)
    })
  }, [])

  const slideImageGridList = (images: Image[]) => {
    const srcQuery = "w=248&&fit=crop&auto=format"
    const srcSetQuery = "w=248&fit=crop&auto=format&dpr=2 2x"
    return images.map((image) => {
      return (<ImageListItem key={image.id}>
        <ImageElement id={image.id} srcQuery={srcQuery} srcSetQuery={srcSetQuery}/>
      </ImageListItem>)
    })
  }

  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {slideImageGridList(images)}
    </ImageList>
  )
}