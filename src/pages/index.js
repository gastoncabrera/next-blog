import { Button, Card, CardContent, Container, Grid, GridRow } from "semantic-ui-react";

export default function HomePage({ tasks }) {
  if (tasks.length === 0) {
    return (
      <Grid centered verticalAlign="middle" columns="1" styles={{ height: "80vh" }}>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <h1>There are no tasks yet</h1>
            <img
              src="https://img.freepik.com/vector-gratis/ningun-concepto-ilustracion-datos_108061-573.jpg?size=338&ext=jpg"
              alt="No tasks yet"
            />
            <div>
              <Button primary>Create a task</Button>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

  console.log(tasks.map((item) => item.title));
  return (
    <Container>
      <Card.Group itemsPerRow={4}>
        {tasks.map((item) => (
          <Card key={item._id}>
            <Card.Content>
              <Card.Header>{item.title}</Card.Header>
              <p>{item.description}</p>
            </Card.Content>
            <CardContent extra>
              <Button primary>View</Button>
              <Button sucess>Edit</Button>
            </CardContent>
          </Card>
        ))}
      </Card.Group>
    </Container>
  );
}

export const getServerSideProps = async (ctx) => {
  const res = await fetch("http://localhost:3000/api/tasks");
  const tasks = await res.json();

  return {
    props: {
      tasks,
    },
  };
};
