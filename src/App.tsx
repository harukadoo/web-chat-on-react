import { useState } from 'react';
import './App.css';
import Message from './components/Message';

interface MessageData {
  userName: string;
  messageText: string;
  fileName: string;
}

function App() {
  const [messages, setMessages] = useState<MessageData[]>([]);

  const [userName, setUserName] = useState<string>('');

  const [messageText, setMessageText] = useState<string>('');

  const [currentTime, setCurrentTime] = useState<string>('');

  const [fileName, setFileName] = useState<string>('');

  function renderMessageList() {
    return messages.map((message, index) => (
      <Message key={index} name={message.userName} text={message.messageText} date={currentTime} file={message.fileName} />
    ));
  }

  function addMessage() {
    if (userName !== '' && messageText !== '') {
      const newMessage: MessageData = { userName: userName, messageText: messageText, fileName: fileName };
      setMessages([...messages, newMessage]);
      setUserName('');
      setMessageText('');
      setFileName('');
      setCurrentTime('');

      getTime();

    }
  }

  const getTime = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0'); 
    const minutes = String(date.getMinutes()).padStart(2, '0'); 

    const fullDate = `${date.getDate()}/${date.getMonth() + 1}, ${hours}:${minutes}`;
    setCurrentTime(fullDate);
  };

  const getFileName = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className='container'>
      <div className='chat'>
        <div className='chat__container'>

          <div className='messages'>
            <div className='messages__container'>

              {renderMessageList()}

            </div>
          </div>

          <div className='field'>
            <div className='field__container'>
              <input type='text' placeholder='user name' id='username' className='field__user-name'
                value={userName}
                onChange={(e) => setUserName(e.target.value)} />

              <div>
                <textarea placeholder='write a message' id='message' className='field__message'
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}></textarea>
              </div>

              <div className='message__actions'>
                <input type="file" className='actions__add-file' onChange={getFileName} />

                <button className='actions__button' onClick={addMessage}>send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
