import { useState } from "react";
import "./App.css";
import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="App">
      {currentUser ? <ChatsPage user={currentUser} /> : <AuthPage onAuth={setCurrentUser} />}
    </div>
  );
};

export default App;
