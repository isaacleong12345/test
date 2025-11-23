import profilePic from "/long.jpg";
import styles from "./Card.module.css";

function Card(props) {
  return (
    <div className={styles.card}>
      <img
        className={styles.cardimg}
        src={profilePic}
        alt="profit picture"
        style={{ width: "200px", height: "200px" }}
      ></img>
      <h2 className={styles.cardtitle}>Name:{props.name}</h2>
      <p className={styles.cardtext}>
        Age:{props.age}
        <br />
        Student:{props.age < 18 ? "Yes" : "No"}
      </p>
    </div>
  );
}

export default Card;
