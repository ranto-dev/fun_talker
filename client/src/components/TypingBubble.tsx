export function TypingBubble() {
  const dotStyle = {
    width: "6px",
    height: "6px",
    animation: "typingBounce 2s infinite ease-in-out",
  } as const;

  return (
    <>
      <style>
        {`
        @keyframes typingBounce {
          0%   { transform: translateY(0); opacity: .3; }
          20%  { transform: translateY(-4px); opacity: 1; }
          40%  { transform: translateY(0); opacity: .3; }
        }
      `}
      </style>

      <div className="flex items-center gap-1 px-4 py-2 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 max-w-fit">
        <span
          className="rounded-full bg-neutral-500"
          style={{ ...dotStyle, animationDelay: "0s" }}
        />
        <span
          className="rounded-full bg-neutral-500"
          style={{ ...dotStyle, animationDelay: "0.2s" }}
        />
        <span
          className="rounded-full bg-neutral-500"
          style={{ ...dotStyle, animationDelay: "0.4s" }}
        />
      </div>
    </>
  );
}
