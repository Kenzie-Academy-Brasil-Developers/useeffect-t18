import { useState } from "react"
import { Header } from "../../components/Header"
import { PhotosList } from "../../components/PhotosList"
import { photoApi } from "../../services/api";
import { useEffect } from "react";

export const HomePage = ({setVisible}) => {
    const [photoList, setPhotoList] = useState([]);  

    //"iniciar o componente"
    //Isso só aconteça na montagem
    useEffect(() => {
        const getPhotos = async () => {
            try {
                const { data } = await photoApi.get("/photos");
                setPhotoList(data);
            } catch (error) {
                console.log(error);
            }
        }
        getPhotos();
    }, []); 

    return(
        <>
            <Header setVisible={setVisible} />
            <main>
                <PhotosList photoList={photoList} />
            </main>
        </>
    )
}