import { useState } from "react";
import { useRouter } from "next/router";
import TextInput from "@/components/TextInput";
import SelectOption from "@/components/SelectOption";
import PasswordInput from "@/components/PasswordInput";
import Button from "@/components/Button";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

import api from "@/services/api";

export default function Register() {
  const toast = useToast();
  const router = useRouter();
  //USE STATES

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState(-1);
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const optinsUserType = [
    { id: 1, name: "Administrador" },
    { id: 2, name: "Assistente" },
  ];

  function clearHandler() {
    setUser("");
    setNameFull("");
    setEmail("");
    setTypeUSer(-1);
    setPassword("");
    setConfirmPassword("");
  }

  function saveHandler() {
    setLoading(true);
    api
      .post("/user", {
        name,
        email,
        id_user_type: userType,
        password,
        ConfirmPassword,
        validateStatus: (status) => {
          return (status = 200);
        },
      })
      .then(() => {
        clearHandler();
        toast({
          title: "Usuário criado com sucesso",
          status: "success",
        });
        router.push("/login");
      })
      .catch((err) => {
        if (err.response?.data?.errors) {
          const responseErrors = err.response.data.errors;
          setErrors(responseErrors);
        }
        return toast({ title: "Erro ao criar Usuário", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Faça seu cadastro</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              ></Stack>
              <TextInput
                name_field={"Nome"}
                value={name}
                onChange={(event) => setName(event.target.value)}
                errors={errors}
                param="name"
              />
              <TextInput
                name_field={"Email"}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                errors={errors}
                param="email"
              />
              <SelectOption
                name_field={"Tipo de Usuário"}
                value={userType}
                onChange={(event) => setUserType(event)}
                options={optinsUserType}
                errors={errors}
                param={"id_user_type"}
              />
              <PasswordInput
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                name_field={"Senha"}
                errors={errors}
                param="password"
              />
              <PasswordInput
                onChange={(event) => setConfirmPassword(event.target.value)}
                value={ConfirmPassword}
                name_field={"Confirmar Senha"}
                errors={errors}
                param="confirmPassword"
              />
              <Button width={"300px"} isLoading={loading} onClick={saveHandler}>
                Finalizar Cadastro
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
