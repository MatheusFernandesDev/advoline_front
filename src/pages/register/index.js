import TextInput from "@/components/TextInput";
import SelectOption from "@/components/SelectOption";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Register() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState(-1);

  const optinsUserType = [
    { id: 1, name: "Administrador" },
    { id: 2, name: "Assistente" },
  ];

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
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Finalizar Cadastro
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
