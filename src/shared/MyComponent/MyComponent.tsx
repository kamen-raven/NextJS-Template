import React from "react";
import styles from "./MyComponent.module.scss";

const MyComponent: React.FC = () => {
  return (
    <div>
      <h1 className = {styles.text}>
        Hello World!
      </h1>
    </div>
  );
};

export default MyComponent;