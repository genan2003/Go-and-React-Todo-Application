import { Box, Flex, Button, useColorModeValue, useColorMode, Text, Container } from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

export default function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Container maxW={"900px"}>
			<Box bg={useColorModeValue("gray.400", "gray.700")} px={4} my={4} borderRadius={"5"}>
				<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
					{/* LEFT SIDE */}
					<Flex
						justifyContent={"center"}
						alignItems={"center"}
						gap={3}
						display={{ base: "none", sm: "flex" }}
					>
                        {/* Here you can put the title of the app like images, text, etc. */}
                        <h3>Go and React Todo Application</h3>
					</Flex>

					{/* RIGHT SIDE */}
					<Flex alignItems={"center"} gap={3}>
						<Text fontSize={"lg"} fontWeight={500}>
							Daily Tasks
						</Text>
						{/* Toggle Color Mode */}
						<Button onClick={toggleColorMode}>
							{colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
						</Button>
					</Flex>
				</Flex>
			</Box>
		</Container>
	);
}