import axios from "axios";
import { AuthContext } from "context/AuthContext";
import { useContext, useEffect, useRef, useState } from "react";
import { format } from "timeago.js";
import "./message.css";
import { MessageContext } from "context/MessageContext";
import {
  TextField,
  Typography,
  Avatar,
  Divider,
  Box,
  Container,
} from "@material-ui/core";
import DoneAllIcon from "@material-ui/icons/DoneAll";
const getMessagesWithUsers = (messages, usersInProject) => {
  return messages?.map((message) => {
    message["user"] = usersInProject.find(
      (user) => user.id === message.user_id
    );
    delete message.user_id;
    return message;
  });
};

export default function Message({ project }) {
  const [inputMessage, setInputMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const { user } = useContext(AuthContext);
  const scrollRef = useRef();

  const { setSocketMessage, receivedMessage } = useContext(MessageContext);

  useEffect(() => {
    if (receivedMessage?.project_id === project.id) {
      setAllMessages([...allMessages, receivedMessage]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [receivedMessage]);

  useEffect(() => {
    axios
      .get(`/api/projects/${project.id}/messages`)
      .then((result) => {
        const messages = getMessagesWithUsers(result.data, project.users);
        setAllMessages([...messages]);
      })
      .catch((err) => console.log("could not get messages", err.message));
  }, [user.id, project.id, project.users]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [allMessages]);

  const submitHandler = (e, user, project, message) => {
    e.preventDefault();
    setInputMessage("");

    const newMessage = {
      user_id: user.id,
      project_id: project.id,
      message: message,
    };

    axios
      .post(`/api/projects/${project.id}/messages`, newMessage)
      .then((result) => {
        const receivedMessage = result.data[0];
        receivedMessage["user"] = user;
        delete receivedMessage.user_id;
        setSocketMessage(receivedMessage);
      })
      .catch((err) =>
        console.log("could not add message to database", err.message)
      );
  };

  return (
    <div className="project_messages">
      <div className="all_project_messages">
        {allMessages.map((message, index) => (
          <div key={index} ref={scrollRef}>
            <div className="each_project_message">
              <div>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "1em",
                    marginBottom: "1em",
                  }}
                >
                  {/* This img avatar does not work sometimes */}
                  {/* <img
                    src={message.user?.avatar}
                    alt={message.user?.user_name}
                  /> */}
                  {/* <Typography>{user?.user_name}</Typography> */}
                  <Avatar style={{ backgroundColor: "#673ab7" }}>
                    {user?.user_name.charAt(0)}
                  </Avatar>{" "}
                  <Typography
                    style={{
                      marginLeft: "10px",
                      marginTop: "5px",
                      color: "#482880",
                    }}
                  >
                    {user?.user_name}
                  </Typography>
                </Box>

                {/* <img src={message.user?.avatar} alt={message.user?.user_name} /> */}
              </div>
            </div>
            {/* <p className="project_message_time"> */}
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "6px",
              }}
            >
              <Typography>{message.message}</Typography>
              <Typography>
                {format(message.sent_time)}
                <DoneAllIcon style={{ color: "#673ab7", padding: "3px" }} />
              </Typography>
            </Box>
            <Divider style={{ backgroundColor: "#673ab7", marginTop: "3px" }} />

            {/* </p> */}
          </div>
        ))}
      </div>

      <div>
        <br />
        <form onSubmit={(e) => submitHandler(e, user, project, inputMessage)}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Enter Message..."
            color="secondary"
            className="chat_message_input"
            type="text"
            // placeholder="write something..."
            value={inputMessage}
            onChange={(e) => {
              setInputMessage(e.target.value);
            }}
          ></TextField>
          {/* d<button type="submit">Send</button> */}
        </form>
      </div>
    </div>
  );
}
