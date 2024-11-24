import { FC } from "react";
import { isDevelopment } from "@/constant/global";

/**
 * ReactScan component for integrating the React Scan tool in development mode.
 *
 * This component is designed to be placed at the root layout of your application,
 * specifically at the top of the `<body>` tag. It conditionally includes the React Scan
 * script, enabling its usage only in development environments.
 *
 * Usage:
 * - Include this component in your `app/layout.js` or equivalent layout file.
 * - Ensure `isDevelopment` correctly reflects the environment (true for development).
 *
 * @component
 * @returns {JSX.Element | null} A `<script>` element for React Scan if in development mode, otherwise `null`.
 */
const ReactScan: FC = (): JSX.Element | null => {
  if (!isDevelopment) return null;

  return (
    // eslint-disable-next-line @next/next/no-head-element
    <head>
      <script src="https://unpkg.com/react-scan/dist/auto.global.js" async />
    </head>
  );
};

export default ReactScan;
