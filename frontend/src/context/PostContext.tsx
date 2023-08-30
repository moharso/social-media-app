import {useState, useEffect, createContext, useCallback, useMemo} from "react";
import {myEventsList} from "../components/data/data";
import axios from "axios";

export const PostContext = createContext<any>({});

const PostProvider = ({children}: any) => {
  // ***************************************
  const [posts, setPosts] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<any>(null);

  const BASE_URL = "http://localhost:4001/api/v1";
  // ******************************************
  // const [allEvents, setAllEvents] = useState<any[] | null>(function () {
  //   const storedValue: any = localStorage.getItem("posted");
  //   return JSON.parse(storedValue);
  // });

  const [userSelected, setUserSelected] = useState<any>();
  // const [previousEvents, setpreviousEvents] = useState(myEventsList);

  function handleSelected(e: any, account: any) {
    e.preventDefault();
    setUserSelected(account);
    // setUserSelected((acc: any) => [...acc, account]);
  }

  function handleReturn() {
    setUserSelected([]);
  }
  const value = useMemo(() => {
    return {
      // allEvents,
      // onClickSubmit: handleAddEvent,
      // previousEvents: previousEvents,
      userSelected: userSelected,
      onUserSelected: handleSelected,
      onClickReturn: handleReturn,
      posts,
      isLoading,
      isError,
    };
  }, [
    // handleAddEvent,
    // previousEvents,
    // allEvents,
    userSelected,
    posts,
    isLoading,
    isError,
  ]);
  // useEffect(
  //   function () {
  //     localStorage.setItem("posted", JSON.stringify(allEvents));
  //   },
  //   [allEvents]
  // );
  // useEffect(function () {
  //   async function fetchPosts() {
  //     try {
  //       setIsLoading(true);
  //       const res = await axios.get(`${BASE_URL}/posts`);
  //       const posts = res.data.data.posts;
  //       setResult2(posts);
  //     } catch (err) {
  //       console.log(err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchPosts();
  // }, []);

  useEffect(function () {
    async function fetchPosts() {
      try {
        setIsLoading(true);
        const res = await axios.get(`${BASE_URL}/posts`);
        console.log(res);
        setPosts(res.data.data.posts);
      } catch (err) {
        setIsError(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export {PostProvider};
