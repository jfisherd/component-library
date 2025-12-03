import type { UserProfileCardProps } from "../../types";

export const UserProfileCard = (props: UserProfileCardProps) => {
    return (
        <>
            <div>User {props.user.name}</div>
            <div>Email: {props.showEmail? props.user.email: 'email not shown'}</div>
            <div>Role: {props.showRole? props.user.role: 'role not shown'}</div>
        </>
    )
}

// export default UserProfileCard