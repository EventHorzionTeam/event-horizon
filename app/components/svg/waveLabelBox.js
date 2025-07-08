export default function WaveLabelBoxSvg({
  x,
  y,
  title,
  IconComponent, // 👈 accept a component here
  description,
  width = 3,
  height = 3,
}) {
  const padding = 0.3;
  const textX = x + width / 2;

  const titleY = y + padding + 0.4;
  const iconY = titleY + 0.5;
  const descY = iconY + 0.6;

  return (
    <>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={0.2}
        fill="black"
        stroke="#ff3c00"
        strokeWidth="0.05"
      />

      <text
        x={textX}
        y={titleY}
        fill="#ff3c00"
        fontSize="0.4"
        fontWeight="bold"
        textAnchor="middle"
      >
        {title}
      </text>

      {/* Icon centered and scaled */}
      {IconComponent && (
        <g transform={`translate(${textX - 0.3}, ${iconY - 0.3}) scale(0.023)`}>
          <IconComponent />
        </g>
      )}

      <text x={textX} y={descY} fill="#ccc" fontSize="0.3" textAnchor="middle">
        {description
          .split(" ")
          .reduce(
            (acc, word) => {
              const lastLine = acc[acc.length - 1];
              if ((lastLine + " " + word).length < 30) {
                acc[acc.length - 1] = lastLine + " " + word;
              } else {
                acc.push(word);
              }
              return acc;
            },
            [""]
          )
          .map((line, index) => (
            <tspan key={index} x={textX} dy={index === 0 ? "0" : "1.0em"}>
              {line.trim()}
            </tspan>
          ))}
      </text>
    </>
  );
}
