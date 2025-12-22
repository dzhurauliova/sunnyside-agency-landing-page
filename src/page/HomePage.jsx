import { data } from "../data/clients-info"
import { Header } from "../components/Header"
import { Body } from "../components/Body"
import { Client } from "../components/Client"
import { Footer } from "../components/Footer"

export const HomePage = () => {
    return(
        <>
            {/* < Header /> */}
            {/* < Body /> */}
            < Client clientsList={data} />
            {/* < Footer /> */}
        </>
    )
}