// pages/countries/[id].js

import { useRouter } from 'next/router';
import useSWR from 'swr';
import CountryDetails from '@/components/CountryDetails';
import Error from 'next/error'; 
import PageHeader from '@/components/PageHeader';

// Fetcher function to get data
const fetcher = (url) => fetch(url).then((res) => res.json());

const Country = () => {
  const router = useRouter();
  const { id } = router.query; // Get the id parameter from the URL

  // Use SWR to fetch country data based on the id
  const { data, error } = useSWR(id ? `https://countries-api-pied-pi.vercel.app/api/countries/${id}` : null, fetcher);

  // Handle loading state
  if (!data) return null; // Optionally, you can show a loading spinner here

  // Handle errors or invalid data
  if (error || !data) {
    return <Error statusCode={404} />;
  }

  // Render the page with the country details
  return (
    <>
      <PageHeader text={data.name} />
      <CountryDetails country={data} />
    </>
  );
};

export default Country;
