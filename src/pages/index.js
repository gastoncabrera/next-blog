import { Button, Card, CardContent, Container, Grid } from "semantic-ui-react";
import { useRouter } from "next/router";

export default function HomePage({ tasks }) {
  const router = useRouter();

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

  return (
    <Container style={{ padding: "20px" }}>
      <Card.Group itemsPerRow={4}>
        {tasks.map((item) => (
          <Card key={item._id}>
            <Card.Content>
              <Card.Header>{item.title}</Card.Header>
              <p>{item.description}</p>
            </Card.Content>
            <CardContent extra>
              <Button primary onClick={() => router.push(`/tasks/${item._id}`)}>
                View
              </Button>
              <Button primary onClick={() => router.push(`/tasks/${item._id}/edit`)}>
                Edit
              </Button>
            </CardContent>
          </Card>
        ))}
      </Card.Group>
    </Container>
  );
}

export const getServerSideProps = async (ctx) => {
  const res = await fetch("https://next-blog-neon-phi.vercel.app/");
  const tasks = await res.json();

  return {
    props: {
      tasks,
    },
  };
};
