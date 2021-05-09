import { ReactNode } from "react";
import classNames from "classnames";
import styles from "../styles/card.module.css";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

const rotateLimit = 3;

const getRandomDeg = () => {
  const degrees = Math.floor(Math.random() * rotateLimit * 2);
  const rotateDeg =
    degrees > rotateLimit ? degrees - rotateLimit : 360 - degrees;

  return rotateDeg;
};

export default function Card({ children, onClick, className }: Props) {
  const rotateDeg = getRandomDeg();
  const classnames = classNames(styles.wrapper, className);
  return (
    <div
      className={classnames}
      onClick={onClick}
      style={{ transform: `rotate(${rotateDeg}deg)` }}
    >
      {children}
    </div>
  );
}
