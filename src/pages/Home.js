import IncomeEl from "../components/admin/IncomeEl"
import BookLists from "../components/home/BookLists"
import BookRoll from "../components/home/BookRoll"
import HeadingEl from "../components/home/HeadingEl"

import { useContext } from "react"
import { UserContext } from "../components/context/userContext"

export default function Home() {
    const [state, dispatch] = useContext(UserContext)
    return (
        <>
            {state.user.role === "adm" ? <IncomeEl /> : (<><HeadingEl /><BookRoll /><BookLists /></>)}
        </>
    )
}