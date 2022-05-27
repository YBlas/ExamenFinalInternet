import { useQuery } from "@apollo/client";
import React, { FC, useState } from "react";
import { GET_CHARACTERS, GET_CHARACTERS_ALPHA, GET_CHARACTERS_NAME } from "../queries";
import { CharactersGQL, PersonajesProp } from "../types";
import "../styles/Personajes.css";


export const PersonajesAlfabeticos: FC<PersonajesProp> = ({page}) => {

    const { data, loading, error } = useQuery<CharactersGQL>(GET_CHARACTERS_ALPHA, { variables: { page: page } });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    if (data) {

        return(
            <div className="Personajes">
                {data.characters.results.map(character => {
                    return <div key={character.id}>
                        <img className="imagenP" src={character.image}></img>
                        <p>{character.name}</p>
                    </div>
                })}              
            </div>
        )
    }
    else return <div>No data</div>
}


