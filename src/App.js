import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';
import { generateUtilityClass } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import {LogoutButton} from LogoutButton



const projectID = 'bebf9354-dd3f-4de7-be60-e980742acb0f';


const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID= {projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...


// const App = () => {
//   return (
//     <ChatEngine
//       height="100vh"
//       projectID= "bebf9354-dd3f-4de7-be60-e980742acb0f"
//       userName="Abhinand"
//       userSecret= ""
//       renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
//     />
//   );
// };


export default App;