import { useState } from "react";
import { FavoriteCard } from "./FavoriteCard";
import { useEffect } from "react";
import { MdClose } from "react-icons/md";

export const FavoriteModal = ({ setVisible }) => {
   const [count, setCount] = useState(0);

   //onMount - executar uma função QUANDO a montagem do componente acontece
   useEffect(() => {
      console.log("Ocorreu uma montagem!");
   }, []);

   //onUpdate - executar uma função QUANDO uma atualização acontece
   useEffect(() => {
      console.log("Também sou executada na montagem a primeira vez amigão!");
      console.log("Cada vez que count for alterado, vai ser disparada uma função.");
   }, [count]);

   //onDismount - executar uma função QUANDO a desmontagem acontece
   useEffect(() => {
      return () => {
         console.log("Ocorreu uma desmontagem!");
      };
   }, []);

   return (
      <div role="dialog">
         <div>
            {/* quando o usuário clicar */}
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
            <button onClick={() => setVisible(false)}>
               <MdClose size={21} />
            </button>
            <ul>
               <FavoriteCard />
            </ul>
         </div>
      </div>
   );
};
