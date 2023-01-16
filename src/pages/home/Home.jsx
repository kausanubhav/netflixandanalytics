import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzAxNjRhYmNlYjQ5ZjE1ZTliYjI1OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzU0NzAxNSwiZXhwIjoxNjczOTc5MDE1fQ.WTtUxdlQRAu7oxCJzUQYNgtWfnl1k1k5dHOBr6PKfto ",
            },
          }
        );
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list)=>(
        <List list={list}/>
      ))}
    </div>
  );
}
