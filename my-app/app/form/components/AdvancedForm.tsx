import { Colors } from "@/app/constants/colors";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { AdvancedFormType, zAdvancedForm } from "../utils/zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function AdvancedForm() {
  const { control, handleSubmit, formState } = useForm<AdvancedFormType>({
    mode: "all",
    reValidateMode: "onChange",

    resolver: zodResolver(zAdvancedForm),
  });

  const handleForm = (data: AdvancedFormType) => {
    console.log(data);
  };
  return (
    <Box
      sx={{ background: Colors.light, boxShadow: 3 }}
      display={"flex"}
      flexDirection={"column"}
      width={700}
      height={"100%"}
      borderRadius={3}
      marginTop="2rem"
      padding={"1rem"}
    >
      <Typography variant="h3" color={Colors.primary}>
        Ad Form
      </Typography>
      <Box
        gap={"1rem"}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
      >
        <form onSubmit={handleSubmit(handleForm)}>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="password"
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
            name="confirm_password"
            defaultValue=""
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Confirm password"
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
            name="quantidade"
            control={control}
            defaultValue={0}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Quantidade"
                variant="outlined"
                type="number"
                fullWidth
                error={!!error}
                helperText={error?.message}
                margin="normal"
              />
            )}
          />

          <Controller
            name="url"
            control={control}
            defaultValue=""
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="url"
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
            name="permissao"
            defaultValue="admin"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Permissao"
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
            name="select"
            defaultValue=""
            control={control}
            render={({ field, fieldState: { error } }) => (
              <FormControl fullWidth margin="normal" error={!!error}>
                <InputLabel>Selecione</InputLabel>
                <Select {...field} label="Permissão">
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="usuario">Usuário</MenuItem>
                  <MenuItem value="gestor">Gestor</MenuItem>
                  <MenuItem value="rh">RH</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <Controller
            name="agree"
            defaultValue={false}
            control={control}
            render={({ field, fieldState: { error } }) => (
              <FormControl fullWidth margin="normal" error={!!error}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                  }
                  label="Concordo com os termos"
                />
                <FormHelperText>{error?.message}</FormHelperText>
              </FormControl>
            )}
          />
          <Button type="submit">Enviar </Button>
        </form>
      </Box>
    </Box>
  );
}
