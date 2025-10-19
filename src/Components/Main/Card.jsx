// src/components/NewsCard.jsx
import React from "react";
import { Star, Eye } from "lucide-react";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 border border-gray-100 mt-10">
      {/* Author Info */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-gray-800">
            {news.author.name}
          </p>
          <p className="text-xs text-gray-500">
            {new Date(news.author.published_date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold text-gray-900 mb-2">{news.title}</h2>

      {/* Image */}
      <img
        src={news.thumbnail_url}
        alt={news.title}
        className="w-full rounded-xl h-56 object-cover mb-3"
      />

      {/* Description */}
      <p className="text-sm text-gray-600 mb-3">
        {news.details.slice(0, 180)}...
      </p>

      {/* Read More */}
      <Link to={`/news/${news.id}`} className="text-blue-600 font-semibold hover:underline">
        Read More
      </Link>

      {/* Footer (Rating + Views) */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`${
                i < news.rating.number
                  ? "text-orange-400 fill-orange-400"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2 text-sm font-medium text-gray-700">
            {news.rating.number}.0
          </span>
        </div>

        <div className="flex items-center gap-1 text-gray-600 text-sm">
          <Eye size={16} />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
