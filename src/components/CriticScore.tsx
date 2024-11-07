import { Badge, Box } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const badgeColorScheme = score > 75 ? "green" : score > 75 ? "yellow" : "red";

  return (
    <Badge
      fontSize="14px"
      colorScheme={badgeColorScheme}
      paddingX={2}
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
