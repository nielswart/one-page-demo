import { Flex } from "@theme-ui/components"
import React from "react"
import Forms from "./forms"

const ShippingAndInfo = ({ country, region, nextStep }) => {
  return (
    <Flex
      sx={{
        width: "100%",
        flexDirection: "column",
      }}
    >
      <Forms region={region} country={country} nextStep={nextStep} />
    </Flex>
  )
}

export default ShippingAndInfo
