import { BasicPage } from "../components/BasicPage";
import Person from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

export const WelcomePage = () => {
  return(<div>
    <h1>WELCOME USER</h1>
    <Link to="/dashboard/products">MENU</Link>
        </div>)
};
