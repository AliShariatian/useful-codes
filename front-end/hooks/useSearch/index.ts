import { useMemo, useState } from "react";
import useDebounce from "../useDebounce";

/**
 * Custom hook to search and filter an array of items based on a search key and value.
 * Includes debounce functionality to delay the filtering process for performance optimization.
 *
 * @template T - The type of items in the array.
 * @param {T[]} items - The array of items to search.
 * @param {keyof T} searchKey - The key in the object to search against.
 * @param {number} [debounceDelay=300] - The debounce delay in milliseconds (default is 300ms).
 * @returns {{
 *   searchValue: string, // The current search value
 *   setSearchValue: React.Dispatch<React.SetStateAction<string>>, // Function to update the search value
 *   filteredItems: T[] // The filtered list of items based on the search value
 * }} - An object containing the search value, function to update the search value, and filtered items.
 *
 * @example
 * // Example of how to use `useSearch` hook
 * const items = [
 *   { id: 1, username: 'john_doe' },
 *   { id: 2, username: 'jane_doe' },
 *   { id: 3, username: 'michael_smith' },
 * ];
 *
 * const { searchValue, setSearchValue, filteredItems } = useSearch(items, 'username');
 *
 * // Updating the search value when user types in an input field
 * const handleSearchChange = (ev) => {
 *   setSearchValue(ev.target.value); // Updates search value
 * };
 *
 * // Filtering happens automatically based on the debounced search value
 * console.log(filteredItems); // List of items matching the search value
 */
const useSearch = <T>(items: T[], searchKey: keyof T, debounceDelay = 300) => {
  // State to keep track of the search value entered by the user
  const [searchValue, setSearchValue] = useState("");

  // Use the useDebounce hook to apply debouncing on the search value
  // This will delay the filtering operation until the user stops typing for the specified delay
  const debouncedSearchValue = useDebounce(searchValue, debounceDelay);

  // Memoize the filtered list of items based on the debounced search value
  // This ensures the filtering operation only runs when the search value or items change
  const filteredItems = useMemo(() => {
    return items.filter((item: T) =>
      // Convert the value of the searchKey to a string and check if it includes the debounced search value
      item[searchKey]
        ?.toString()
        .toLowerCase()
        .includes(debouncedSearchValue.toLowerCase()),
    );
  }, [items, searchKey, debouncedSearchValue]);

  // Return the search value, function to update it, and the filtered items list
  return { searchValue, setSearchValue, filteredItems };
};

export default useSearch;
