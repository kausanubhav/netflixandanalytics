import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../data";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
export default function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzAxNjRhYmNlYjQ5ZjE1ZTliYjI1OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzU0NzAxNSwiZXhwIjoxNjczOTc5MDE1fQ.WTtUxdlQRAu7oxCJzUQYNgtWfnl1k1k5dHOBr6PKfto",
          },
        });

        const statsLists=res.data.sort(function(a,b){
          return a._id-b._id;
        });
        statsLists.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, [MONTHS]);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="New User"
      />
      <div className="homewidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
