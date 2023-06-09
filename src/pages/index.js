import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={`url(/images/justica.jpg)`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            O Sistema de Gestão para Advogados Destinada a facilitar o
            Gerenciamento e Organização das atividades e Informações de
            escritórios de Advocacia.
          </Text>
          <Stack direction={"row"}>
            <Link href={"/login"}>
              <Button
                bg={"blue.400"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "#778899" }}
              >
                Fazer Login
              </Button>
            </Link>
            <Link href={"/register"}>
              <Button
                bg={"whiteAlpha.300"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "whiteAlpha.500" }}
              >
                Cadastrar Usuário
              </Button>
            </Link>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
