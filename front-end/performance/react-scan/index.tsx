import { FC } from "react";
import { isDevelopment } from "@/constant/global";

interface IProps {
  /**
   * A flag that disables the injection of the `react-scan` script when set to `true`.
   * @default false
   */
  disable?: boolean;
}

/**
 * ReactScan is a React functional component that conditionally injects the `react-scan` script
 * into the document `<head>` element. It is intended to be used only in development environments.
 *
 * @component
 * @param {Object} props - The properties for the ReactScan component.
 * @param {boolean} [props.disable=false] - When set to `true`, prevents the script from being injected.
 * @returns {JSX.Element|null} A `<head>` element containing the script tag if conditions are met, otherwise `null`.
 *
 * @example
 * // Example usage in a development-only context:
 * import ReactScan from "./ReactScan";
 *
 * const App = () => {
 *   return (
 *     <>
 *       <ReactScan disable={false} />
 *
 *       <body>Application Body</body>
 *     </>
 *   );
 * };
 *
 * @remarks
 * This component will only function correctly if the `isDevelopment` constant is `true`.
 * Ensure that `isDevelopment` is configured properly to reflect your environment settings.
 */

const ReactScan: FC<IProps> = ({ disable = false }): JSX.Element | null => {
  if (!isDevelopment || disable) return null;

  return (
    // eslint-disable-next-line @next/next/no-head-element
    <head>
      <script src="https://unpkg.com/react-scan/dist/auto.global.js" async />
    </head>
  );
};

export default ReactScan;
