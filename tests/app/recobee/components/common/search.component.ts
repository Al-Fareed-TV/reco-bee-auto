import { Locators } from '@sparrowimagineers/sparrow-dev'

export const searchBarComponent:Locators =[
    {
        name : "Search bar",
        description:"Search bar to search movie or series",
        locatorSignature:"page.getByPlaceholder('Search for Movies, TV Shows, Reviews, etc...')",
    },
    {
        name : "Search icon",
        description:"search icon locator",
        locatorSignature:"page.locator('body > div > div > div.relative.md\:w-1\/2.w-full.flex.flex-col.gap-2.pt-0.bg-black > div.sticky.z-10.top-0.bg-black.pt-5.left-0.w-full > form > svg')",
    },
    {
        name : "Search Suggestion",
        description:"locator of search suggestion",
        locatorSignature:"body > div > div > div.relative.md\:w-1\/2.w-full.flex.flex-col.gap-2.pt-0.bg-black > div.modal.z-50.absolute.top-16.left-0.h-\[70vh\].overflow-y-auto.bloc-tabsnone.bg-black.w-full",
    },
    {
        name : "Cast Section",
        description:"locator of search suggestion",
        locatorSignature:"body > div > div > div.relative.md\:w-1\/2.w-full.flex.flex-col.gap-2 > div.mt-2 > div > div:nth-child(4) > div.flex.flex-wrap.gap-2\.5",
    },
    {
        name : "First movie listed",
        description:"locator of the first movie listed",
        locatorSignature:"body > div > div > div.relative.md\:w-1\/2.w-full.flex.flex-col.gap-2 > div.mt-2 > div > div:nth-child(2) > div.flex.flex-wrap.gap-2\.5 > div:nth-child(1)",
    },
    
];