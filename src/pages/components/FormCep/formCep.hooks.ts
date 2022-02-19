import { useCallback, useState } from "react"


export interface FormCepExit{
    onChangeForm: (event: any) => void;
    onClickForm: (ev: any) => void;
    cepValueOFF: null;
}

export const useFormCep = (): FormCepExit => {
    const [cepValue,setCepValue] = useState(null)
    const [cepValueOFF,setCepValueOFF] = useState(null)

    const onChangeForm = useCallback((event) => {
      setCepValue(event.target.value);  
    }, [cepValue])

    const onClickForm = useCallback((ev) => {
        ev.preventDefault();
        setCepValueOFF(cepValue)
    }, [cepValue, cepValueOFF])

    return{
        onChangeForm,
        onClickForm,
        cepValueOFF
    }
}

