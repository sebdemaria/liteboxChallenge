export const useLocalStorage = () => {
    const setStorageItem = (key, value) => {
        localStorage.setItem(key, value);
    };

    const getStorageItem = (key) => {
        localStorage.getItem(key);
    };

    const deleteStorageItem = (key) => {
        localStorage.removeItem(key);
    };

    return [setStorageItem, getStorageItem, deleteStorageItem];
};
