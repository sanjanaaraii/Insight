import React from "react";

function OverallScoreRing({ score }) {
  const radius = 70;
  const stroke = 12;
  const normalizedRadius = radius - stroke / 2;

  const circumference = 2 * Math.PI * normalizedRadius;

  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="flex justify-center items-center">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="-rotate-90"
      >
       
        <circle
          stroke="#d5cec2"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        <circle
          stroke="#9c7718"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>

      <div className="absolute flex flex-col items-center">
        <h1
          className="text-5xl font-bold"
          style={{ fontFamily: "Playfair Display" }}
        >
          {score}
        </h1>

        <p className="text-lg font-semibold text-gray-600">/ 100</p>
      </div>
    </div>
  );
}

export default OverallScoreRing;