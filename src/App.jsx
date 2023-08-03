import { useEffect, useState } from "react";
import { FavoriteModal } from "./components/modal/FavoriteModal";
import { HomePage } from "./pages/HomePage";
import "./styles/index.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { PhotoModal } from "./components/modal/PhotoModal";

function App() {
   const [isVisible, setVisible] = useState(false);
   const localFavoriteList = localStorage.getItem("@FAVORITELIST");
   const [favoriteList, setFavoriteList] = useState(
      localFavoriteList ? JSON.parse(localFavoriteList) : []
   );
   // as vezes eu vou ter um objeto de foto - VERDADEIRO
   // as vezes eu vou ter nulo - FALSO
   const [photoList, setPhotoList] = useState([]);
   const [currentPhoto, setCurrentPhoto] = useState(null);

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

   const nextPhoto = (currentPhotoId) => {
      /*
      const findPhoto = photoList[index];
      const newPhoto = { ...findPhoto, index}
      */
      const newPhoto = photoList.find((photo) => photo.id === currentPhotoId + 1);
      setCurrentPhoto(newPhoto);
   };

   const prevPhoto = (currentPhotoId) => {
      const newPhoto = photoList.find((photo) => photo.id === currentPhotoId - 1);
      setCurrentPhoto(newPhoto);
   };

   const closeModal = () => {
      setCurrentPhoto(null);
   }

   return (
      <>
         {/* <button onClick={() => setFavoriteList([])}>Limpar todos os favoritos</button> */}
         <HomePage
            photoList={photoList}
            setPhotoList={setPhotoList}
            setVisible={setVisible}
            setCurrentPhoto={setCurrentPhoto}
         />

         {currentPhoto ? (
            <PhotoModal
               addFavorite={addFavorite}
               removeFavorite={removeFavorite}
               favoriteList={favoriteList}
               photoList={photoList}
               photo={currentPhoto}
               nextPhoto={nextPhoto}
               prevPhoto={prevPhoto}
               closeModal={closeModal}
            />
         ) : null}

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
