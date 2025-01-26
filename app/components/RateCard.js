import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { ExpandableCard } from './ExpandableCard';

function RateCard({ details = [] }) {
  // Ensure only three packages are displayed
  const packagesToDisplay = details.slice(0, 3);

  // Fill empty slots with placeholders if there are fewer than three packages
  const placeholders = Array.from({ length: 3 - packagesToDisplay.length });

  return (
    <div className='py-7'>
      <h1 className='text-center mb-4 heading text-3xl font-bold'>Our Rates</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 px-5">
        {packagesToDisplay.map((detail, index) => (
          <div className="border p-4 theme py-24 pt-6" key={index}>
            <h2 className="font-bold text-3xl heading text-center">{detail.title}</h2>
            <p className="mb-4 primary">{detail.description}</p>
            <ExpandableCard>
              <ul>
                {detail.features?.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2 primary">
                    <FaCheck style={{ color: "green", marginRight: "8px" }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </ExpandableCard>
            
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
