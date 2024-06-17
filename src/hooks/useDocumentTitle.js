import { useEffect } from "react";

/**
 * Custom hook that sets the document title to the specified value.
 *
 * @param {string} title - The title to set for the document.
 */
const useDocumentTitle = (title) => {
    useEffect(() => {
        document.title = title;
    }, []);
};

export default useDocumentTitle;
