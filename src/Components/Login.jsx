import { Box, Button, Input, Heading, Stack } from "@chakra-ui/react";
import { useState } from "react";

const Login = ({ onLogin }) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (user === "welber.antonio@wcr" && pass === "123") {
      onLogin(true);
    } else {
      alert("Login inválido");
    }
  };

  return (
    <Box maxW="sm" mx="auto" mt="20">
      <Heading mb={6}>Login</Heading>

      <Stack spacing={4}>
        <Input placeholder="Usuário" onChange={(e) => setUser(e.target.value)} />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPass(e.target.value)}
        />
        <Button colorScheme="blue" onClick={handleLogin}>
          Entrar
        </Button>
      </Stack>
    </Box>
  );
};

export default Login;
