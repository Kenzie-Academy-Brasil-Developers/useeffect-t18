import { FavoriteCard } from "./FavoriteCard"

export const FavoriteModal = () => {
    return(
        <div role="dialog">
            <div>
                <button>
                    Fechar
                </button>
                <ul>
                    <FavoriteCard />
                </ul>
            </div>
        </div>
    )
}