import { Locators } from '@sparrowimagineers/sparrow-dev'

export const searchBarComponent:Locators =[
    {
        name : "Search bar",
        description:"alt attribute of the RecoBee logo in header",
        locatorSignature:"page.getByPlaceholder('Search for Movies, TV Shows, Reviews, etc...').fill('Ironman 3');",
    }
];