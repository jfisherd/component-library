import type { AlertBoxProps } from "../../types";

export const AlertBox = (props: AlertBoxProps) => {
    return (
        <>
            <div>my alert box</div>
            <div>Message: {props.message}</div>
        </>
    )
}