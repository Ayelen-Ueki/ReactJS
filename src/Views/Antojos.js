import React, { useState, useEffect } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../FirebaseConfig/FirebaseConfig";
import ItemCard from "../Componentes/ItemCard/ItemCard";

const Antojos = () => {
  const [antojos, setAntojos] = useState([]);
  useEffect(() => {
    const getAntojos = async () => {
      const q = query(
        collection(db, 'dulces'),
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setAntojos(docs);
    }
    getAntojos();
  }, []);
  return (
    <div>
      {antojos.map((data) => {
        return <ItemCard antojos={data} key={data.id} />;
      })}
      ;
    </div>
  );
};

export default Antojos;
