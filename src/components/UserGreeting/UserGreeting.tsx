import PropTypes from "prop-types";
import styles from "./UserGreeting.module.css";

function UserGreeting(props) {
  const welcome = (
    <h1 className={styles.welcome}>
      Welcome back, {props.username || "unknown"}!
    </h1>
  );
  const login = <h1 className={styles.login}>Please login.</h1>;

  return props.isLoggedIn ? welcome : login;
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
};

export default UserGreeting;
