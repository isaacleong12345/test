import styles from "./Student.module.css";
import PropTypes from "prop-types";

function Student(props) {
  return (
    <div className={styles.student}>
      <h2>Student Information</h2>
      <p>Name: {props.name || "Unknown"}</p>
      <p>Age: {props.age || 0}</p>
      <p>Student:{props.age < 22 ? " Yes" : " No"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default Student;
