import React from 'react';
import { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSong } from '@/components/songs';

const IndexPage = () => {
  const [song, setSong] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSong());
  }, []);

  return (
    <div>
      {song && (
        <div>
          <h1>{song.title}</h1>
          <p>{song.lyrics}</p>
        </div>
      )}
    </div>
  );
};

export default IndexPage;
