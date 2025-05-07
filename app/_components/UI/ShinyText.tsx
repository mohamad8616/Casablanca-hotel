interface shinyTextArguments {
  text: string;
  disabled: boolean;
  speed: number;
  className: string;
}

const ShinyText = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
}: shinyTextArguments) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`inline-block bg-clip-text text-[#b5b5b5e2] ${disabled ? "" : "animate-shine"} ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0) 60%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        animationDuration: animationDuration,
      }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
