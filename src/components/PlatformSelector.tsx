import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { FaChevronDown } from "react-icons/fa";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ gameQuery, onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
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
        {gameQuery.platform ? gameQuery.platform?.name : "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
