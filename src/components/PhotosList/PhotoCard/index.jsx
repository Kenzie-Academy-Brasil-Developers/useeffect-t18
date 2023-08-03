export const PhotoCard = ({photo, index, setCurrentPhoto}) => {
    const { img, bio } = photo;

    return(
        <li onClick={() => setCurrentPhoto({...photo, index})}>
            <img src={img} alt={bio} />
        </li>
    )
}