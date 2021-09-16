import logo from './logo.svg';
import './App.css';
import { io } from "socket.io-client";

function App() {
  const SERVER = "http://localhost:5000"
  const socket = io(
    SERVER,
    {
      auth: {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM2NTZjMDM1LWEzNTctNDJjMy04MTk4LWRjNThjYTE3ZDZmYiIsInVzZXJuYW1lIjoiTmV3IHVzZXIiLCJlbWFpbCI6Im5ld3VzZXJAbWFpbC5jb20iLCJjcmVhdGVkQXQiOiIyMDIxLTA5LTE1VDA5OjQ5OjExLjQ5OVoiLCJ1cGRhdGVkQXQiOiIyMDIxLTA5LTE1VDA5OjQ5OjExLjQ5OVoiLCJpYXQiOjE2MzE3MDQ5Mzd9.2G8tembVzhD0K3vVxXmzhML0LU-t_lCo7rQqqA72dTQ"
      }
    }
  );

  socket.on("connect", () => {
    console.log('<<<<<<<Connected <><><>', socket.connected);
  });

  socket.on('notification', (notification) => {
    console.log('<<<<<<<NOTIFICATION FROM SERVER>>>>>>>>>', notification);
  });
  socket.on('rooms', (rooms) => {
    console.log('AVAILABLE ROOMS on server', rooms);
  });
  
  socket.on("disconnect", () => {
    console.log('Disconnected<><>>', socket.connected);
  });

  socket.on("connect_error", (error) => {
    console.log('On Error <><>>', error); 
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
