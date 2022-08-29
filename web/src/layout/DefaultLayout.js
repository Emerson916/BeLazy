import Header from "./Header";
import Content from "./Content";
// import { useHistory } from "react-router-dom";
// import { isAuth } from "../services/auth";
// import Sidebar from "./Sidebar";

const DefaultLayout = () => {
  // const history = useHistory();
  // const userAuth = isAuth();

  // if (!userAuth) {
  //   setTimeout(() => {
  //     history.push("/");
  //   }, 0);
  //   return <></>;
  // }
  return (
    <div>
      <Header />
      {/* <Sidebar /> */}
      <Content />
    </div>
  );
};
export default DefaultLayout;
