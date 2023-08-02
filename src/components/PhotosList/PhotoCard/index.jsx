export const PhotoCard = ({photo, addFavorite}) => {
    const { img, bio } = photo;

    return(
        <li onClick={() => addFavorite(photo)}>
            <img src={img} alt={bio} />
        </li>
    )
}