import {useEffect, useState} from "react";
import {Image} from "../../model/image";
import {fetchImages} from "../../driver/ImageDriver";
import {ImageElement} from "../image/ImageElement";
import styles from "./CreateSlide.module.scss"

export const CreateSlide = () => {
  const [images, setImages] = useState<Image[]>([])
  const [windowWidth, setWindowWidth] = useState(0)
  useEffect(() => {
    fetchImages().then((result) => {
      setImages(result)
    })
    setWindowWidth(window.innerWidth)
  }, [])
  const imageList = (images: Image[]) => {
    // TODO dynamic
    const width = windowWidth/3
    return images.map((image) => {
      return (
        <div className={styles['image-wrapper']} key={image.id}>
          <ImageElement id={image.id} width={width} height={300}/>
      </div>)
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles['create-space']}>
        <div>
          time:
        </div>
        <div>
          preview
        </div>
      </div>
      <div className={styles['image-preview']}>
        {imageList(images)}
      </div>

    </div>
  )

}