import "./Account.css";

const Account = ({network, onSelectAccount}: any) => {
  return (
    // <button
    //   onClick={() => onSelectAccount(network.username)}
    //   key={network.username}
    //   className="bg-sky-500 w-12 h-12 rounded-full focus:ring-offset-1 focus:ring-2 text-transparent overflow-hidden"
    // >
    <img
      src={network.image}
      key={network.username}
      alt="social network account"
    />
    // {/* <span>
    //   <img src={network.name} alt="social network"></img>
    // </span> */}
    // </button>
  );
};

export default Account;
