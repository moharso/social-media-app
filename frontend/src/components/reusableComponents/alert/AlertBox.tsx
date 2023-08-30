import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

const AlertBox = ({alertText}: any) => {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      {alertText} — <strong>check it out!</strong>
    </Alert>
  );
};

export default AlertBox;
