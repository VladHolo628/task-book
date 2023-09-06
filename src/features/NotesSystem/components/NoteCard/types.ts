import React from "react";

export interface INoteCardProps {
  title: string;
  text?: string;
  onClick: React.MouseEventHandler;
}
