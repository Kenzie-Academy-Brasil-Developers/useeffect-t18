import { PhotoCard } from "./PhotoCard"

export const PhotosList = () => {
    return(
        <ul>
            <PhotoCard img={img} bio={bio} />
        </ul>
    )
}