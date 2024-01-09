import React from "react";

const User = React.memo(function User({user, onRemove, onToggle}) {
    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
            onClick={() => onToggle(user.id)}>
                {user.username}
            </b>
            &nbsp;
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
});

function UserList({users, onRemove, onToggle }) { 
    return (
        <>
            <h1>배열 렌더링 & 삭제 & 토글</h1>
            <div>
                {users.map(user => (
                    <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
                ))}
            </div>
        </>
    );
}

export default UserList;