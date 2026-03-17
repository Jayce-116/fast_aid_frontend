import React from "react";
import { Link } from "react-router-dom";

const GuideCard = ({ id, title, time, summary, tags }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-2">{time}</p>
      <p className="text-gray-700 mb-4">{summary}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        to={`/guide/${id}`}
        className="text-green-600 font-semibold hover:underline mt-auto"
      >
        Open
      </Link>
    </div>
  );
};

export default GuideCard;
