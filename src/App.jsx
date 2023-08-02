import { useEffect, useState } from "react";
import { FavoriteModal } from "./components/modal/FavoriteModal";
import { HomePage } from "./pages/HomePage";
import "./styles/index.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
   const [isVisible, setVisible] = useState(false);
   const localFavoriteList = localStorage.getItem("@FAVORITELIST");
   const [favoriteList, setFavoriteList] = useState(
      localFavoriteList ? JSON.parse(localFavoriteList) : []
   );

   //Cada vez que um estado listado na lista de dependencias atualizar, ele vai executa função
   // EFEITO DE ATUALIZAÇÃO: Variável mudou, função disparar
   // DISPARA UMA VEZ QUANDO O COMPONENTE
   useEffect(() => {
      localStorage.setItem("@FAVORITELIST", JSON.stringify(favoriteList));
   }, [favoriteList]);

   const addFavorite = (addingfavorite) => {
      if (!favoriteList.some((favorite) => favorite.id === addingfavorite.id)) {
         setFavoriteList([...favoriteList, addingfavorite]);
         //Toast - função que dispara o toast
         toast.success("Favorito adicionado com sucesso.");
      } else {
         toast.error("Favorito já adicionado");
      }
   };

   const removeFavorite = (favoriteId) => {
      const newFavoriteList = favoriteList.filter(
         (favorite) => favorite.id !== favoriteId
      );
      setFavoriteList(newFavoriteList);
      toast.success("Favorito removido com sucesso com sucesso.");
   };

   return (
      <>
         {/* <button onClick={() => setFavoriteList([])}>Limpar todos os favoritos</button> */}
         <HomePage addFavorite={addFavorite} setVisible={setVisible} />
         {isVisible ? (
            <FavoriteModal
               favoriteList={favoriteList}
               setVisible={setVisible}
               removeFavorite={removeFavorite}
            />
         ) : null}
         {/* ToastContainer - é o componente que aparece em tela */}
         <ToastContainer position="bottom-right" autoClose={2 * 1000} />
      </>
   );
}

export default App;
