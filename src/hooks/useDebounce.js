import { useEffect, useState } from "react"

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        let timeout = 0;
        if (!!value.trim()) {
            timeout = setTimeout(() => {
                setDebounceValue(value)
            }, delay);
        }else {
            setDebounceValue("");
        }
        return () => clearTimeout(timeout);
    }, [value])


    return debounceValue
}

export default useDebounce