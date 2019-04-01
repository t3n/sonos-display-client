import { useState, useEffect } from 'react';
import io from 'socket.io-client';

export const useTrack = () => {
  const [title, setTitle] = useState("Hold on, I'm coming");
  const [artist, setArtist] = useState('Sam & Dave');
  const [album, setAlbum] = useState('Album');
  const [albumArtURI, setAlbumArtURI] = useState('');

  const setTrack = ({
    title: nextTitle = '',
    artist: nextArtist = '',
    album: nextAlbum = '',
    albumArtURI: nextAlbumArtURI = ''
  }) => {
    setTitle(nextTitle);
    setArtist(nextArtist);
    setAlbum(nextAlbum);
    setAlbumArtURI(nextAlbumArtURI);
  };

  const track = {
    title,
    artist,
    album,
    albumArtURI
  };

  return [track, setTrack];
};

export const useTrackSocket = setTrack =>
  useEffect(() => {
    const socket = io('http://localhost:50205');

    socket.on('track', ({ title, artist, album, albumArtURI }) =>
      setTrack({
        title,
        artist,
        album,
        albumArtURI
      })
    );
  }, []);

// export const useTrackSocket = setTrack =>
//   useEffect(() => {
//     setTimeout(
//       () =>
//         setTrack({
//           title: 'Dreams',
//           artist: 'The Cranberries',
//           albumArtURI:
//             'https://i.scdn.co/image/570770601349708e58c115d6ecdb58c50126ee26'
//         }),
//       10000
//     );

//     setTimeout(
//       () =>
//         setTrack({
//           title: "Rocket Man (I think it's gonna be a long, long time)",
//           artist: 'Elton John',
//           albumArtURI:
//             'https://i.scdn.co/image/570770601349708e58c115d6ecdb58c50126ee26'
//         }),
//       30000
//     );
//   }, []);
