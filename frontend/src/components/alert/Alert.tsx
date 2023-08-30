import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Alerting = ({text, severity, reason}: any) => {
  return (
    <Alert severity={severity}>
      <AlertTitle>{reason}</AlertTitle>
      This is {text} alert<strong>check it out!</strong>
    </Alert>
  );
};

export default Alerting;
