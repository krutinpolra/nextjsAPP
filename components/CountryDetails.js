import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

const CountryDetails = ({ country }) => {
  const {
    name,
    nativeName,
    a2code,
    a3code,
    capital,
    languages, // This will be a string
    population,
    area,
    latlng,
    tld,
    currencies,
    continents,
    region,
    subregion,
    googleMaps,
    coatOfArms,
  } = country;

  return (
    <Container>
      <Row>
        <Col lg>
          <Image
            onError={(event) => {
              event.target.onerror = null; // Prevent infinite loop on error
              event.target.src = "https://placehold.co/600x400?text=Photo+Not+Available";
            }}
            className="img-fluid w-100"
            src={coatOfArms}
            alt={`Coat of Arms of ${name}`}
            width={600} // Set specific width
            height={400} // Set specific height
          />
          <br />
          <br />
        </Col>
        <Col lg>
          <h2>{name}</h2>
          <br />
          <p><b>Native Name:</b> {nativeName}</p>
          <p><b>𝛼2/𝛼3 Code:</b> {a2code}/{a3code}</p>
          <p><b>Capital:</b> {capital}</p>
          
          {/* Inline mapping for languages */}
          <p><b>Languages:</b></p>
          <ul>
            {languages ? languages.split(',').map((language, index) => (
              <li key={index}>{language.trim()}</li> // Trim whitespace and use index as key
            )) : <li>No languages available</li>}
          </ul>
  
          <p><b>Population:</b> {population.toLocaleString()}</p>
          <p><b>Area:</b> {area.toLocaleString()} Km<sup>2</sup> ({(area * 0.386102).toFixed(0).toLocaleString()} sq mi)</p>
          <p><b>Latitude/Longitude:</b> ({latlng[0]},{latlng[1]})</p>
          <p><b>Top-Level Domain:</b></p>
          <ul>
            <li>{tld.join(', ')}</li>
          </ul>
          <p><b>Currencies:</b></p>
          <ul>
            {currencies.map((currency) => (
              <li key={currency.name}>{currency.name} ({currency.symbol})</li>
            ))}
          </ul>
          <p><b>Continents:</b> {continents}</p>
          <p><b>Region/Subregion:</b> {region}/{subregion}</p>
          <p><b>Map on Google:</b> <a href={googleMaps} target="_blank" rel="noopener noreferrer">{googleMaps}</a></p>
          <br />
        </Col>
      </Row>
    </Container>
  );
};

export default CountryDetails;
