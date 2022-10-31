import { Grid, Label,Header } from "semantic-ui-react";


function Contact() {
  return (
    <>
      <Grid textAlign="center">
      <Header as='h1'>
        <Label as="a" image>
          <img src="https://cdn-icons-png.flaticon.com/512/16/16363.png" />
          By Samuel Saravia
        </Label>
      </Header>
      </Grid>
    </>
  );
}

export default Contact;
