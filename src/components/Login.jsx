import {Anchor, Button, Card, Container, Group, Paper, PasswordInput, Text, TextInput} from '@mantine/core';
import { useForm } from '@mantine/form';
import {Link, useNavigate} from 'react-router-dom';
import {useAuthStore} from "../store/authStore.js";
import {login} from "../api/auth.js";
import {useState} from "react";

export const Login = () => {
      const navigate = useNavigate();
      const logIn = useAuthStore((state) => state.logIn);
      const [error, setError] = useState(null);

      const form = useForm({
            mode: 'uncontrolled',
            initialValues: {
                  username: '',
                  password: '',
            },

      });

      const handleSubmit = async (values) => {
            try {
                  const { token, username } = await login(values);
                  logIn(token, username);
                  navigate('/')
            } catch (e) {
                  setError('Неверное имя пользователя или пароль')
            }
      }

      return (
            <Container strategy={'grid'} size={400} style={{ marginTop: 120 }}>

                  <Card
                        shadow="sm"
                        padding="xl"
                  >
                        <form onSubmit={form.onSubmit(handleSubmit)}>
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

                        {error && (
                              <Text c="red">{error}</Text>
                        )}

                  </Card>
            </Container>
      );
}