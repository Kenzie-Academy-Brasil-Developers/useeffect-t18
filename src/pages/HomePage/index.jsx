import { Header } from "../../components/Header";
import { LoadingList } from "../../components/LoadingList";
import { PhotosList } from "../../components/PhotosList";
import { photoApi } from "../../services/api";
import { useEffect, useState } from "react";

export const HomePage = ({ addFavorite, setVisible }) => {
   const [loading, setLoading] = useState(false);
   const [photoList, setPhotoList] = useState([]);

   //MONTAGEM - componente montou "brotou em tela", função disparar
   useEffect(() => {
      const getPhotos = async () => {
         try {
            setLoading(true);
            const { data } = await photoApi.get("/photos");
            setPhotoList(data);
         } catch (error) {
            console.log(error);
         } finally {
            setLoading(false);
         }
      };
      getPhotos();
   }, []);
   

   return (
      <>
         <Header setVisible={setVisible} />
         <main>
            {loading ? (
               <LoadingList />
            ) : (
               <PhotosList addFavorite={addFavorite} photoList={photoList} />
            )}
         </main>
      </>
   );
};
