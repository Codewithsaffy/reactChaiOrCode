import { useContext } from "react";
import UserContext from "../context/Usercontext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user.passward) return <h1>Please Login</h1>;
  else {
    return <h1>Welcome {user.user}</h1>;
  }
}

export default Profile;
