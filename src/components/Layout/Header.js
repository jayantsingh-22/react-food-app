import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import foodImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>PiattoSquisito</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <div className={classes["main-image"]}>
        <img src={foodImage} alt="A glance of our dishes." />
      </div>
    </Fragment>
  );
};

export default Header;
