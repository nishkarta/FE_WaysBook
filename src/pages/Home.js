import BookLists from "../components/home/BookLists"
import BookRoll from "../components/home/BookRoll"
import HeadingEl from "../components/home/HeadingEl"

export default function Home() {
    return (
        <>
            <HeadingEl />
            <BookRoll />
            <BookLists />
        </>
    )
}