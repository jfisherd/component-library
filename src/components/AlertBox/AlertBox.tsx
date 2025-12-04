import type { AlertBoxProps } from "../../types";

export const AlertBox = (props: AlertBoxProps) => {
    return (
        <>
            <div>[I am a generic div]</div>
            <div>Alert message: "{props.message}"</div>
        </>
    )
}