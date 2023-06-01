const axios = require("axios");
const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());

server.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const response = await axios({
      method: 'put',
      url: "https://api.chatengine.io/users/",
      headers: { "Private-Key": "fbcf8c21-2008-4be9-9482-4fe134760af3" },
      data: { username, secret: username, first_name: username },
    });
    
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
});

const PORT = 3001;
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
