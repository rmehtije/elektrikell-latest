import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { convertToInputFormat, convertToRequestFormat } from "../utils/dates";

function SearchForm({ handleClose, from, until, setFrom, setUntil }) {

  const handleSubmit = (event) => {
    event.preventDefault();

    const from = event.target.from.value;
    const until = event.target.until.value;

    setFrom(convertToRequestFormat(from));
    setUntil(convertToRequestFormat(until));

    handleClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>From</Form.Label>
        <Form.Control
          type="datetime-local"
          placeholder="Date from"
          name="from"
          defaultValue={convertToInputFormat(from)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Until</Form.Label>
        <Form.Control
          type="datetime-local"
          placeholder="Date until"
          name="until"
          defaultValue={convertToInputFormat(until)}
        />
      </Form.Group>
      <Button variant="primary" className="w-100" type="submit">
        Search
      </Button>
    </Form>
  );
}

export default SearchForm;
