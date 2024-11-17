
import CustomButton from "../custom-button/CustomButton";

import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <NavLink to="/"><CustomButton> Go to home</CustomButton>  </NavLink>
    </div>
  );
};

export default NotFoundPage;
