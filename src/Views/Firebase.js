import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Componentes/FirebaseConfig/FirebaseConfig";
import ItemCard from "../Componentes/ItemCard/ItemCard";


const feelinFirebase = () => {
  const [antojos, setAntojos] = useState([]);
  useEffect(() => {
    const getAntojos = async () => {
      const q = query(collection(db, "dulces"), where("categoria", "==", "tortas"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc)=>{
          docs.push({...doc.data(), id: doc.id});
      });
      setAntojos(docs);
    };
    getAntojos();
  }, []);
  return(
      <div>
          {antojos.map((data) =>
          {return <ItemCard antojos={data} key={data.id}/>
          })};      
      </div>
  )
};

export default feelinFirebase;
