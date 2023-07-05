/** @format */

import { Result } from "../interfaces";
import styles from "../styles/card.module.css";
export const Card = ({ image, id, gender, name }: Result) => {
  return (
    <article className={styles.item}>
      <div>
        <img src={image} className={styles.item__image} />
      </div>
      <div
        style={{
          marginLeft: 20,
        }}
      >
        <h2>{gender}</h2>
        <p>{name}</p>
      </div>
    </article>
  );
};
