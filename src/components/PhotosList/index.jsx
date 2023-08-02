import { PhotoCard } from "./PhotoCard";
import styles from "./style.module.scss";

export const PhotosList = ({ photoList, addFavorite }) => {
   return (
      <section>
         <div className="container">
            <ul className={styles.photoList}>
               {photoList.map((photo) => (
                  <PhotoCard key={photo.id} photo={photo} addFavorite={addFavorite} />
               ))}
            </ul>
         </div>
      </section>
   );
};
