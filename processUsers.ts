 
import axios from "axios";

async function fetchUsers() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log("Fetched Users:", response.data);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

fetchUsers();
