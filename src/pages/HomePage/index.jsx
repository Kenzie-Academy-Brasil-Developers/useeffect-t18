import { Header } from "../../components/Header";
import { LoadingList } from "../../components/LoadingList";
import { PhotosList } from "../../components/PhotosList";
import { photoApi } from "../../services/api";
import { useEffect, useState } from "react";

export const HomePage = ({ photoList, setPhotoList, setVisible, setCurrentPhoto }) => {
   const [loading, setLoading] = useState(false);

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
               <PhotosList
                  photoList={photoList}
                  setCurrentPhoto={setCurrentPhoto}
               />
            )}
         </main>
      </>
   );
};
