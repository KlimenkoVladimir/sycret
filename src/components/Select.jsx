import React, { useState, useEffect } from "react";
import SycretService from "../API/SycretService";
import { useFetching } from "../hooks/useFetching";
import { Autocomplete, TextField, CircularProgress, Box } from "@mui/material";

const Select = ({ selectedOption, setSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState([]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const [fetchOptions, isLoading, Error] = useFetching(async () => {
    const response = await SycretService.OSGetGoodList();
    if (response) {
      setOptions(response);
    }
  });

  useEffect(() => {
    fetchOptions();
  }, []);

  return Error ? (
    <h1>{Error}</h1>
  ) : (
    <Box
      sx={{
        mt: 6,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Autocomplete
          value={selectedOption}
          onChange={(event, newValue) => handleOptionSelect(newValue)}
          options={options}
          getOptionLabel={(option) => option.NAME}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Выберите сертификат"
              variant="outlined"
              fullWidth
            />
          )}
          sx={{ width: "80%" }}
        />
      )}
    </Box>
  );
};

export default Select;
