import {gql} from "@apollo/client";


export const GET_CHARACTERS = gql`
    query getCharacters($page: Int!) {
      characters(page: $page) {
    			info{
            pages
            next
            prev
          }
          results{
            id
            name
            image
          }
        }
    }
`

export const GET_CHARACTERS_ALPHA = gql`
    query getCharacters($page: Int!) {
      characters(page: $page, filter:{name:"a"}) {
    			info{
            pages
            next
            prev
          }
          results{
            id
            name
            image
          }
        }
    }
`

export const GET_CHARACTERS_NAME = gql`
    query getCharacters($page: Int!, $name: String!) {
      characters(page: $page, filter:{name:$name}) {
    			info{
            pages
            next
            prev
          }
          results{
            id
            name
            image
          }
        }
    }
`

export const GET_CHARACTERS_FILTER = gql`
    query getCharacters($page: Int!, $name: String!, $status: String!, $gender: String!) {
      characters(page: $page, filter:{name:$name, status:$status, gender:$gender}) {
    			info{
            pages
            next
            prev
          }
          results{
            id
            name
            image
          }
        }
    }
`

export const GET_PAGES_INFO = gql`
  query getPages($page: Int!){
        characters (page: $page){
    			info{
            pages
            next
            prev
          }
    }
}
`