import { Box, Typography } from "@mui/material";
import { FormEventHandler, MouseEventHandler } from "react";
type ComponentProps = {
    onChange : FormEventHandler;
    onSubmit? : (data : Array<string>) => void
    onClick? : MouseEventHandler
};
const Component = ({onClick }: ComponentProps) => {
  return (
    <>
      <button onClick={onClick}></button>
    </>
  );
};
export default function Type() {
  return (
    <Box>
      <Typography variant="h2" color="initial">
        Heloo minion
      </Typography>
      <Component  />
    </Box>
  );
}
