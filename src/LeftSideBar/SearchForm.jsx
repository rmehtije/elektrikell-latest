import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const from = event.target.from.value;
    const until = event.target.until.value;

    console.log(from, until);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>From</Form.Label>
        <Form.Control type="date" placeholder="Date from" name="from" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Until</Form.Label>
        <Form.Control type="date" placeholder="Date until" name="until" />
      </Form.Group>
      <Button variant="primary" className="w-100" type="submit">
        Search
      </Button>
    </Form>
  );
}

export default SearchForm;
