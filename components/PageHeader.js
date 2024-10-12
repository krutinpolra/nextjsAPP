import { Card } from 'react-bootstrap';

const PageHeader = ({ Prop }) => {
  return (
    <>
      <Card className="bg-light">
        <Card.Body>
          {Prop}
        </Card.Body>
      </Card>
      <br />
    </>
  );
};

export default PageHeader;
