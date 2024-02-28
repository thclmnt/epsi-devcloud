import type { NextApiRequest, NextApiResponse } from 'next';
import {
	deleteCommentById,
	getCommentById,
	updateCommentById,
} from '../../../../../lib/commentsUtils';
import { sendOk } from '../../../../../lib/responseUtils';

export default async function (req: NextApiRequest, res: NextApiResponse) {
	const { movieId, id } = req.query;
	if (!movieId) {
		return;
	}
	const mId = movieId as string;
	const cId = id as string;

	switch (req.method) {
		case 'GET':
			const comment = await getCommentById(mId, cId);
			sendOk(res, comment);
			break;
		case 'PUT':
		case 'PATCH':
			const data = req.body;
			const newComment = await updateCommentById(mId, cId, data);
			sendOk(res, newComment);
			break;
		case 'DELETE':
			await deleteCommentById(mId, cId);
			sendOk(res);
		default:
			break;
	}
}
