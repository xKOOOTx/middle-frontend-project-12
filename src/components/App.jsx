import {Button, Container, Flex} from "@mantine/core";

import {useNavigate} from "react-router-dom";

const App = () => {
      const navigate = useNavigate();

      return (
                  <Container strategy={'grid'} size={1600}>
                        <Flex
                              justify="space-between"
                              align="center"
                              direction="row"
                              wrap="wrap"
                        >
                              <h1>Hexlet Chat</h1>
                              <Button onClick={() => {navigate('/login')}}>Войти</Button>
                        </Flex>
                  </Container>
      )
}

export default App;
