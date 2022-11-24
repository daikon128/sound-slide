import {NextApiRequest, NextApiResponse} from "next";

export default function audioHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    body,
    method
  } = req

  switch (method) {
    case 'POST':
      res.status(200).json({...body, message: "it is posted body"})
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`method ${method} not allowed`)
  }
}
