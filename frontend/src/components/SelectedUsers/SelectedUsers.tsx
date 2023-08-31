const SelectedUsers = ({account}: any) => {
  return (
    <div className="relative inline-flex items-center justify-center bg-white w-[46px] h-[46px] rounded-full dark:bg-icoDarkMode-deepBlack">
      {account?.mediaIcon ? (
        <img
          alt=""
          src={`http://localhost:4001/media/${account.mediaIcon}`}
        ></img>
      ) : (
        <img
          src="https://cdn-prod.app.iconosquare.com/avatars/avatar-2156274.jpg"
          alt="account"
          className="object-fill h-full rounded-full"
        ></img>
      )}
    </div>
  );
};

export default SelectedUsers;
