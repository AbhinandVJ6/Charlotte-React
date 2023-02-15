import { useNavigate } from 'react-router-dom';

function LogoutButton() {
  const history = useNavigate();

  const handleLogout = () => {
    // Implement your logout functionality here
    // For example, clear session data or call logout API
    // Then, navigate to the sign-in page
    history.push('LoginForm/');
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}
const MyMessage = ({ message }) => {
  if (message.attachments && message.attachments.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: 'right' }}
      />
    );
  }

  return (
    <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
      {message.text}
    </div>
  );
};

export default MyMessage;