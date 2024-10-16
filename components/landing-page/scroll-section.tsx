const items = Array(12).fill(null); // Array with 12 items

export const ScrollSection = ({
  direction,
}: {
  direction: "left" | "right";
}) => (
  <div className="flex w-[1455px]">
    <div className={`flex animate-loop-scroll-${direction} space-x-16`}>
      {items.map((_, index) => (
        <div
          key={`item-${direction}-${index}`}
          className="w-[400px] h-[314px] bg-gray-200 rounded-xl border"
        ></div>
      ))}
    </div>

    {/* Duplicate Set for Seamless Scrolling */}
    <div
      className={`flex animate-loop-scroll-${direction} space-x-16`}
      aria-hidden="true"
    >
      {items.map((_, index) => (
        <div
          key={`duplicate-${direction}-${index}`}
          className={`w-[400px] h-[314px] bg-gray-200 rounded-xl border ${
            index === 0 ? "ml-16" : ""
          }`}
        ></div>
      ))}
    </div>
  </div>
);
