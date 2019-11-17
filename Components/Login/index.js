import React, { Component } from "react";

// NativeBase Components
import {
  Text,
  Button,
  Body,
  List,
  ListItem,
  Form,
  Label,
  Input,
  Item,
  Content,
  Header
} from "native-base";
import styles from "../HomePage/styles";

class Login extends Component {
  render() {
    return (
      <Content>
        <List>
          <ListItem style={styles.listStyle}>
            <Body>
              <Form>
                <Body>
                  <Label style={styles.label}>Username</Label>
                </Body>
                <Item
                  rounded
                  style={{
                    backgroundColor: "white",
                    marginTop: 10,
                    marginBottom: 10
                  }}
                >
                  <Input autoCorrect={false} autoCapitalize="none" />
                </Item>
                <Body>
                  <Label style={styles.label}>Password</Label>
                </Body>
                <Item
                  rounded
                  style={{
                    backgroundColor: "white",
                    marginTop: 10,
                    marginBottom: 10
                  }}
                >
                  <Input
                    autoCorrect={false}
                    secureTextEntry
                    autoCapitalize="none"
                  />
                </Item>
              </Form>
            </Body>
          </ListItem>
          <Button full success>
            <Text>Login</Text>
          </Button>
          <Button full warning>
            <Text>Register</Text>
          </Button>
        </List>
      </Content>
    );
  }
}

export default Login;
