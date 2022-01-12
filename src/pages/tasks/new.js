import { Form, Grid, Button } from "semantic-ui-react";

export default function TaskFormPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <Grid centered verticalAlign="middle" columns="3" styles={{ height: "80vh" }}>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <h1>Create Task</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Input label="Title" placeholder="Title" />
            <Form.TextArea label="Description" placeholder="Description" />
            <Button primary>Save</Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
