

export type PersonajesProp = {
    page: number
}

export type PersonajesNamesProp = {
    name: string,
    page: number
}

export type PersonajesFiltroProp = {
    name: string,
    page: number,
    status: string,
    gender: string
}

export type IndexadoProp = {
    changePage: (page: number) => void,
    page: number
}

export type CharactersGQL = { 
    characters:{
        info:{
            pages: number
            next: string
            prev: string
        }
        results:Array<{
            id:string
            name:string
            image:string
            status:string
            gender:string
            origin:string
        }>
    }
}

export type PagesInfoGQL = {
    characters:{
        info:{
            pages: number
            next: string
            prev: string
        }
    }
}