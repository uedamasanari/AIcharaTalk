import styles from '@/styles/Home.module.scss'
import Image from "next/image";
import { useAtom } from 'jotai';
import { nowBgimg } from '@/atom/bgimg';
import Circle from '@/components/Circle';

export default function Home() {
    const images = [
        {
            path:"/home/icon",
            name:"setting",
            class:"setting",
            rowGrid:"1/2",
            columnGrid:"1/2"
        },
        {
            path:"/home/icon",
            name:"notice",
            class:"notice",
            rowGrid:"1/2",
            columnGrid:"1/2"
        },
        {
            path:"/home/icon",
            name:"youtube",
            class:"youtube",
            rowGrid:"1/2",
            columnGrid:"1/2"
        },
        {
            path:"/home/icon",
            name:"vote",
            class:"vote",
            rowGrid:"1/2",
            columnGrid:"1/2"
        },
        {
            path:"/home/icon",
            name:"shop",
            class:"shop",
            rowGrid:"1/2",
            columnGrid:"1/2"
        },
    ]
  return (
    <div className={styles.grid}>
        <div className={styles.icon}>
            <Circle width={85} height={85}/>
        </div>
        <div className={styles.nameArea}>
            <div className={styles.nameObj} />
        </div>
        <div className={styles.tokenArea}>
            <div className={styles.tokenObj} />
        </div>
        <div className={styles.changeArea}>
            <Circle width={48} height={48} />
        </div>
        <div className={styles.menuButtonFlex}>
            {images.map((image, index) => (
                <div className={styles[image.class]} key={index}>
                    <Circle width={48} height={48} />
                </div>
            ))}
        </div>
        <div className={styles.talkButtonArea}>
            <Circle width={48} height={48} />
            <Circle width={48} height={48} />
        </div>
        <div className={styles.inputTextArea}>
            <div className={styles.inputTextObj} />
        </div>
    </div>
  )
}
