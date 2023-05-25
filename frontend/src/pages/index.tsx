import styles from '@/styles/Home.module.css'
import Image from "next/image";
import { useAtom } from 'jotai';
import { nowBgimg } from '@/atom/bgimg';

export default function Home() {
  const [bgimg, setBgimg] = useAtom(nowBgimg);
  return (
    <div>
      <Image
        src="images/map/arrival.svg"
        alt=""
        width={200}
        height={50}
        className={`${styles.arrival}`}
    />
    </div>
  )
}
