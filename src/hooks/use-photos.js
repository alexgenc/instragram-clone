import { useState, useEffect } from 'react';
import { getPhotos } from '../services/firebase';

const usePhotos = (user) => {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    async function getTimelinePhotos() {
      // Is there a user, and does the user actually follow other people?
      if(user?.following?.length > 0) {
        const followedUserPhotos = await getPhotos(user.userId, user.following);
        followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
        setPhotos(followedUserPhotos);
      }
    }

    getTimelinePhotos();
  }, [user?.userId, user?.following])
  
  return { photos };
 
}

export default usePhotos;
