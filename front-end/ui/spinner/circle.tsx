import { ComponentProps, FC } from "react";
import { type SpinnerClassNamesType } from "./types";
import { cn } from "@/utils";

interface IProps extends Omit<ComponentProps<"div">, "className"> {
  classNames?: SpinnerClassNamesType;
}

export const SpinnerCircle: FC<IProps> = ({
  classNames,
  ...props
}): JSX.Element => {
  return (
    <div
      {...props}
      className={cn(
        "flex items-center justify-center py-24",
        classNames?.wrapper,
      )}
    >
      <div
        className={cn(
          "size-14 animate-spin rounded-full border-2 border-secondary-200 border-t-light-50",
          classNames?.spinner,
        )}
      />
    </div>
  );
};
