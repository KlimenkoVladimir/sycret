import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import { useFetching } from "../hooks/useFetching";
import SycretService from "../API/SycretService";
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
  CircularProgress,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { formatPhoneNumber } from "../utils";

const CertificateForm = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [sendData, setSendData] = useState(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setSendData({ ...data, PHONE: formatPhoneNumber(data.PHONE) });
  };

  const [fetch, isLoading, Error] = useFetching(async () => {
    const response = await SycretService.OSSale(selectedCertificate, sendData);
    if (response) {
      navigate("/payment");
      sessionStorage.clear();
    }
  });

  useEffect(() => {
    const selectedOptionString = sessionStorage.getItem("selectedOption");
    if (selectedOptionString) {
      const selectedOption = JSON.parse(selectedOptionString);
      setSelectedCertificate(selectedOption);
    }
  }, []);

  useEffect(() => {
    if (sendData) {
      fetch();
    }
  }, [sendData]);

  return Error ? (
    <h1>{Error}</h1>
  ) : (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Button
        variant="contained"
        sx={{ position: "absolute", top: 0, left: 0, margin: 2 }}
        startIcon={<ArrowBackIcon />}
        onClick={() => {
          navigate("/");
        }}
      ></Button>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Typography sx={{ mb: 2 }} variant="h5" align="center">
            {selectedCertificate?.NAME}
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="ФИО *"
                  error={!!errors.CLIENTNAME}
                  {...register("CLIENTNAME", { required: true })}
                />
              </Grid>
              <Grid item xs={12}>
                <InputMask
                  mask="+7 (999) 999-99-99"
                  maskChar=" "
                  placeholder="+7 (___) ___-__-__"
                  error={!!errors.PHONE}
                  {...register("PHONE", {
                    required: true,
                    validate: (value) =>
                      value.replace(/[+\s\(\)-]/g, "").length === 11,
                  })}
                >
                  {(inputProps) => (
                    <TextField fullWidth {...inputProps} variant="outlined" />
                  )}
                </InputMask>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Сообщение"
                  multiline
                  rows={4}
                  {...register("MSGTEXT")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Почта *"
                  error={!!errors.EMAIL}
                  {...register("EMAIL", { required: true })}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Оформить
                </Button>
              </Grid>
            </Grid>
          </form>
        </>
      )}
    </Container>
  );
};

export default CertificateForm;
