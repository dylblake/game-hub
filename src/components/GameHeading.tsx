import { Heading } from "@chakra-ui/react";
import React from "react";
import { Genre } from "../hooks/useGenres";

interface Props {
  genre: Genre | null;
}

const GameHeading = ({ genre }: Props) => {
  return (
    <Heading padding={3}>{genre?.id ? genre.name + " " : ""} Games</Heading>
  );
};

export default GameHeading;
