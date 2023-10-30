import React, { useState } from "react";
import Select from "../components/Select";
import Price from "../components/Price";
import { Container } from "@mui/material";

const CertificateSelection = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Container sx={{ maxHeight: "100vh" }}>
      <Select
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      ></Select>
      <Price selectedOption={selectedOption}></Price>
    </Container>
  );
};

export default CertificateSelection;
