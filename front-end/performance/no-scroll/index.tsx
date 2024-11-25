"use client";

import { FC } from "react";
import { useNoScroll } from "@/hooks";

export const NoScroll: FC = (): null => {
  useNoScroll();

  return null;
};
