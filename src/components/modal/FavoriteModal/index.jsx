import { FavoriteCard } from "./FavoriteCard";
import { MdClose } from "react-icons/md";

export const FavoriteModal = ({ setVisible, favoriteList, removeFavorite }) => {
   return (
      <div role="dialog">
         <div>
            <button onClick={() => setVisible(false)}>
               <MdClose size={21} />
            </button>
            <h2>favoritos</h2>
            <ul>
               {favoriteList.length > 0 ? (
                  favoriteList.map((favorite) => (
                     <FavoriteCard
                        key={favorite.id}
                        favorite={favorite}
                        removeFavorite={removeFavorite}
                     />
                  ))
               ) : (
                  <p>Nenhum favorito adicionado</p>
               )}
            </ul>
         </div>
      </div>
   );
};
