import { Header } from "../../components/Header"
import { PhotosList } from "../../components/PhotosList"

export const HomePage = () => {
    return(
        <>
            <Header />
            <main>
                <PhotosList />
            </main>
        </>
    )
}