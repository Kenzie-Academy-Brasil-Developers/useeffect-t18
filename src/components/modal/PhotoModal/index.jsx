import { MdClose, MdFavorite, MdFavoriteBorder, MdArrowBack, MdArrowForward } from "react-icons/md";
import styles from "./style.module.scss";
import { useKeydown } from "../../../hooks/useKeydown";
import { useOutclick } from "../../../hooks/useOutclick";

export const PhotoModal = ({
   addFavorite,
   removeFavorite,
   favoriteList,
   photoList,
   photo,
   nextPhoto,
   prevPhoto,
   closeModal,
}) => {
   const { id, img, bio } = photo;
   // assemelhar a um querySelector
   const boxRef = useOutclick(() => {
      closeModal();
   });

   useKeydown("Escape", () => {
      closeModal();
   });

   const prevRef = useKeydown("ArrowLeft", ({ currentTarget }) => {
      currentTarget.click();
   });

   const nextRef = useKeydown("ArrowRight", ({ currentTarget }) => {
      currentTarget.click();
   });

   return (
      <div className={styles.overlayBox} role="dialog">
         <div ref={boxRef} className={styles.modalBox}>
            <button className={styles.closeButton} onClick={closeModal}>
               <MdClose size={21} />
            </button>

            <button
               ref={prevRef}
               onClick={() => prevPhoto(id)}
               title="Retroceder"
               disabled={id === 1}
            >
               <MdArrowBack size={36} />
            </button>
            <div>
               <img src={img} alt={bio} />
               <div className={styles.contentBox}>
                  {favoriteList.some((photo) => photo.id === id) ? (
                     <button className="btn" onClick={() => removeFavorite(id)}>
                        <MdFavorite size={16} /> remover dos favoritos
                     </button>
                  ) : (
                     <button className="btn" onClick={() => addFavorite(photo)}>
                        <MdFavoriteBorder size={16} /> favoritar
                     </button>
                  )}

                  <p className="paragraph">{bio}</p>
               </div>
            </div>
            <button
               ref={nextRef}
               onClick={() => nextPhoto(id)}
               title="Avançar"
               disabled={id === photoList.length}
            >
               <MdArrowForward size={36} />
            </button>
         </div>
      </div>
   );
};
