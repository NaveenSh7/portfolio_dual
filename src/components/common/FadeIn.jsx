import useInView from "../../hooks/useInView";

export default function FadeIn({
  children,
  delay = 0,
  fromLeft = false,
  fromRight = false,
}) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "none"
          : fromLeft
            ? "translateX(-36px)"
            : fromRight
              ? "translateX(36px)"
              : "translateY(24px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
