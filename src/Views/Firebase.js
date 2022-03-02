import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Componentes/FirebaseConfig/FirebaseConfig";

const feelinFirebase = () => {
  const [antojos, setAntojos] = useState([]);

  useEffect(() => {
    const getAntojos = async () => {
      const q = query(collection(db, "dulces"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc)=>{
          docs.push({...doc.data(), id: doc.id});
      })
    };
    getAntojos();
  }, []);
};

export default feelinFirebase;
