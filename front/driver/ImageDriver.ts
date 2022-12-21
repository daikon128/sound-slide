import axios from "axios";
import {Image} from "../model/image";

const imageApiBaseUrl = "/api/image"

type ImageResponse = {
  id: number
}

const fetchImages = async (): Promise<Image[]> => {
  const result = await axios.get<ImageResponse[]>(`${imageApiBaseUrl}/`)

  console.log(result)
  return result.data.map((image) => {
    return {
      id: image.id
    }
  })
}

export {
  fetchImages
}