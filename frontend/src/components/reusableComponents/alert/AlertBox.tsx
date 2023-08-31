import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

type AlertBoxProps = {
  alertText: string;
};
const AlertBox = ({alertText}: AlertBoxProps) => {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      {alertText} — <strong>check it out!</strong>
    </Alert>
  );
};

export default AlertBox;
