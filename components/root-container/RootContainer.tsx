import React, {type PropsWithChildren} from "react";
import {Box} from "native-base";
import { RightJoinCircleLarge } from "../../theme/tester-icons";

interface Props extends PropsWithChildren {
  safeArea?: boolean;
}

const RootContainer: React.FC<Props> = ({safeArea, children}: Props) => {
  return (
    <Box
      safeArea={safeArea}
      bg="tester.400"
      flex="1"
      alignItems="center"
          px="2">
      {children}
    </Box>
  );
};

export default RootContainer;
