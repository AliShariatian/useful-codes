import { ComponentType } from "react";
import { dynamicWithAutoRetry as loadZilla } from "loadzilla";
import DefaultFallbackComponent from "./default-fallback-component";
import { SpinnerCircle, SpinnerClassNamesType } from "@/components/ui/spinner";

// Define the options type for dynamic import configuration
type OptionsType = {
  retries?: number; // Number of times to retry loading the component
  delay?: number; // Delay between retries in milliseconds
  ssr?: boolean; // If true, enables server-side rendering
  spinnerClassNames?: SpinnerClassNamesType; // Custom class names for the spinner component
};

/**
 * Function for dynamically loading a component with retry logic specific to the project.
 * It handles failed imports with automatic retries and displays a loading spinner or fallback component.
 *
 * @param importFunction - A function that returns a promise for the component import
 * @param options - Additional options to customize the dynamic import behavior
 *
 * @example
 * const Component1 = dynamicImport(() => import("@/path1"));
 *
 * const Component2 = dynamicImport(() => import("@/path2"), {
 *    delay: 500, // Wait 500ms before retrying
 *    retries: 5, // Retry loading the component 5 times
 *    ssr: false, // Disable server-side rendering
 *    spinnerClassNames: { wrapper: "px-20", spinner: "size-8" } // Custom spinner styles
 * });
 *
 * @link
 * For more details on the underlying library, visit the Loadzilla package documentation:
 * https://www.npmjs.com/package/loadzilla
 */
function dynamicImport<T>(
  importFunction: () => Promise<{ default: ComponentType<T> }>,
  options?: OptionsType,
) {
  return loadZilla(importFunction, {
    // Default retries to 3
    retries: options?.retries || 3,

    // Default delay to 1000ms
    delay: options?.delay || 1000,

    // Loading component displayed while the component is loading
    LoadingComponent: <SpinnerCircle classNames={options?.spinnerClassNames} />,

    // Fallback component displayed if loading fails after retries
    FallbackComponent: DefaultFallbackComponent,

    // Options for dynamic loading behavior
    dynamicOptions: {
      // Enable or disable server-side rendering
      ssr: options?.ssr,
    },
  });
}

export { dynamicImport };
