import { useEffect, useState } from "react"
import { api } from "../../../api/cep.api";
import { ICep } from "./ICep";

export interface PropsResultsCep{
    valueCep: null
}

export interface ResultsCepExit{
    cep: ICep | undefined;
}

export const useResultsCep = (props: PropsResultsCep): ResultsCepExit => {
    const [cep,setCep] = useState<ICep>()
    useEffect(() => {
        api.get(`${props.valueCep}/json`).then((res) => setCep(res.data)).catch(console.error);
    }, [cep, props.valueCep])

    return {
        cep
    }
}