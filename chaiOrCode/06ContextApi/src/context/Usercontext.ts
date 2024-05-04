import { SetStateAction, createContext } from "react";

export type User = {
  user: string;
  passward: string;
};
interface UsestateType {
  user: User;
  setUser:React.Dispatch<SetStateAction<User>>;
}

const userContext = createContext<UsestateType>({} as UsestateType)
export default userContext