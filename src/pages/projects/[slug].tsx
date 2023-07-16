import React from 'react';
import Head from 'next/head';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import type { Project, ResponseError } from '@/data/projects';
import Header from '@/components/Header';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }

  return data;
};

export default function ProjectPage() {
  const { query } = useRouter();
  const { data, error, isLoading, isValidating } = useSWR<
    Project,
    ResponseError
  >(() => (query.slug ? `/api/projects/${query.slug}` : null), fetcher);

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No Data</div>;

  return (
    <>
      <Head>
        <title>Gregory N.J. Monroe</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <main>
        <Header />

        <div>{isValidating ? 'validating' : data.slug}</div>
      </main>
    </>
  );
}
