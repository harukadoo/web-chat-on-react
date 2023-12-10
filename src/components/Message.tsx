import React from 'react';

interface MessageProps{
    name: string;
    text: string;
    date: string;
    file: string;
}

const Message = ({name, text, date, file}: MessageProps) => {
    return (
        <div className='message'>
            <div className='message-icon__container'>
                <span className='message__icon'></span>
            </div>

            <div className='message__content'>
                <div className='message__header'>
                    <p className='message__user-name'>{name}</p>
                    <p className='message__data'>{date}</p>
                </div>

                <p className='message__field'>{text}</p>
                <p className='message__file-name'>{file}</p>
            </div>
        </div>
    )
}

export default Message;