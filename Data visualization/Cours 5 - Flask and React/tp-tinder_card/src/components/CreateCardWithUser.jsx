import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card'

var api_url = 'http://127.0.0.1:5000/get_women'

//function changeSexe() {
//    if (api_url==='http://127.0.0.1:5000/get_women'){
//        api_url = 'http://127.0.0.1:5000/get_men'
//    } else {
//        api_url = 'http://127.0.0.1:5000/get_women'
//    }
//}

const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
}
  
const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
}


export function CreateCardWithUser() {
    console.log("Encore");
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUser() {
        try {
            const response = await fetch(api_url);
            const data = await response.json();
            console.log(data)
            setUsers(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching users data:", error);
            setLoading(false);
        }
        }

        fetchUser();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!users) {
        return <div>Error loading users data.</div>;
    }

    return (
        <div class='box'>
            <div id="title">
                <h1> Tinder clone </h1>
            </div>
            <div className='card-container'>
                {users.map (user =>
                    <TinderCard className="swipe" key={user.id}
                                onSwipe={onSwipe}
                                onCardLeftScreen={()=>onCardLeftScreen('fooBar')}
                                preventSwipe={['right', 'left']}>
                        <div className='card'>
                            <img src={user.photo}></img>
                            <p id="info1">{`${user.firstname}, ${user.age}`}</p>
                            <p id="info2">{`${user.city}, ${user.country}`}</p>
                        </div>
                    </TinderCard>
                )}
            </div>
        </div>
    );
}

// <button id="changeSexe" onClick={()=>changeSexe()}>Change sexe to Male</button>