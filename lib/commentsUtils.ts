import { ObjectId } from 'mongodb';
import db from './db';

const COLLECTION = 'comments';

const fId = (id: string) => {
	return { movie_id: new ObjectId(id) };
};

export const getAllCommentsFromMovieId = async (movieId: string) => {
	return await db.collection(COLLECTION).find(fId(movieId)).toArray();
};

export const addCommentToMovie = async (movieId: string, comments: Object) => {
	return await db.collection(COLLECTION).insertOne({
		movie_id: new ObjectId(movieId),
		...comments,
	});
};

export const getCommentById = async (movieId: string, commentId: string) => {
	return await db.collection(COLLECTION).findOne({
		movie_id: new ObjectId(movieId),
		_id: new ObjectId(commentId),
	});
};

export const updateCommentById = async (
	movieId: string,
	commentId: string,
	comment: Object
) => {
	return await db.collection(COLLECTION).updateOne(
		{
			movie_id: new ObjectId(movieId),
			_id: new ObjectId(commentId),
		},
		comment
	);
};

export const deleteCommentById = async (movieId: string, commentId: string) => {
	return await db.collection(COLLECTION).deleteOne({
		movie_id: new ObjectId(movieId),
		_id: new ObjectId(commentId),
	});
};
