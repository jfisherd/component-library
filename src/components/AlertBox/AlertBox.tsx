import type { AlertBoxProps } from "../../types";

export const AlertBox = (props: AlertBoxProps) => {
    const now = new Date()
    return (
        <>
            <div>Process update @ {now.toString()}.</div>
            <div>Message: "{(props.message)}"</div>
        </>
    )
}