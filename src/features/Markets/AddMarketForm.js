import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { marketAdded } from './marketSlice';

export const AddMarketForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSaveMarketClicked = () => {
    if (title && content) {
      dispatch(marketAdded({ id: nanoid(), title, content }));
      setTitle('');
      setContent('');
    }
  };

  return (
    <section className="addMarketForm">
      <h2>Add Your Store!</h2>
      <form>
        <label htmlFor="marketTitle">Store Title:</label>
        <br />
        <input
          type="text"
          id="marketTitle"
          name="marketTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <br />
        <label htmlFor="marketContent">Content:</label>
        <br />
        <textarea
          id="marketContent"
          name="marketContent"
          value={content}
          onChange={onContentChanged}
        />
        <br />

        <button type="button" onClick={onSaveMarketClicked}>
          Save Store
        </button>
      </form>
    </section>
  );
};
