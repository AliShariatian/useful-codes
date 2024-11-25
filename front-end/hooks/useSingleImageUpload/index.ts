import { useState } from "react";

/**
 * Custom hook to handle a single image file selection, size validation, image preview,
 * and the ability to remove the selected image.
 *
 * @param {object} params - The configuration object.
 * @param {number} [params.maxSizeMB=5] - The maximum allowed image file size in MB. Default is 5 MB.
 * @returns {object} - An object containing the following:
 *   - `imageSrc` (string | null): The data URL of the selected image for preview, or `null` if no image is selected.
 *   - `error` (string | null): An error message in Persian if the file size exceeds the limit, or `null` if no error.
 *   - `handleImageChange` (function): The function to handle the image file input change event.
 *   - `handleRemoveImage` (function): The function to remove the selected image and reset state.
 */
export const useSingleImageUpload = ({
  maxSizeMB = 5,
}: { maxSizeMB?: number } = {}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  /**
   * Handles the image file selection, validates the size, and sets the image preview.
   * Only one image can be uploaded at a time.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event from the file input element.
   */
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check if the file size exceeds the specified max size
      if (file.size > maxSizeMB * 1024 * 1024) {
        setError(`حجم فایل انتخابی بیشتر از ${maxSizeMB} مگابایت است.`);
        setImageSrc(null); // Clear the previous image if file size is too large
      } else {
        setError(null); // Clear any previous error
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageSrc(reader.result as string); // Set the image URL for display
        };
        reader.readAsDataURL(file);
      }
    }
  };

  /**
   * Removes the selected image and resets the state.
   */
  const handleRemoveImage = () => {
    setImageSrc(null); // Clear the image preview
    setError(null); // Clear any errors if there's no image
  };

  return {
    imageSrc, // The data URL of the selected image for preview
    error, // Error message if file size exceeds the limit (in Persian)
    handleImageChange, // The function to handle file input change
    handleRemoveImage, // The function to remove the selected image and reset state
  };
};

export default useSingleImageUpload;
