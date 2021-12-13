import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteMess } from '../store/chatSlice';

const ChatBar = () => {
  const messages = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  const hanldeDelete = (item) => {
    dispatch(deleteMess(item));
  };

  return (
    <div className='chat-container'>
      <div className='chat-inner-container'>
        {messages.map((item, index) => {
          return (
            <div
              className='message'
              key={index}
              onClick={() => {
                hanldeDelete(item);
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatBar;
