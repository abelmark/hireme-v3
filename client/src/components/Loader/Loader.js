import React from "react";

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
