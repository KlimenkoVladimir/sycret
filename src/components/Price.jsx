import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button, Box } from "@mui/material";
import { formatPrice, formatDiscount } from "../utils";

const Price = ({ selectedOption }) => {
  const navigate = useNavigate();
  function checkout() {
    sessionStorage.setItem("selectedOption", JSON.stringify(selectedOption));
    navigate("/form");
  }

  console.log(selectedOption);

  return selectedOption ? (
    <Box
      sx={{
        position: "absolute",
        bottom: 30,
        right: 60,
        textAlign: "left",
      }}
    >
      <Typography variant="h6">
        Цена: {formatPrice(selectedOption.PRICE)}
      </Typography>
      <Typography variant="h6">
        Скидка: {formatDiscount(selectedOption.DISCOUNT)}
      </Typography>
      <Typography variant="h6">
        Итого: {formatPrice(selectedOption.SUMMA)}
      </Typography>
      <Button
        sx={{ mt: 1 }}
        variant="contained"
        color="primary"
        onClick={checkout}
      >
        Оформить
      </Button>
    </Box>
  ) : null;
};

export default Price;
