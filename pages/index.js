import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Accordion, Pagination, Container, Row, Col } from 'react-bootstrap';
import CountryDetails from '@/components/CountryDetails';
import PageHeader from '@/components/PageHeader';
import Image from 'next/image';
import { Card } from 'react-bootstrap';

const Home = () => {
  // State values for page and pageData
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  // Fetch data using SWR
  const { data, error } = useSWR(`https://countries-api-pied-pi.vercel.app/api/countries?page=${page}&perPage=10`);

  // Update pageData when data changes
  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  // Define previous and next functions
  const previous = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const next = () => {
    setPage(page + 1);
  };

  // Handle loading and error states
  if (error) return <div>Failed to load countries.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Container>
      {/* Page Header */}
      <PageHeader text="Browse Countries: Sorted by Country Name" />
      <Card className="mb-4">
        <Card.Body>
          <p><strong>Browse Countries: Sorted by Country Name</strong></p>
        </Card.Body>
      </Card>
      {/* Accordion for country details */}
      <Accordion defaultActiveKey="0">
        {pageData.map((country) => (
          <Accordion.Item eventKey={country._id} key={country._id}>
            <Accordion.Header>
              <Image
                src={country.flag}
                alt={`Flag of ${country.name}`}
                width={30}
                height={20}
                style={{ marginRight: '10px' }} // Add margin for flag
              />
              <strong style={{ marginRight: '10px' }}>{country.name}</strong> {/* Add margin for name */}
              <span style={{ marginRight: '10px' }}>{country.nativeName}</span> {/* Add margin for native name */}
              <span>{country.continents}</span> {/* No margin needed here or adjust if necessary */}
            </Accordion.Header>

            <Accordion.Body>
              <CountryDetails country={country} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      {/* Pagination controls */}
      <Row className="justify-content-center mt-4">
        <Col md="auto">
          <Pagination>
            <Pagination.Prev onClick={previous} disabled={page === 1} />
            <Pagination.Item>{page}</Pagination.Item>
            <Pagination.Next onClick={next} />
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
