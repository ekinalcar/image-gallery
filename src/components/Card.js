import React from "react";
import PropTypes from "prop-types";

const Card = ({ image }) => {
  return (
    <div key={image.id} className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        alt={image.alt_description}
        src={image.urls["full"]}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo By {image.user["username"]}
        </div>
        <ul>
          <li>
            <strong>Views:</strong>
          </li>
          <li>
            <strong>Download:</strong>
          </li>
          <li>
            <strong>Likes:</strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {image.tags.map((tag, i) => (
          <span
            key={i}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            {tag.title}
          </span>
        ))}
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
