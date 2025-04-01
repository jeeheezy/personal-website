import type { Modifier } from "@dnd-kit/core";

import restrictToBoundingRect from "./restrictToBoundingRect";

export const restrictToWindowEdges: Modifier = ({
  transform,
  draggingNodeRect,
  windowRect,
}) => {
  if (!draggingNodeRect || !windowRect) {
    return transform;
  }
  const adjustedRect = { ...windowRect };
  adjustedRect.height += 500;

  return restrictToBoundingRect(transform, draggingNodeRect, adjustedRect);
};
