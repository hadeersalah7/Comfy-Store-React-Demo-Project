import { Outlet, useNavigation } from "react-router-dom"
import { Header, Navbar, Loading } from "../components"
const HomeLayout = () => {
    const navigate = useNavigation()
    return (
        <>
            <Header />
            <Navbar />
                {navigate.state === "loading" ? <Loading /> : <section className="align-element py-20">
                <Outlet />
            </section>}
            
        </>
    )
}

export default HomeLayout