<<<<<<< HEAD
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
=======
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
>>>>>>> 4bdd1a9331736c6b0d10133311b1824c8abd6e4b

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
