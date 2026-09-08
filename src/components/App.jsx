import {Button, Container, Flex} from "@mantine/core";

import {useNavigate} from "react-router-dom";
import {useAuthStore} from "../store/authStore.js";
import {useEffect} from "react";
import {fetchChannels} from "../api/chat.js";

const App = () => {
      const navigate = useNavigate();

      const token = useAuthStore((state) => state.token);
      const logOut = useAuthStore((state) => state.logOut)



      useEffect(() => {
            const loadChannels = async () => {
                  try {
                        const response = await fetchChannels(token);
                        console.log(response);
                  } catch (error) {
                        console.log('error: ', error);
                  }
            }

            void loadChannels();
      }, [token]);

      return (
                  <Container strategy={'grid'} size={1600}>
                        <Flex
                              justify="space-between"
                              align="center"
                              direction="row"
                              wrap="wrap"
                        >
                              <h1>Hexlet Chat</h1>
                              <Button onClick={() => {
                                    logOut();
                                    navigate('/login')
                              }}>Выйти</Button>

                        </Flex>
                  </Container>
      )
}

export default App;
