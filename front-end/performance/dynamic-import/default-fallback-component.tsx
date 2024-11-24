import { FC } from "react";

interface IProps {
  onRetry: () => void;
}

// Fallback component in case loading fails
const DefaultFallbackComponent: FC<IProps> = ({ onRetry }): JSX.Element => (
  <div className="flex size-full flex-col items-center justify-center gap-5">
    <div className="flex flex-col items-center justify-center gap-1 text-center *:text-2xs">
      <small>بارگزاری با شکست مواجه شد!</small>
      <small>اتصال اینترنت خود را بررسی کنید.</small>
    </div>

    {/* Button to retry loading */}
    <button className="w-full" onClick={onRetry}>
      تلاش مجدد
    </button>
  </div>
);

export default DefaultFallbackComponent;
