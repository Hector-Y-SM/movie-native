import { useEffect, useState } from "react";

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
    const [data, setData] = useState<null  | T>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | Error>(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const result = await fetchFunction();

            setData(result);
            return data;
        } catch (error) {
            setError(error instanceof Error ? error: new Error('an error occurred'));
        } finally {
            setLoading(false);
        }
    }

    const reset = () => {
        setData(null);
        setLoading(false);
        setError(null);
    };


    useEffect(() => {
        if (autoFetch) {
            fetchData();
        }
    }, []);

    return {
        data, 
        loading, 
        error,
        reFetch: fetchData, 
        reset
    };
}

export default useFetch;