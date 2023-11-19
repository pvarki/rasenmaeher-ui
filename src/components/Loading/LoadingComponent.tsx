const LoadingComponent = ({ text = "Loading..." }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="z-50 relative flex flex-col items-center justify-center">
        <svg
          className="animate-spin h-10 w-10 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18a8 8 0 100-16 8 8 0 000 16z"
          ></path>
        </svg>
        <span className="text-lg text-white-500 mt-2">{text}</span>
      </div>
    </div>
  );
};

export default LoadingComponent;
