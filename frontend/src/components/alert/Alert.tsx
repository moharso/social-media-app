import Alert from "@mui/material/Alert";

type AlertingProps = {
  text: string;
  severity: any;
};

const Alerting = ({text, severity}: AlertingProps) => {
  return (
    <Alert variant="filled" severity={severity}>
      {text}— Check it out!
    </Alert>
  );
};

export default Alerting;
