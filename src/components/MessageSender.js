import React,{useState} from 'react';
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PersonIcon from '@material-ui/icons/Person';
import { useStateValue } from './StateProvider';
import db from "./firebase";
import firebase from "firebase";

function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            message : input,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            profilePic : user.photoURL,
            username : user.displayName,
            image : imageUrl
        })
    }

    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar src={user.photoURL} />
                <form>
                    <input type="text" className="messageSender_input"
                        value={input}
                        onChange={(e)=>setInput(e.target.value)}
                        placeholder = {`Whats on your mind, ${user.displayName}?`} style={{height:"30px"}} />
                    <input type="text" 
                        value={imageUrl}
                        onChange={(e)=>setImageUrl(e.target.value)}
                        placeholder={"image URL"}/>
                    <button onClick={handleSubmit}>Hidden Submit</button>
                </form>
            </div>
            <div className="messageSender_bottom">
                <div className="messageSender_option">+
                    <PhotoLibraryIcon style={{color:"green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender_option">
                    <PersonIcon style={{color:"blue"}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticonIcon style={{color:"yellow"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender;
