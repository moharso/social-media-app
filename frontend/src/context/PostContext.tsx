import {useState, createContext, useMemo} from "react";

export const PostContext = createContext<any>({});

const PostProvider = ({children}: any) => {
  // const [posts, setPosts] = useState<any>({});
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState<any>(null);

  const [userSelected, setUserSelected] = useState<any>();

  function handleSelected(e: any, account: any) {
    e.preventDefault();
    setUserSelected(account);
  }

  function handleReturn() {
    setUserSelected([]);
  }
  const value = useMemo(() => {
    return {
      userSelected: userSelected,
      onUserSelected: handleSelected,
      onClickReturn: handleReturn,
      // posts,
      // isLoading,
      // isError,
    };
  }, [userSelected]);

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export {PostProvider};
