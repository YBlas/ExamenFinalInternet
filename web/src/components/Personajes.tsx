import { useQuery } from "@apollo/client";
import React, { FC } from "react";
import { GET_CHARACTERS } from "../queries";
import { CharactersGQL, PersonajesProp } from "../types";
import "../styles/Personajes.css";


export const Personajes: FC<PersonajesProp> = (page) => {

    const { data, loading, error } = useQuery<CharactersGQL>(GET_CHARACTERS, { variables: {page:page.page} });

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