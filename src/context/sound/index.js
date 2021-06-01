import React, { createContext, useState, useContext } from 'react';
import { Audio } from 'expo-av';
import _map from 'lodash/map'
import _size from 'lodash/size'
import _filter from 'lodash/filter'
import _find from 'lodash/find'
import _get from 'lodash/get'

import { useAlbum } from '..';

const SoundContext = createContext();

export const SoundProvider = ({ children }) => {
  const [sound, setSund] = useState(null)
  const [oldSound, setOldSound] = useState(null)
  const [currentAudio, setCurrentAudio] = useState(null)

  const { setAlbums } = useAlbum()

  const handleSound = async (soundSelected) => {
    try {
      if (sound === null) {
        await handlePlay(soundSelected)
        return
      }
      if (sound.isLoaded && sound.isPlaying && currentAudio.id === soundSelected.id) {
        await handlePause(soundSelected)
        return
      }
      if (sound.isLoaded && !sound.isPlaying && currentAudio.id === soundSelected.id) {
        await handleResume(soundSelected)
        return
      }
      await handleNext(soundSelected)
    } catch (error) {
      console.error(error)
    }
  }

  const handleNext = async (soundSelected) => {
    try {
      await oldSound.stopAsync();
      await oldSound.unloadAsync();
      const status = await oldSound.loadAsync({ uri: soundSelected.preview }, { shouldPlay: true });

      setCurrentAudio(soundSelected.preview)
      setSund(status)
      setCurrentAudio(soundSelected)
      playSound(soundSelected)
    } catch (error) {
      console.log(error)
    }
  }

  const handleResume = async (soundSelected) => {
    try {
      const status = await oldSound.playAsync();

      setSund(status)
      playSound(soundSelected)
    } catch (error) {
      console.log(error)
    }
  }

  const handlePause = async (soundSelected) => {
    try {
      const status = await oldSound.setStatusAsync({
        shouldPlay: !sound.isPlaying,
      });

      setSund(status)
      playSound(soundSelected)
    } catch (error) {
      console.log(error)
    }
  }

  const handlePlay = async (soundSelected) => {
    try {
      const sound = new Audio.Sound();
      const status = await sound.loadAsync({ uri: soundSelected.preview }, { shouldPlay: true });

      setCurrentAudio(soundSelected.preview)
      setOldSound(sound)
      setSund(status)
      setCurrentAudio(soundSelected)
      playSound(soundSelected)
    } catch (error) {
      console.log(error)
    }
  }

  const playSound = (soundSelected) => {
    setAlbums((albums) => {
      return _map(albums, (album) => {
        if (album.id === soundSelected.id) {
          album.play = !album.play
          return album
        }
        album.play = false
        return album
      })
    })
  }

  return (
    <SoundContext.Provider
      value={{
        handleSound
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);

export default SoundContext;
