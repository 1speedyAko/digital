'use client'
import { useLoading } from "./LoadingContext";
import framerLoader from "./Framerloader";
const GlobalLoader = ()=>{
    const { loading } = useLoading()

    if (!loading){
        null
    }
    return(
        <framerLoader/>
    )
}
export default GlobalLoader