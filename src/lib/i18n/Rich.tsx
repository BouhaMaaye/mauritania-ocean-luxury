import type { RichPart } from "./translations";

export function Rich({ parts, boldClassName }: { parts: RichPart[]; boldClassName?: string }) {
  return (
    <>
      {parts.map((part, i) =>
        part.bold ? (
          <strong key={i} className={boldClassName ?? "font-semibold"}>
            {part.text}
          </strong>
        ) : part.italic ? (
          <em key={i}>{part.text}</em>
        ) : (
          <span key={i}>{part.text}</span>
        ),
      )}
    </>
  );
}
