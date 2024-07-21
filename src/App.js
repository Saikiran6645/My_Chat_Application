import ChatFeed from "./components/ChatFeed";
import { ChatEngine } from "react-chat-engine";

import LoginForm from "./components/LoginForm";
import "./App.css";

const projectID = "29ccb217-30f3-40ab-9585-199ac2aedd89";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      //   onNewMessage={() =>
      //     new Audio(
      //       "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
      //     ).play()
      //   }
    />
  );
};

export default App;
