import { useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";

const BACKGROUND = "#ffffff";
const INK = "#1a1a1a";
const BLUE = "#1a56db";
const GREEN = "#057a55";

function HandwrittenText({
  text,
  x,
  y,
  fontSize,
  color,
  startFrame,
  duration,
}: {
  text: string;
  x: number;
  y: number;
  fontSize: number;
  color: string;
  startFrame: number;
  duration: number;
}) {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [startFrame, startFrame + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.ease),
  });

  return (
    <text
      x={x}
      y={y}
      fontSize={fontSize}
      fill={color}
      fontFamily="'Caveat', cursive"
      fontWeight="700"
      style={{
        clipPath: `inset(0 ${(1 - progress) * 100}% 0 0)`,
      }}
    >
      {text}
    </text>
  );
}

function AnimatedLine({
  x1, y1, x2, y2,
  color,
  startFrame,
  duration,
  strokeWidth = 3,
}: {
  x1: number; y1: number; x2: number; y2: number;
  color: string;
  startFrame: number;
  duration: number;
  strokeWidth?: number;
}) {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [startFrame, startFrame + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  return (
    <line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeDasharray={length}
      strokeDashoffset={length * (1 - progress)}
      strokeLinecap="round"
    />
  );
}

function AnimatedRect({
  x, y, width, height,
  color,
  startFrame,
  duration,
}: {
  x: number; y: number; width: number; height: number;
  color: string;
  startFrame: number;
  duration: number;
}) {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [startFrame, startFrame + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const perimeter = 2 * (width + height);

  return (
    <rect
      x={x} y={y} width={width} height={height}
      fill="none"
      stroke={color}
      strokeWidth={3}
      strokeDasharray={perimeter}
      strokeDashoffset={perimeter * (1 - progress)}
      rx={8}
    />
  );
}

export const MyComposition = () => {
  const { width, height } = useVideoConfig();

  return (
    <div style={{ width, height, background: BACKGROUND, position: "relative" }}>
      {/* Google Font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');`}</style>

      <svg width={width} height={height} style={{ position: "absolute", top: 0, left: 0 }}>

        {/* Başlık */}
        <HandwrittenText
          text="Solve for x"
          x={width / 2 - 180} y={90}
          fontSize={64} color={INK}
          startFrame={5} duration={25}
        />
        {/* Başlık altı çizgi */}
        <AnimatedLine
          x1={width / 2 - 190} y1={105}
          x2={width / 2 + 190} y2={105}
          color={BLUE} startFrame={28} duration={15}
        />

        {/* Denklem etiketi */}
        <HandwrittenText
          text="Equation:"
          x={80} y={200}
          fontSize={38} color={"#888"}
          startFrame={40} duration={20}
        />

        {/* Denklem */}
        <HandwrittenText
          text="x² - 5x + 6 = 0"
          x={300} y={200}
          fontSize={52} color={INK}
          startFrame={55} duration={35}
        />

        {/* Ok */}
        <AnimatedLine
          x1={width / 2} y1={220}
          x2={width / 2} y2={285}
          color={"#aaa"} startFrame={88} duration={12} strokeWidth={2}
        />

        {/* Çarpanlara ayırma etiketi */}
        <HandwrittenText
          text="Factor:"
          x={80} y={330}
          fontSize={38} color={"#888"}
          startFrame={98} duration={18}
        />

        {/* Çarpanlı form */}
        <HandwrittenText
          text="(x - 2)(x - 3) = 0"
          x={280} y={330}
          fontSize={52} color={BLUE}
          startFrame={112} duration={40}
        />

        {/* Ok */}
        <AnimatedLine
          x1={width / 2} y1={352}
          x2={width / 2} y2={415}
          color={"#aaa"} startFrame={150} duration={12} strokeWidth={2}
        />

        {/* Çözümler etiketi */}
        <HandwrittenText
          text="Solutions:"
          x={80} y={460}
          fontSize={38} color={"#888"}
          startFrame={160} duration={18}
        />

        {/* x = 2 */}
        <HandwrittenText
          text="x = 2"
          x={310} y={460}
          fontSize={56} color={GREEN}
          startFrame={175} duration={25}
        />

        {/* x = 3 */}
        <HandwrittenText
          text="x = 3"
          x={620} y={460}
          fontSize={56} color={GREEN}
          startFrame={198} duration={25}
        />

        {/* Kutular */}
        <AnimatedRect
          x={295} y={420} width={180} height={55}
          color={GREEN} startFrame={222} duration={20}
        />
        <AnimatedRect
          x={605} y={420} width={180} height={55}
          color={GREEN} startFrame={222} duration={20}
        />

        {/* Checkmark */}
        <HandwrittenText
          text="✓ Solved!"
          x={width / 2 - 120} y={560}
          fontSize={52} color={GREEN}
          startFrame={245} duration={25}
        />

      </svg>
    </div>
  );
};
