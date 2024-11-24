import { FC, SVGProps } from "react";

export type SVGType = FC<SVGProps<SVGElement>>;

export type ClassNamesType<T extends string> = Partial<Record<T, string>>;
/**
 * @usage
 * type PropsType = {
 *    classNames?: ClassNamesType<"container" | "line" | "and...">
 * }
 */
