import { ComponentProps, FC } from "react";
import { cn } from "@/utils";
import "./line.css";

type PropsType = ComponentProps<"div">;

export const SpinnerLine: FC<PropsType> = ({
  className,
  ...props
}): JSX.Element => {
  return (
    <div
      {...props}
      className={cn("flex items-center justify-center", className)}
    >
      <div className="line-spinner">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} />
        ))}
      </div>
    </div>
  );
};
