import { Locators } from '@sparrowimagineers/sparrow-dev'

export const searchBarComponent:Locators =[
    {
        name : "Search bar",
        description:"Search bar to search movie or series",
        locatorSignature:"page.loactor('Search for Movies, TV Shows, Reviews, etc...')",
    },
    {
        name : "Search icon",
        description:"search icon for searching icons",
        locatorSignature:"page.locator('body > div > div > div.relative.md\:w-1\/2.w-full.flex.flex-col.gap-2.pt-0.bg-black > div.sticky.z-10.top-0.bg-black.pt-5.left-0.w-full > form > svg')",
    },
    
];