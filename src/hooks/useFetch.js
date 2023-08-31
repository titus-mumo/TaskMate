import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)

    useEffect(() => async () => {
        const response = await fetch(url)
        const result = await response.json();
        setData(result)
    }, [url]);

    return {data}
}

export default useFetch;