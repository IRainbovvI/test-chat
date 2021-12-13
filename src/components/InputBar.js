import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { postMess } from '../store/chatSlice';

const InputBar = () => {
  const message = useRef();
  const dispatch = useDispatch();

  const submitHandle = (e) => {
    e.preventDefault();
    if (message.current.value) {
      dispatch(postMess(message.current.value));
    }
  };

  return (
    <div className='input-container'>
      <form
        onSubmit={(e) => {
          submitHandle(e);
        }}
      >
        <input type='text' ref={message} />
        <button>Send</button>
      </form>
    </div>
  );
};

export default InputBar;
