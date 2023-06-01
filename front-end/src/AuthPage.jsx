import axios from "axios";
import { useState } from "react";

const AuthPage = ({ onAuth }) => {
  const [username, setUsername] = useState("");

  const handleAuthSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3001/authenticate", { username });
      onAuth({ ...data, secret: username });
    } catch (error) {
      console.error("Authentication Error", error);
    }
  };

  return (
    <div className="background">
      <form onSubmit={handleAuthSubmit} className="form-card">
        <div className="form-title">Hooli Chat</div>
        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input
            className="auth-input"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
