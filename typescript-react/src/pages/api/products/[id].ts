import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { id } = req.query;

	try {
		const response = await fetch(`https://learn.codeit.kr/api/codeitmall/products/${id}`);
		const data = await response.json();

		res.status(200).json(data);
	} catch (err) {
		res.status(404).json({ message: 'Product Not Found.' });
	}
}

export default handler;
