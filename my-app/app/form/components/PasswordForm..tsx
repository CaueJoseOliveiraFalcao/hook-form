"use client";
import { Box, Typography, Button, TextField } from "@mui/material";
import { Colors } from "@/app/constants/colors";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { zUserFormPassword } from "../utils/zod";
type FormData = {
  email: string;
  password: string;
  confirm_password: string;
};
export default function PasswordForm() {
  const { handleSubmit, control, formState, reset } = useForm<FormData>({
    mode: "onBlur",
    resolver: zodResolver(zUserFormPassword),
  });

  const { errors, isSubmitting } = formState;
  console.log(errors);

  const handleSubmitData = (data: FormData) => {
    console.log(data);

    reset();
  };
  return (
    <Box
      sx={{ background: Colors.light, boxShadow: 3 }}
      display={"flex"}
      flexDirection={"column"}
      width={700}
      height={500}
      borderRadius={3}
      marginTop="2rem"
      padding={"1rem"}
    >
      <Typography variant="h3" color={Colors.primary}>
        Formulario
      </Typography>
      <Box
        gap={"1rem"}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
      >
        <form onSubmit={handleSubmit(handleSubmitData)}>
          <Controller
            control={control}
            name="email"
            defaultValue=""
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                fullWidth
                autoFocus
                error={!!error}
                helperText={error?.message}
                margin="normal"
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            defaultValue=""
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Password"
                variant="outlined"
                fullWidth
                error={!!error}
                helperText={error?.message}
                margin="normal"
              />
            )}
          />
          <Controller
            control={control}
            name="confirm_password"
            defaultValue=""
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Confirm_password"
                variant="outlined"
                error={!!error}
                helperText={error?.message}
                fullWidth
                margin="normal"
              />
            )}
          />
          <Button
            type="submit"
            variant="text"
            disabled={isSubmitting}
            color="success"
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </Box>
    </Box>
  );
}
