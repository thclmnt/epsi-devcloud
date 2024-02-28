import type { NextApiRequest, NextApiResponse } from 'next';
import {
	deleteCommentById,
	getCommentById,
	updateCommentById,
} from '../../../../../lib/commentsUtils';
import { sendOk } from '../../../../../lib/responseUtils';

/**
 * @swagger
 * /api/movie/{movieId}/comment/{id}:
 *   get:
 *     tags:
 *      - Comments
 *     description: Returns a comment by id
 *     responses:
 *       200:
 *         description: Comment returned successfully
 *     parameters:
 *       - in: path
 *         name: movieId
 *         required: true
 *         description: The id of the movie
 *         schema:
 *           type: string
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the comment
 *         schema:
 *           type: string
 *   put:
 *     tags:
 *      - Comments
 *     description: Update a comment by id
 *     responses:
 *       200:
 *         description: Comment updated successfully
 *     parameters:
 *       - in: path
 *         name: movieId
 *         required: true
 *         description: The id of the movie
 *         schema:
 *           type: string
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the comment
 *         schema:
 *           type: string
 *   delete:
 *     tags:
 *      - Comments
 *     description: Delete a comment by id
 *     responses:
 *       200:
 *         description: Comment deleted successfully
 *     parameters:
 *       - in: path
 *         name: movieId
 *         required: true
 *         description: The id of the movie
 *         schema:
 *           type: string
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the comment
 *         schema:
 *           type: string
 */
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
