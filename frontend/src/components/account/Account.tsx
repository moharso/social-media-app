import "./Account.css";

const Account = ({network}: any) => {
  return (
    <img src={network} key={network.username} alt="social network account" />
  );
};

export default Account;
