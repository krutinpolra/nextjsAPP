import Link from 'next/link';
import { Card } from 'react-bootstrap';
import CountryDetails from '@/components/CountryDetails';
import PageHeader from '@/components/PageHeader';


const COUNTRY_ID = '66df61f58cd6f655e67f97f8'; 

export async function getStaticProps() {
  const response = await fetch(`https://countries-api-pied-pi.vercel.app/api/countries/${COUNTRY_ID}`);
  const data = await response.json();

  return {
    props: {
      country: data,
    },
  };
}

const About = ({ country }) => {
  return (
    <>
      <PageHeader text="About the Developer" />
      <Card className="mb-4">
        <Card.Body>
          <p><strong>About The Developer: </strong> Krutin Bharatbhai Polra</p>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <p>
             My name is Krutin Polra, and I am a passionate web developer currently pursuing a degree in Computer Programming and Analysis. 
             With a strong foundation in various programming languages, frameworks, and technologies, I thrive on creating dynamic and user-friendly web applications. 
             I am particularly interested in building solutions that not only enhance user experiences but also contribute positively to society.
          </p>
          <p>
             In addition to my technical skills, I value teamwork and collaboration. 
             I enjoy working in diverse environments where I can learn from others while also sharing my knowledge. 
             Whether it’s through coding, design, or problem-solving, I am always eager to take on new challenges that push my limits and foster my growth as a developer.
          </p>
          <p>
            Outside of coding, I love exploring innovative ideas and staying updated with industry trends. 
            I believe that continuous learning is key to success in the ever-evolving tech landscape.
          </p>
          <p>
            <Link href={`/country/${country._id}`} passHref legacyBehavior>{country.name}</Link> is a diverse and culturally rich country in South Asia, 
            known for its breathtaking landscapes, historical landmarks, and vibrant traditions. With a population exceeding 1.4 billion, 
            it is the world&apos;s second-most populous nation, showcasing a mosaic of languages, religions, and ethnicities. From the majestic peaks of the Himalayas 
            to the serene beaches of its southern coast, India offers a unique blend of ancient heritage and modern advancements, 
            making it a fascinating destination for travelers and a significant player on the global stage.!
          </p>
        </Card.Body>
        <CountryDetails country={country} />
      </Card>
    </>
  );
};

export default About;
