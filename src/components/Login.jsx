import {Anchor, Button, Card, Container, Group, PasswordInput, Text, TextInput} from '@mantine/core';
import { useForm } from '@mantine/form';
import { Link } from 'react-router-dom';

export const Login = () => {
      const form = useForm({
            mode: 'uncontrolled',
            initialValues: {
                  username: '',
                  password: '',
            },

      });

      return (
            <Container strategy={'grid'} size={400} style={{ marginTop: 120 }}>

                  <Card
                        shadow="sm"
                        padding="xl"
                  >
                        <form onSubmit={form.onSubmit((values) => console.log(values))}>
                              <TextInput
                                    withAsterisk
                                    label="Ваш ник"
                                    key={form.key('username')}
                                    {...form.getInputProps('username')}
                              />

                              <PasswordInput
                                    label="Пароль"
                                    withAsterisk
                                    key={form.key('password')}
                                    {...form.getInputProps('password')}
                              />

                              <Group justify="flex-end" mt="md">
                                    <Button type="submit">Войти</Button>
                              </Group>
                        </form>

                        <Text fw={500} size="lg" mt="md">
                              Нет аккаунта?{' '}
                              <Anchor component={Link} to="/registration">
                                    Регистрация
                              </Anchor>
                        </Text>

                  </Card>
            </Container>
      );
}