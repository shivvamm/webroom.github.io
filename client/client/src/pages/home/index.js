import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

const Home = ({ username, setUsername, room, setRoom, socket }) => {

const navigate = useNavigate(); 

const joinRoom = () => {

    if (room !== '' && username !== '') {
      socket.emit('join_room', { username, room });
       navigate('/chat', { replace: true }); 
    }
     
      // Redirect to /chat
     else{
      navigate('/');
     }
  };


  const createRoom = () => {
      // Redirect to /chat
     navigate('/create', { replace: true }); 
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`<>WebRooms</>`}</h1>
        <input className={styles.input} placeholder='Username...'
         onChange={(e) => setUsername(e.target.value)} />

        <input  className={styles.input} placeholder='Group Code...'
        onChange={(e) => setRoom(e.target.value)} />
        

        <button className='btn btn-secondary'  style={{ width: '100%' }}
        onClick={joinRoom}
        >Join Room</button>
        
        <p>OR</p>

        <button className='btn btn-secondary'  style={{ width: '100%' }}
        onClick={createRoom}
        >Create Room</button>
      </div>
    </div>
  );
};

export default Home;