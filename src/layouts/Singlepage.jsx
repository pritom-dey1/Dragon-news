import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import { LatestNews } from "../Components/Header/LatestNews";
import Navbar from "../Components/Header/Navbar";
import { useParams, Link } from "react-router";

const Singlepage = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => {
        const single = data.find((n) => String(n.id) === String(id));
        setNews(single);

        if (single) {
          const relatedNews = data
            .filter(
              (item) =>
                item.category_id === single.category_id && item.id !== single.id
            )
            .slice(0, 3); // 👈 শুধু ৩টা show করবে
          setRelated(relatedNews);
        }
      })
      .catch((err) => console.error("Error loading news:", err));
  }, [id]);

  if (!news) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600 text-lg">Loading news...</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <LatestNews />
      <Navbar />

      <div className="max-w-4xl mx-auto mt-10 px-4 pb-10">
        {/* Single News */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <img
            src={news.image_url}
            alt={news.title}
            className="w-full h-80 object-cover"
          />
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-2">{news.title}</h1>

            {/* Meta Info */}
            <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
              <div className="flex items-center gap-2">
                <img
                  src={news.author?.img}
                  alt={news.author?.name}
                  className="w-8 h-8 rounded-full"
                />
                <span>{news.author?.name}</span>
              </div>
              <p>
                {new Date(news.author?.published_date).toLocaleDateString(
                  "en-US",
                  { year: "numeric", month: "long", day: "numeric" }
                )}
              </p>
            </div>

            {/* Details */}
            <p className="text-gray-700 leading-relaxed">{news.details}</p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {news.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-gray-200 text-sm px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Category Button */}
            <div className="mt-6">
              <Link
                to={`/category/${news.category_id}`}
                className="inline-block bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                 All news in this category
              </Link>
            </div>
          </div>
        </div>

        {/* Related News Section */}
        {related.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">
              Related News in this Category
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-100 p-4 rounded-lg hover:shadow-md transition"
                >
                  <img
                    src={item.thumbnail_url}
                    alt={item.title}
                    className="rounded-md mb-3 h-40 w-full object-cover"
                  />
                  <h3 className="font-medium text-gray-800 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <Link
                    to={`/news/${item.id}`}
                    className="text-red-500 text-sm font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Singlepage;
