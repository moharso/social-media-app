import "./Account.css";

const Account = ({network, account}: any) => {
  return (
    <div className="relative w-full h-full">
      <img
        src={account}
        key={account.username}
        alt="client account"
        className="z-10 relative"
      />
      <img
        src={network}
        alt="social network account"
        className="absolute bottom-1 right-2 w-5 h-5 z-40 border-1 border-white"
      ></img>
    </div>
  );
};

export default Account;
