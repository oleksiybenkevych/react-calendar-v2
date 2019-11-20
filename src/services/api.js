import axios from "axios";

export function saveRange(range) {
  axios.post("https://jsonplaceholder.typicode.com/todos/1", { range });
}
