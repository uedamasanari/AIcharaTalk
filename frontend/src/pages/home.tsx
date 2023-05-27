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
      wrapClass: 'settingArea',
      imageClass: 'settingImage',
      rowGrid: '1/2',
      columnGrid: '1/2',
    },
    {
      path: '/button/notice.svg',
      name: 'notice',
      wrapClass: 'noticeArea',
      imageClass: 'noticeImage',
      rowGrid: '1/2',
      columnGrid: '1/2',
    },
    {
      path: '/button/youtube.svg',
      name: 'youtube',
      wrapClass: 'youtubeArea',
      imageClass: 'youtubeImage',
      rowGrid: '1/2',
      columnGrid: '1/2',
    },
    {
      path: '/button/vote.svg',
      name: 'vote',
      wrapClass: 'voteArea',
      imageClass: 'voteImage',
      rowGrid: '1/2',
      columnGrid: '1/2',
    },
    {
      path: '/button/shop.svg',
      name: 'shop',
      wrapClass: 'shopArea',
      imageClass: 'shopImage',
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
      <div className={styles.topArea}>
        <div className={styles.topLeftArea}>
          <div className={styles.icon}>
            <Image
              width={85}
              height={85}
              src="/gura.svg"
              alt="guraの画像"
              className={styles.iconImage}
            />
          </div>
          <div className={styles.nameObj}>
            <p className={styles.nameText}>ぐら</p>
          </div>
          <div className={styles.tokenObj}>
            <Image src="/token.svg" alt="tokenの画像" width={60} height={60} className={styles.tokenImage}/>
            <p className={styles.tokenText}>50</p>
            <Image
              src="/tokenPlus.svg"
              alt="tokenの画像"
              width={35}
              height={35}
                className={styles.tokenPlusImage}
            />
          </div>
        </div>

        <div className={styles.menuButtonFlex}>
          {images.map((image, index) => (
            <div className={styles[image.wrapClass]} key={index}>
              <Image
                width={98}
                height={98}
                src={image.path}
                alt={`${image.name}の画像`}
                className={styles[image.imageClass]}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottomArea}>
        <div className={styles.changeArea}>
          <Image
            width={98}
            height={98}
            src="/button/change.svg"
            alt="changeの画像"
            className={styles.changeImage}
          />
        </div>
        <div className={styles.inputTextArea}>
          <input type="text" className={styles.inputTextObj} />
        </div>
        <div className={styles.voiceArea}>
          <Image
            width={48}
            height={48}
            src="/button/voice.svg"
            alt="voiceの画像"
            className={styles.voiceImage}
          />
        </div>
        <div className={styles.logArea}>
            <Image
              width={48}
              height={48}
              src="/button/log.svg"
              alt="logの画像"
              className={styles.logImage}
            />
        </div>
      </div>
    </div>
  )
}
