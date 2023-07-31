import { useState } from "react";
import { blogApi, fruitApi } from "./services/api";

function App() {
   const [fruitList, setFruitList] = useState([]);
   const [blogList, setBlogList] = useState([]);

   console.log(blogList);
   //Javascript

   const getFruits = async () => {
      /*
      const response = await fetch("https://fruit-fake-api.onrender.com/fruits");
      // Dados no formato JSON
      const json = await response.json();
      //Avançar código
      console.log(json);
      */

      //GET
      const { data } = await fruitApi.get("fruits");
      setFruitList(data);
   };

   const getNews = async () => {
      //O try ele vai tentar executar o código, linha a linha, e caso aconteça um erro em alguma linha, ele vai para o CATCH ("Rota de escape")
      try {
         const { data } = await blogApi.get("news");
         setBlogList(data);
      } catch (error) {
         //CATCH - Lidar com erros separadamente       
         console.log(error);
         //throw new Error("Deu ruim!");
         //THROW - quando utilizamos o throw, ele interrompe a execução da função
         
      }
   };

   //JSX
   return (
      <>
         <ul>
            {fruitList.map((fruit) => (
               <li key={fruit.id}>
                  <h3>{fruit.name}</h3>
                  <span>{fruit.category}</span>
                  <span>{fruit.price}</span>
               </li>
            ))}
         </ul>
         <button onClick={getFruits}>Carregar frutas</button>
         <button onClick={getNews}>Carregar notícias</button>
      </>
   );
}

export default App;
