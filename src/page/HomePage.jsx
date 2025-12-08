import { data } from "../data/clients-info"
import { Client } from "../components/Client"

export const HomePage = () => {
    return(
        <>
            < Client clientsList={data} />
        </>
    )
}