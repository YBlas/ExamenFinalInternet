import { useQuery } from "@apollo/client";
import React, { FC } from "react";
import { GET_PAGES_INFO } from "../queries";
import {IndexadoProp, PagesInfoGQL} from "../types";


export const Indexado: FC<IndexadoProp> = ({changePage, page}) => {

    const { data, loading, error } = useQuery<PagesInfoGQL>(GET_PAGES_INFO, { variables: {page:page} });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    if (data) {
        return <div>
            {data.characters.info.prev && <button onClick={()=>{
                changePage(page-1)
            }}>Prev</button>}
            {page}
            {"/"}
            {data.characters.info.pages}
            {data.characters.info.next && <button onClick={()=>{
                changePage(page+1)
            }}>Next</button>}
        </div>
    }
    else return <div>No data</div>
}