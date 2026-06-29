import { useState, useEffect } from "react";
function useFetchData(url){
    const [data, setData] = useState(null);

    useEffect(() => {
    async function fetchData() {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
    }

    fetchData();
    }, [url]);

    return(data);
}
export default useFetchData;