import {NextApiRequest, NextApiResponse} from "next";
import axios from "axios";

export default function audioHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    body,
    method
  } = req

  switch (method) {
    case 'POST':
      axios.post("http://localhost:3001/audio", body, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        res.status(200).json({message: response.data})
      })
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`method ${method} not allowed`)
  }
}
