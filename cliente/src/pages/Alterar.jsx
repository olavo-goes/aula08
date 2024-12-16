import { useParams } from "react-router-dom";

export default function Alterar (){
    const {id} = useParams();

    return(
        <h1>Alterar {id}</h1>
    )
}
