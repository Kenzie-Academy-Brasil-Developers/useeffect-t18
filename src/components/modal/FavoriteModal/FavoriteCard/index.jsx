import { MdOutlineDelete } from "react-icons/md"
import styles from "./style.module.scss";

export const FavoriteCard = ({favorite: {id, img, bio}, removeFavorite}) => {    
    return(
        <li className={styles.favoriteCard}>
            <img src={img} alt={bio} />
            <button onClick={() => removeFavorite(id)}>
                <MdOutlineDelete size={32} />
            </button>
        </li>
    )
}