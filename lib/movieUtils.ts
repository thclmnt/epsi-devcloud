import { ObjectId } from 'mongodb';
import db from './db';

const COLLECTION = 'movies';

const fId = (id: string) => {
	return { _id: new ObjectId(id) };
};

export const getAllMovies = async (limit = 10) => {
	const movies = await db
		.collection(COLLECTION)
		.find({})
		.limit(limit)
		.toArray();
	return movies;
};

export const createMovie = async (movie: Object) => {
	return await db.collection(COLLECTION).insertOne(movie);
};

export const getMovieById = async (id: string) => {
	return await db.collection(COLLECTION).findOne(fId(id));
};

export const updateMovieById = async (id: string, movie: Object) => {
	return await db.collection(COLLECTION).updateOne(fId(id), movie);
};

export const deleteMovieById = async (id: string) => {
	return await db.collection(COLLECTION).deleteOne(fId(id));
};
