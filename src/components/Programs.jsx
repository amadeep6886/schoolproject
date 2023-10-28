import { AiFillCaretRight, AiFillCrown } from "react-icons/ai";
import SectionHead from "./SectionHead";
import { programs } from "../data";
import Card from "../ui/Card";
import { Link } from "react-router-dom";
import styles from "./Programs.module.css";
const Programs = () => {
  return (
    <>
      <section className={styles.programs}>
        <div className={`${styles.container} ${styles.programs__container}`}>
          <SectionHead icon={<AiFillCrown />} title="programs" />
          <div className={styles.programs__wrapper}>
            {programs.map(({ id, icon, title, info, path }) => {
              return (
                <Card className={styles.programs__program} key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{info}</small>
                  <Link to={path} className={`${styles.btn} ${styles.sm}`}>
                    Learn More <AiFillCaretRight />
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
