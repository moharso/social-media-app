import {useState, useEffect, createContext, useCallback, useMemo} from "react";
import {myEventsList} from "../components/data/data";

export const PostContext = createContext<any>({});

const PostProvider = ({children}: any) => {
  const [allEvents, setAllEvents] = useState<any[] | null>(function () {
    const storedValue: any = localStorage.getItem("posted");
    return JSON.parse(storedValue);
  });
  // const [posts, setPosts] = useState([]);

  const [userSelected, setUserSelected] = useState<any>([]);
  const [previousEvents, setpreviousEvents] = useState(myEventsList);

  function handleSelected(e: any, account: any) {
    e.preventDefault();
    setUserSelected((acc: any) => [...acc, account]);
  }

  const handleAddEvent = useCallback(
    function handleAddEvent(item: any) {
      if (Array.isArray(allEvents)) {
        setAllEvents([...allEvents, item]);
      } else {
        setAllEvents([...previousEvents, item]);
      }
    },
    [allEvents, previousEvents]
  );

  function handleReturn() {
    setUserSelected([]);
  }
  const value = useMemo(() => {
    return {
      allEvents,
      onClickSubmit: handleAddEvent,
      previousEvents: previousEvents,
      userSelected: userSelected,
      onUserSelected: handleSelected,
      onClickReturn: handleReturn,
    };
  }, [handleAddEvent, previousEvents, allEvents, userSelected]);
  useEffect(
    function () {
      localStorage.setItem("posted", JSON.stringify(allEvents));
    },
    [allEvents]
  );
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export {PostProvider};
