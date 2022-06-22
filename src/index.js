import React from 'react';
import ReactDOM from 'react-dom/client';
import profile1 from './imagenes/penguin.png';
import profile2 from './imagenes/kirby_angry.png';
import profile3 from './imagenes/kirby_happy.png';
import SingleComment from './SingleComment';
import UserCard from './UserCard';

const App = () => {
    return (
        <div className='ui comments'>

        <UserCard>
        	<div>
        		user card con texto plano.
        	</div>
        </UserCard>
        <UserCard>
        	
        	<SingleComment 
        	name='Pingus'
        	date='Today at 1:00 pm'
        	text='fat yoshi never say hi to me.'
        	picture={profile1}
        	/>
        </UserCard>
<UserCard>
	
        	<SingleComment 
        	name='Angry Kirby'
        	date='Today at 2:00 pm'
        	text='yeah he is always rude.'
        	picture={profile2}
        	/>
</UserCard>

<UserCard>
	
        	<SingleComment 
        	name='Happy Kirby'
        	date='Today at 3:00 pm'
        	text='im glad he is not part of the club anymore.'
        	picture={profile3}
        	/>
</UserCard>
        </div>
    )
}
/*
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
*/

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)