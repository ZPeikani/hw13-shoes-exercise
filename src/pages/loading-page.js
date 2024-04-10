import { Loading } from "../templates/loading";
import { El } from "../utils/createElement";

export function LoadingPage() {
    return El({
        element: "div",
        children:[Loading()]
    })
}