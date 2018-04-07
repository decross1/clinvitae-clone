import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
  Grid,
  Header,
  Segment,
  List,
  Container
} from 'semantic-ui-react';

class Footer extends Component {
  render() {
    return (
      <Segment inverted color='grey' vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='About' />
                <List link inverted>
                  <List.Item as='a'>Sitemap</List.Item>
                  <List.Item as='a'>About</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Genetic Information' />
                <List link inverted>
                  <List.Item as='a'>Download Gene Archive</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as='h4' inverted>Find Out More Information</Header>
                <p>See more on our main website Invitae.com </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    )
  }
}

export default Footer;