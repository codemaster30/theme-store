import { redirect } from "next/navigation";

const PrivetRoute = ({ children }) => {
  if (userDta) {
    return children;
  }
  return redirect("/login");
};

export default PrivetRoute;
