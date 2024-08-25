import { useEffect, useState } from "react";
import { fetchAllBookAPI } from "../service/api_service";


export const LinhTinh = () => {
    const [data, setData] = useState();

    useEffect(async () => {
        const res = await fetchAllBookAPI(1, 10);
        setData(res.data.result);
    }, []);

    return (<>

        {JSON.stringify(data)}

    </>);
}