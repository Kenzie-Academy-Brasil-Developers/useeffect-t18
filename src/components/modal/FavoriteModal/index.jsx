import { FavoriteCard } from "./FavoriteCard";
import { MdClose } from "react-icons/md";
import styles from "./style.module.scss";
import { useOutclick } from "../../../hooks/useOutclick";
import { useKeydown } from "../../../hooks/useKeydown";

export const FavoriteModal = ({ setVisible, favoriteList, removeFavorite }) => {
   const ref = useOutclick(() => {
      setVisible(false);
   });

   useKeydown("Escape", () => {
      setVisible(false);
   });

   return (
      <div className={styles.overlayBox} role="dialog">
         <div ref={ref} className={styles.modalBox}>
            <button onClick={() => setVisible(false)} className={styles.closeButton}>
               <MdClose size={21} />
            </button>
            <h2 className="title">favoritos</h2>

            {favoriteList.length > 0 ? (
               <ul>
                  {favoriteList.map((favorite) => (
                     <FavoriteCard
                        key={favorite.id}
                        favorite={favorite}
                        removeFavorite={removeFavorite}
                     />
                  ))}
               </ul>
            ) : (
               <p className="paragraph">Nenhum favorito adicionado</p>
            )}
         </div>
      </div>
   );
};
