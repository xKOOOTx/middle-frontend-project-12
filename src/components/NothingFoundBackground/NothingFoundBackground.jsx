import {Anchor, Container, Text, Title} from '@mantine/core';
import { Illustration } from './Illustration';
import classes from './NothingFoundBackground.module.css';
import {Link} from "react-router-dom"

export const NothingFoundBackground = () => {

      return (
            <Container className={classes.root}>
                  <div className={classes.inner}>
                        <Illustration className={classes.image} />
                        <div className={classes.content}>
                              <Title className={classes.title}>Страница не найдена</Title>
                              <Text c="dimmed" size="lg" ta="center" className={classes.description}>
                                    Но вы можете перейти на <Anchor component={Link} to="/">главную</Anchor>
                              </Text>
                        </div>
                  </div>
            </Container>
      );
};