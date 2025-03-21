import { Box, Flex, Button, Divider, Icon } from "@chakra-ui/react";
import { AiOutlineBell } from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function ProfileAdmin() {
	const nav = useNavigate();
	return (
		<Flex
			flexDir={"column"}
			w={"1168px"}
			// width={"auto"}
			height={"154px"}
			marginLeft={"24px"}
		>
			<Box
				bgColor={"white"}
				height={"40%"}
				display={"flex"}
				justifyContent={"end"}
				alignItems={"center"}
				gap={"12px"}
				padding={"0 16px"}
				fontWeight={"bold"}
			>
				<Icon as={AiOutlineBell} />
				<Flex gap={"4px"}>
					<Box fontWeight={"normal"} _hover={{ cursor: "pointer" }}>
						ID
					</Box>
					<Box>|</Box>
					<Box _hover={{ cursor: "pointer" }}>EN</Box>
				</Flex>
				<Flex
					alignItems={"center"}
					gap={"6px"}
					_hover={{ cursor: "pointer" }}
				>
					<Icon as={MdPersonOutline} />
					<Box>Indri Prihantoro</Box>
					<Icon as={FiChevronDown} />
				</Flex>
			</Box>
			<Divider />
			<Box
				height={"40%"}
				display={"flex"}
				justifyContent={"space-between"}
				alignItems={"center"}
				padding={"0 16px"}
				bgColor={"white"}
			>
				<Flex alignItems={"center"} fontSize={"18px"}>
					<Icon fontSize={"28px"} as={MdOutlineSpaceDashboard} />
					Dashboard
				</Flex>
				<Button
					height={"30px"}
					width={"120px"}
					colorScheme="green"
					onClick={() => nav("/addProduct")}
				>
					Add Product
				</Button>
			</Box>
			<Divider />
			<Flex
				height={"20%"}
				padding={"0 16px"}
				fontSize={"12px"}
				alignItems={"center"}
			>
				/admin
			</Flex>
		</Flex>
	);
}
