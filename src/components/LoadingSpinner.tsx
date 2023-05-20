function LoadingSpinner() {
  return (
    <svg
      className="loading-spinner"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="0" fill="currentColor">
        <animate
          attributeName="r"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          repeatCount="indefinite"
          values="0;11"
        />
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          repeatCount="indefinite"
          values="1;0"
        />
      </circle>
    </svg>
  );
}
export default LoadingSpinner;
