export const useLocalStorage = () => {

    const setStorageItem = (key, value) => {
        window.localStorage.setItem(key, value);
    };

    const getStorageItem = (key) => {
        window.localStorage.getItem(key);
    };

    const deleteStorageItem = (key) => {
        window.localStorage.removeItem(key);
    };

    return [setStorageItem, getStorageItem, deleteStorageItem];
};