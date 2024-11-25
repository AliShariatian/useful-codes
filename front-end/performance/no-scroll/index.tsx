"use client";

import { FC } from "react";
import { useOverflowScreen } from "@/hooks";

export const NoScroll: FC = (): null => {
  useOverflowScreen();

  return null;
};
