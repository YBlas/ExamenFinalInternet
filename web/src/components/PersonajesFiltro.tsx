import { useQuery } from "@apollo/client";
import React, { FC } from "react";
import { GET_CHARACTERS, GET_CHARACTERS_FILTER, GET_CHARACTERS_NAME } from "../queries";
import { CharactersGQL, PersonajesFiltroProp,} from "../types";
import "../styles/Personajes.css";


export const PersonajesFiltro: FC<PersonajesFiltroProp> = ({page, name, gender, status}) => {


    const { data, loading, error } = useQuery<CharactersGQL>(GET_CHARACTERS_FILTER, { variables: {page:page, name:name, status:status, gender:gender} });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    if (data) {
        return <div className="Personajes">
            {data.characters.results.map(character => {
                return <div key={character.id}>
                    <img className="imagenP" src={character.image}></img>
                    <p>{character.name}</p>
                </div>
            })}
            </div>
        }
        else return <div>No data</div>
}