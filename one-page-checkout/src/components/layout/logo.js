import { Box, Image } from "@theme-ui/components";
import React from "react";
import logo from "../../icons/harvester.svg";

const Logo = () => {
  return (
    <Box>
      <Image
        src={logo}
        sx={{
          height: "42px",
          width: "auto",
        }}
      /><b>Partfinder</b>
    </Box>
  );
};

export default Logo;
