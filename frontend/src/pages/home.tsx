import styles from '@/styles/Home.module.scss'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { nowBgimg } from '@/atom/bgimg'
import Circle from '@/components/Circle'

// const SpeechRecognition =
//   (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition

// const SpeechRecognitionEvent =
//   (window as any).SpeechRecognitionEvent ||
//   (window as any).webkitSpeechRecognitionEvent

export default function Home() {
  const [recognition, setRecognition] = useState<any>(null)
  const [transcript, setTranscript] = useState<string>('')
  const [isVoice, setIsVoice] = useState<boolean>(false)

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition

    if (!SpeechRecognition) {
      console.log(
        "Your browser doesn't support speech recognition software, try Chrome."
      )
    } else {
      const recognitionObj = new SpeechRecognition()
      recognitionObj.continuous = true
      recognitionObj.interimResults = true

      recognitionObj.onresult = (event: any) => {
        let tempTranscript = ''
        for (let i = event.resultIndex; i < event.results.length; i++) {
          tempTranscript += event.results[i][0].transcript
        }
        setTranscript(tempTranscript)
      }

      setRecognition(recognitionObj)
    }
  }, [])

  const startListening = () => {
    recognition.start()
    setIsVoice(true)
    console.log('start')
  }

  const stopListening = () => {
    recognition.stop()
    setIsVoice(false)
    console.log(transcript)
  }

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
      {isVoice === true ? (
        <>
          <div className={styles.voiceModal}>
            <div className={styles.text}>音声入力</div>
            <Image className={styles.mic} src="/home/mic.svg" alt="" width={48} height={48} />
            <Image className={styles.stop} src="/home/stop.svg" alt="" width={48} height={48} onClick={stopListening}/>
          </div>
          <div className={styles.modalBG} />
        </>
      ) : (
        <>
        </>
      )}
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
            <Image
              src="/token.svg"
              alt="tokenの画像"
              width={60}
              height={60}
              className={styles.tokenImage}
            />
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
          {isVoice === false ? (
            <Image
            width={48}
            height={48}
            src="/button/voice.svg"
            alt="voiceの画像"
            className={styles.voiceImage}
            onClick={startListening}
          />
          ) : (
            <Image
              width={48}
              height={48}
              src="/button/voice.svg"
              alt="voiceの画像"
              className={styles.voiceImage}
            />
          )}
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
