import styles from "./Card.module.css";

const Card = ({ className, children }) => {
  return (
    <>
      <article className={`${styles.card} ${className}`}>{children}</article>
    </>
  );
};

export default Card;
