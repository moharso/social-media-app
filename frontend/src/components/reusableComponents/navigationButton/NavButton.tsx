import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

interface NavButtonProps {
  buttonText?: string;
  onClick?: () => any;
  variant: "text" | "outlined" | "contained" | undefined;
  type?: "submit" | "button";
}

const NavButton = ({buttonText, onClick, variant, type}: NavButtonProps) => {
  return (
    <div>
      <Stack spacing={2} direction="row" padding={5}>
        <Button variant={variant} onClick={onClick} type={type}>
          {buttonText}
        </Button>
      </Stack>
    </div>
  );
};

export default NavButton;
