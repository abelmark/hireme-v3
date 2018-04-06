import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/index";
import Aux from "../../hoc/Aux";

import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <div>
        <h1>
          Loading...
        </h1>
      </div>
    </div>
  );
}

export default Loader;
