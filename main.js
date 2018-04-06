const fetch = require("node-fetch");
const BASE_URL = "http://localhost:3000";

fetch(`${BASE_URL}/api/user`, {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization:
      "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI1YWM2ZGE2YjZjYWIzOWMzMTZkNzgxZDgiLCJ1c2VybmFtZSI6InNvbWV1c2VyIiwiZXhwIjoxNTI4MTY1NDgzLCJpYXQiOjE1MjI5ODE0ODN9.RC_na3_0lmp49pzJB2slVIC1WwOed7mHYu4JpE4q4qg"
  }
})
  .then(data => data.json())
  .then(data => console.log(data));
