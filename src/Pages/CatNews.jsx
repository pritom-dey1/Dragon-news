import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/Main/Card";

const CatNews = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [DataToShow, setDataToShow] = useState([]);

  useEffect(() => {
    if (!id || id === "0") {
      setDataToShow(data);
    } else if (id === "1") {
      const filteredData = data.filter(
        (news) => news.others.is_today_pick === true
      );
      setDataToShow(filteredData);
    } else {
      const filteredData = data.filter((news) => news.category_id == id);
      setDataToShow(filteredData);
    }
  }, [id, data]);

  return (
    <div className="w-full max-w-3xl mx-auto mt-6 space-y-6">
      {DataToShow.length > 0 ? (
        DataToShow.map((news) => <NewsCard key={news.id} news={news} />)
      ) : (
        <p className="text-center text-gray-500">No news found.</p>
      )}
    </div>
  );
};

export default CatNews;
