import styles from '@/styles/Home.module.scss'
import Image from 'next/image'
import { useAtom } from 'jotai'
import { nowBgimg } from '@/atom/bgimg'
import Circle from '@/components/Circle'

export default function Home() {
  const images = [
    {
      path: '/button/setting.svg',
      name: 'setting',
      class: 'setting',
      rowGrid: '1/2',
      columnGrid: '1/2',
    },
    {
      path: '/button/notice.svg',
      name: 'notice',
      class: 'notice',
      rowGrid: '1/2',
      columnGrid: '1/2',
    },
    {
      path: '/button/youtube.svg',
      name: 'youtube',
      class: 'youtube',
      rowGrid: '1/2',
      columnGrid: '1/2',
    },
    {
      path: '/button/vote.svg',
      name: 'vote',
      class: 'vote',
      rowGrid: '1/2',
      columnGrid: '1/2',
    },
    {
      path: '/button/shop.svg',
      name: 'shop',
      class: 'shop',
      rowGrid: '1/2',
      columnGrid: '1/2',
    },
  ]
  return (
    <div className={styles.grid}>
      <Image
        src="/guraBig.svg"
        alt=""
        width={200}
        height={50}
        className={styles.guraBig}
      />
      <div className={styles.icon}>
        <Circle
          width={85}
          height={85}
          path="/gura.svg"
          alt="guraの画像"
          imgHeight={70}
          imgWidth={70}
        />
      </div>
      <div className={styles.nameArea}>
        <div className={styles.nameObj}>
          <p className={styles.nameText}>ぐら</p>
        </div>
      </div>
      <div className={styles.tokenArea}>
        <div className={styles.tokenObj}>
          <Image src="/token.svg" alt="tokenの画像" width={35} height={35} />
          <p className={styles.tokenText}>50</p>
          <Image
            src="/tokenPlus.svg"
            alt="tokenの画像"
            width={15}
            height={15}
          />
        </div>
      </div>
      <div className={styles.changeArea}>
        <Circle
          width={48}
          height={48}
          path="/button/change.svg"
          alt="changeの画像"
          imgHeight={35}
          imgWidth={35}
        />
      </div>
      <div className={styles.menuButtonFlex}>
        {images.map((image, index) => (
          <div className={styles[image.class]} key={index}>
            <Circle
              width={48}
              height={48}
              path={image.path}
              alt={`${image.name}の画像`}
            />
          </div>
        ))}
      </div>
      <div className={styles.bottomArea}>
        <div className={styles.logArea}>
          <div className={styles.dummyArea} />
          <Circle
            width={48}
            height={48}
            path="/button/log.svg"
            alt="logの画像"
          />
        </div>
        <div className={styles.inputTextArea}>
          <input type="text" className={styles.inputTextObj} />
          <Circle
            width={48}
            height={48}
            path="/button/voice.svg"
            alt="voiceの画像"
          />
        </div>
      </div>
    </div>
  )
}
