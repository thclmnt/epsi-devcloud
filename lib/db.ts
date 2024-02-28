import clientPromise from './mongodb';

const client = await clientPromise;
const db = client.db('sample_mflix');

export default db;
