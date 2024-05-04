import { ReactNode, useState } from "react";
import UserContext, { User } from "./Usercontext";

interface children {
  children: ReactNode;
}
function UserContextProvider({ children }: children) {
    const [user, setUser] = useState<User>({
        user:"",
        passward:""
    })
    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
