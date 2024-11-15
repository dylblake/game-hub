import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
  onSelectSort: () => void;
}

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        px={4}
        py={2}
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="1px"
        _hover={{ bg: "gray.400" }}
        _expanded={{ bg: "blue.400" }}
        _focus={{ boxShadow: "outline" }}
        rightIcon={<FaChevronDown />}
      >
        Thing{" "}
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
