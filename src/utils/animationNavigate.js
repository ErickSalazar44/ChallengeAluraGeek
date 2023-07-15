
//? importan esta funcion recibe la ruta a la que quieres navegar
// y el navigate = useNavigate()

import { flushSync } from "react-dom"

export const viewNavigate = (nuevaRuta, navigate) => {
    window.scrollTo(0,0)
    if (!document.startViewTransition) {
        return navigate(nuevaRuta)
    } else {
        return document.startViewTransition(() => {
            flushSync(()=> navigate(nuevaRuta))
            
        })
    }
}