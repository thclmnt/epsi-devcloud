import type { NextApiRequest, NextApiResponse } from 'next';
import { sendOk } from '../../../../lib/responseUtils';
import {
	addCommentToMovie,
	getAllCommentsFromMovieId,
} from '../../../../lib/commentsUtils';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { movieId } = req.query;
	if (!movieId) {
		return;
	}
	const id = movieId as string;

	switch (req.method) {
		case 'GET':
			const comments = await getAllCommentsFromMovieId(id);
			sendOk(res, comments);
			break;
		case 'POST':
			const data = req.body;
			const newComment = await addCommentToMovie(id, data);
			sendOk(res, newComment);
		default:
			break;
	}
}
