import React from 'react';

const UserCard = (props) => {
console.log(props);
    return (
        <div className='ui card'>
			<div className='content'>
				<div className='Header'>Title</div>
					<div className='description'>
					{props.children}
					</div>
			</div>
				<div className='ui bottom button'>
					<i className='add icon'></i>
						Add Friend
				</div>
		</div>

    )
}

export default UserCard;