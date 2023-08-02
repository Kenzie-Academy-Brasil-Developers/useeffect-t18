import { MdOutlineDelete } from "react-icons/md"

export const FavoriteCard = ({favorite: {id, img, bio}, removeFavorite}) => {    
    return(
        <li>
            <img src={img} alt={bio} />
            <button onClick={() => removeFavorite(id)}>
                <MdOutlineDelete size={21} />
            </button>
        </li>
    )
}