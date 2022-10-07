import './App.css';
import { useState } from 'react'; 
import Chat from './pages/chat';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import io from 'socket.io-client'; 
import Home from './pages/home';
import Create from './pages/create';

//main page

const socket = io.connect('http://localhost:4000'); // Add this -- our server will run on port 4000, so we connect to it from here


function App() {

   const [username, setUsername] = useState(''); // Add this
  const [room, setRoom] = useState(''); // Add this

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home
             username={username} 
                setUsername={setUsername}
                room={room} 
                setRoom={setRoom} 
                socket={socket}
           />
         }
            />


            <Route path='/create' element={<Create
             username={username} 
                setUsername={setUsername}
                room={room} 
                setRoom={setRoom} 
                socket={socket}
           />
         }
            />

        <Route
            path='/chat'
            element={<Chat username={username} room={room} socket={socket} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;