
// client/src/pages/create/index.js

import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

const Create = ({ username, setUsername, room, setRoom, users ,setUsers, socket }) => {

const navigate = useNavigate(); 

const createRoom = () => {
    if (room !== '' && username !== '') {
      socket.emit('join_room', { username, room });
       navigate('/chat', { replace: true });
    }
       // Redirect to /chat
    
     else{
     	navigate('/');
     }
  };


 

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`<>DevRooms</>`}</h1>
        <input className={styles.input} placeholder='Creator name...'
         onChange={(e) => setUsername(e.target.value)} />

        <input  className={styles.input} placeholder='Group Code...'
        onChange={(e) => setRoom(e.target.value)} />

         <input type="number" className={styles.input} placeholder='Number of members...'
        onChange={(e) => setUsers(e.target.value)} />
        

        

        <button className='btn btn-secondary'  style={{ width: '100%' }}
        onClick={createRoom}
        >Create Room</button>


      </div>
    </div>
  );
};

export default Create;