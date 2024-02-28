import type { NextApiResponse } from 'next';

const status200 = { status: 200 };

export function sendOk(res: NextApiResponse, data?: any) {
	res.json(data ? { data: data, ...status200 } : status200);
}

export function sendNotOk(res: NextApiResponse) {
	res.status(500).send({});
}
