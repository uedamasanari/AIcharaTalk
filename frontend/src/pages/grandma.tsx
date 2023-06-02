import styles from '@/styles/Home.module.scss'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { useAtom } from 'jotai'
import { nowBgimg } from '@/atom/bgimg'
import Circle from '@/components/Circle'

export default function Home() {
  const [nowImg, setNowImg] = useState<string>("/demo/grandma-normal.png")
  const [recognition, setRecognition] = useState<any>(null)
  const [transcript, setTranscript] = useState<string>('')
  const [isVoice, setIsVoice] = useState<boolean>(false)
  const [inputText, setInputText] = useState<string>('')
  const [isHukidashi, setIsHukidashi] = useState<number>(0)
  const [hukidashiText, setHukidashiText] = useState<string>('')

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        const resizeTextarea = () => {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight - 30}px`;
        };

        resizeTextarea();
        textarea.addEventListener('input', resizeTextarea);

        // cleanup function
        return () => {
            if (textarea) {
                textarea.removeEventListener('input', resizeTextarea);
            }
        };
    }, []);

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
    setHukidashiText(transcript)
    setIsHukidashi(1)
    setTimeout(() => {
      playAudio();
      setNowImg("/demo/grandma-normal.png")
    }, 2000);
  }

    const playAudio = () => {
      const text = "お疲れ様！一日頑張って偉いね！私もいつも君の頑張りを応援しているよ。どんなことがあったの？";
      let index = 0;
  
      const intervalId = setInterval(() => {
        setHukidashiText(text.slice(0, index));
        index += 1;
  
        if (index > text.length) {
          clearInterval(intervalId);
        }
      }, 50); // change this to the time you want
  
      setIsHukidashi(2)
      const audioContext = new AudioContext();
      const audioElement = new Audio('/audio/demo.wav');
      const audioSource = audioContext.createMediaElementSource(audioElement);
      audioSource.connect(audioContext.destination);
      audioElement.play();
      setTimeout(() => {
        setHukidashiText("")
        setIsHukidashi(0)
      }, 8300);
    };

  const postText = () => {
    setHukidashiText(inputText)
    setIsHukidashi(1)
    setTimeout(() => {
      playAudio();
      setNowImg("/demo/grandma-normal.png")
    }, 2000);
    // axios
    //   .post('http://localhost:3000/api/voice', {
    //     text: transcript,
    //   })
    //   .then((res) => {
    //     console.log(res.data)
    //     setInputText(res.data)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
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
        src={nowImg}
        alt=""
        width={200}
        height={50}
        className={styles.guraBig}
      />
      {isHukidashi === 1 ? (
        <>
          <div className={styles.hukidashiArea}>
          </div>
          <Image
            src="/home/hukidashiBottom.svg"
            alt=""
            width={100}
            height={50}
            className={styles.hukidashiBottomSankaku}
          />
          <div className={styles.hukidashiText}>{hukidashiText}</div>
        </>
      ) : isHukidashi === 2 ? (
        <>
          <div className={styles.hukidashiArea}>
          </div>
          <Image
            src="/home/hukidashiUp.svg"
            alt=""
            width={200}
            height={50}
            className={styles.hukidashiTopSankaku}
          />
          <div className={styles.hukidashiText}>{hukidashiText}</div>
        </>
      ): null}
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
              src="/icon/grandma.png"
              alt="grandmaの画像"
              className={styles.iconImage}
            />
          </div>
          <div className={styles.nameObj}>
            <p className={styles.nameText}>浮羽</p>
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
        <div className={styles.textarea}>
          <div className={styles.inputTextArea}>
            <Image
              width={98}
              height={98}
              src="/home/chat.svg"
              alt="chatの画像"
              className={styles.chatImage}
            />
            <textarea ref={textareaRef} value={inputText} className={styles.inputTextObj} onChange={(e)=>setInputText(e.target.value)}/>
          </div>
        </div>
        <div className={styles.voiceArea}>
          {isVoice === false ? (
            inputText.length === 0 ?  (
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
                src="/post.svg"
                alt="postの画像"
                className={styles.postImage}
                onClick={postText}
              />
            )
              
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
