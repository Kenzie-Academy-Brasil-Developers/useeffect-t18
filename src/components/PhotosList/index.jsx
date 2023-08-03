import { PhotoCard } from "./PhotoCard";
import styles from "./style.module.scss";

export const PhotosList = ({ photoList, setCurrentPhoto }) => {
   return (
      <section>
         <div className="container">
            <ul className={styles.photoList}>
               {photoList.map((photo, index) => (
                  <PhotoCard
                     key={photo.id}
                     index={index}
                     photo={photo}
                     setCurrentPhoto={setCurrentPhoto}
                  />
               ))}
            </ul>
         </div>
      </section>
   );
};
