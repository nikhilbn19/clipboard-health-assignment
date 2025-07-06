 
import axios from "axios";
import { writeFileSync } from "fs";

async function fetchUsers() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log("Fetched Users:", response.data);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

fetchUsers();

async function fetchAndFilterUsers() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const users = response.data;

    // Filter users whose company name includes 'Group'
    const filtered = users.filter((user: any) =>
      user.company.name.includes("Group")
    );

    console.log("Filtered Users:", filtered);

    // Save to filteredUsers.json
    writeFileSync("filteredUsers.json", JSON.stringify(filtered, null, 2));
    console.log("✅ Filtered users saved to filteredUsers.json");
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchAndFilterUsers();

