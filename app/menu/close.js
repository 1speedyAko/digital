// components/CloseIcon.js
export default function CloseIcon({ width = 24, height = 24, color = "#E5E7EB" }) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={width}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 6L18 18"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M18 6L6 18"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  