import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';

import { useRouter } from "next/router"

const GameCard = () => {
  const [games, setGames] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const gamesRef = collection(db, 'Game');
    const unsubscribe = onSnapshot(gamesRef, (snapshot) => {
      const records = snapshot.docs.map((gameSnapshot) => {
        const keyName = gameSnapshot.id;
        const data = gameSnapshot.data();
        return { key: keyName, data: data };
      });
      setGames(records);
    });

    return () => {
      unsubscribe(); // Cleanup the subscription when the component unmounts
    };
  }, []);

  function handleGameClick() {
    router.push("/desc");
  }

  return (
    <div className="containerHome">
      {games.map((row) => (
        <div className="box" onClick={handleGameClick}>
                <div className="card">
                    <div className="wrapper">
                    <img src={row.data.coverImage} className="cover-image" />
                    </div>
                </div>
                <div className="pricing">
                    <h3>
                    {row.data.name}
                    </h3>
                    <h4>
                    {row.data.price}
                    </h4>
                </div>
            </div>
      ))}
    </div>
  );
};

export default GameCard;