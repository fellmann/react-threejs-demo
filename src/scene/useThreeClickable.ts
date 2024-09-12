import { useState } from "react";

export default function useThreeClickable() {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  return {
    hovered,
    active,
    props: {
      onPointerEnter: () => setHovered(true),
      onPointerLeave: () => setHovered(false),
      onPointerDown: () => setActive(true),
      onPointerMissed: () => setActive(false),
    },
  };
}
