import { client } from "@repo/db/client";

export default async function Home() {
const user = await client.user.findFirst();

  return (
    <div>
      <h1>Welcome to BookShow 🚀+🚀</h1>
      <p>First User: {user ? user.username : "No users found"}</p>
      <p>Current User ID: {user ? user.id : "No user ID available"}</p>
      <p>Current User Password: {user ? user.password : "No user password available"}</p>
    </div>
  );
}
