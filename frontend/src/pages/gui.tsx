import styles from '@/styles/Gui.module.scss'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'

interface Prompt {
    id:Number,
    name:String,
    prompt:[String,String,String,String,String,String]
}

export default function Gui() {
    const [message, setMessage] = useState("ここにメッセージが表示されます");
    const [text, setText] = useState("");
    const [selectChara,setSelectChara] = useState({index:0,prompt:0})

    const character:Prompt = 
        {
            id:1,
            name:"蒼山想",
            prompt:["無のプロンプト","喜のプロンプト","怒のプロンプト","哀のプロンプト","楽のプロンプト","カスタム用のプロンプト"]
        }
    
  
    const fetchMessage = async () => {
      const configuration = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        },
      };
      const body = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: character.prompt[0],
          },
          { role: "user", content: text },
        ],
      };
  
      const res = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        body,
        configuration
      );
      setMessage(res.data.choices[0].message.content);
    };
  
    return (
      <div>
        <div className={styles.textArea}>
          <div className={styles.text}>{message}</div>
        </div>
        <div className={styles.settinArea}>
            <select>
                
            </select>
            <input type="text" value={text} onChange={(e)=>(setText(e.target.value))}/>
        </div>
        <div className={styles.buttonArea}>
          <button className={styles.button} onClick={fetchMessage}>送信</button>
        </div>
      </div>
  )
}
