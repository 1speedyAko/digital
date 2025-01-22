import React from 'react';
import { FaCheck } from 'react-icons/fa';

function RateCard({ details = [] }) {
  // Ensure only three packages are displayed
  const packagesToDisplay = details.slice(0, 3);

  // Fill empty slots with placeholders if there are fewer than three packages
  const placeholders = Array.from({ length: 3 - packagesToDisplay.length });

  return (
    <div>
      <h1>Our Rates</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 px-5">
        {packagesToDisplay.map((detail, index) => (
          <div className="border p-4" key={index}>
            <h2 className="font-bold text-lg">{detail.title}</h2>
            <p className="mb-4">{detail.description}</p>
            <ul>
              {detail.features?.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center mb-2">
                  <FaCheck style={{ color: "green", marginRight: "8px" }} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
        {placeholders.map((_, index) => (
          <div className="border p-4 bg-gray-100" key={`placeholder-${index}`}>
            <h2 className="font-bold text-lg">Coming Soon</h2>
            <p className="mb-4">Stay tuned for more amazing packages!</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RateCard;
