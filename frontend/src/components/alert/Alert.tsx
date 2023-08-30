import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Alerting = ({text, severity, reason}: any) => {
  return (
    <Alert variant="filled" severity={severity}>
      {text}— Check it out!
    </Alert>
  );
};

export default Alerting;
