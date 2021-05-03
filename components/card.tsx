import Image from "next/image";
import styles from "../styles/card.module.css";

type Props = {
  src: string;
  height: string;
  width: string;
  alt?: string;
  onClick?: () => void;
};

const rotateLimit = 3;

const getRandomDeg = () => {
  const degrees = Math.ceil(Math.random() * rotateLimit * 2);
  const rotateDeg =
    degrees > rotateLimit ? degrees - rotateLimit : 360 - degrees;

  return rotateDeg;
};

export default function Card({ src, height, width, alt, onClick }: Props) {
  const rotateDeg = getRandomDeg();
  return (
    <div
      className={styles.wrapper}
      onClick={onClick}
      style={{ transform: `rotate(${rotateDeg}deg)` }}
    >
      <Image src={src} height={height} width={width} alt={alt} />
    </div>
  );
}
