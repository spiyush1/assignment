import React from 'react'
import './Cards.css';

function Cards({userData}) {
    const data = userData?userData.data.data:null ;
    
    return (
        <div className = 'cards'>
        {
            data?data.map((user) => (
            <div key = {user.id} id = 'card'>
                <img src = {user.avatar} alt = 'avatar' />
                <div className = 'container'>
                    <p className = 'first'>{`${user.first_name} ${user.last_name}`}</p>
                    <p>{user.email}</p>
                </div>
            </div>
            )):<div className = 'content'>Click Get Users to display Content</div>
        }
        </div>
    )
}

export default Cards
