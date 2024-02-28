'use client';

import useSWR from 'swr';
import { fetcher } from '../lib/fetcher';
import { useSearchParams, redirect } from 'next/navigation';

export default function () {
	const { data, error, isLoading } = useSWR(`/api/movies`, fetcher);
	const searchParams = useSearchParams();

	const page = searchParams?.get('page')
		? Number(searchParams.get('page'))
		: 1;

	if (error) return <div>failed to load</div>;
	if (isLoading) return <div>loading...</div>;

	return (
		<>
			<h1>Movies</h1>
			<div>
				{data.map((movie: any) => (
					<p>{movie.title}</p>
				))}
			</div>
		</>
	);
}
