import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../FirebaseConfig/FirebaseConfig";
import ItemCard from "../Componentes/ItemCard/ItemCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const { categoria } = useParams();

  useEffect(() => {
    const getCategories = async () => {
      const q = query(
        collection(db, "dulces"),
        where("categoria", "==", categoria)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setCategories(docs);
    };
    getCategories();
  }, [categoria]);

  return(
    <div>
    {categories.map((data) =>
    {return <ItemCard categorias={data} key={data.id}/>
    })};      
</div> 
  )
};

export default Categories;
