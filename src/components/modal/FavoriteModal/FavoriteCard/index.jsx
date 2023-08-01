export const FavoriteCard = ({img, bio}) => {
    return(
        <li>
            <img src={img} alt={bio} />
            <button>Botão fechar</button>
        </li>
    )
}