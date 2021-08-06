import React, {useRef, useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {ChatEngine} from 'react-chat-engine';
import {auth} from '../firebase'
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';
import Logo from '../Assets/icon-loading.gif'
import '../index.css'

const Chats = () => {

    
    const history = useHistory();
    const {user} = useAuth();
    const [loading , setLoading] = useState(true);

    const handleLogout = async () => {
        await auth.signOut();

        history.push('/');
    }

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();

        return new File([data] , 'userPhoto.jpg', { type: 'image/jpeg'})
    }

    useEffect(()=> {
        if(!user) {
            history.push('/');
            return;
        }
        axios.get('https://api.chatengine.io/users/me', {
            headers:{
                "project-id":"800e103d-3442-4cac-a02c-6d4694e2f700",
                "user-name": user.email, 
                "user-secret": user.uid,
            }
        })
        .then(()=>{
            setLoading(false);
        })
        .catch(() => {
            let formdata = new FormData();
            formdata.append('email', user.email);
            formdata.append('username', user.email);
            formdata.append('secret' , user.uid);

            getFile(user.photoURL)
            .then((avatar) => {
                formdata.append('avatar' , avatar, avatar.name)

                axios.post('https://api.chatengine.io/users/', formdata, {
                    headers : {"private-key": "b758c677-8835-478a-b38e-e6544cb09cba" }}
                )
                .then(() => setLoading(false))
                .catch((error) => console.log(error))

            })
        })
    }, [user,history])

        if(!user || loading) return <img src={Logo} className="loading"/>

    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">                    
                
                </div>
                <div onClick={handleLogout} className="logout-tab">
                  Sair   
                </div>
            </div>
            <div style={{fontFamily: 'Poppins'}}>
            <ChatEngine 
                height="calc(100vh - 60px)"
                projectID ="800e103d-3442-4cac-a02c-6d4694e2f700"
                userName = {user.email}
                userSecret ={user.uid}
                offset = {-3} 
                
                                 
            /> 
            </div>
            
        </div>
    );
}

export default Chats 