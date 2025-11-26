"use client";

import { Box } from "@mui/material";
import PasswordForm from "./components/PasswordForm.";
import AdvancedForm from "./components/AdvancedForm";

export default function Forms() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <PasswordForm />
      <AdvancedForm />
    </Box>
  );
}
