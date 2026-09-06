import {Anchor, Button, Card, Container, Group, PasswordInput, Text, TextInput} from "@mantine/core";
import {useForm} from "@mantine/form";

export const Registration = () => {
      const form = useForm({
            mode: 'uncontrolled',
            initialValues: {
                  username: '',
                  password: '',
                  password_confirm: '',
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
                                    label="Имя пользователя"
                                    key={form.key('username')}
                                    {...form.getInputProps('username')}
                              />

                              <PasswordInput
                                    label="Пароль"
                                    withAsterisk
                                    key={form.key('password')}
                                    {...form.getInputProps('password')}
                              />
                              <PasswordInput
                                    label="Подтвердите пароль"
                                    withAsterisk
                                    key={form.key('password_confirm')}
                                    {...form.getInputProps('password_confirm')}
                              />

                              <Group justify="flex-end" mt="md">
                                    <Button type="submit">Зарегистрироваться</Button>
                              </Group>
                        </form>

                  </Card>
            </Container>
      )
}