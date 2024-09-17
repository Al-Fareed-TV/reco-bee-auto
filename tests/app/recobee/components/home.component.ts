import { Locators } from '@sparrowimagineers/sparrow-dev'

export const homeComponent: Locators = [

    {
        name: "Account Section",
        description: "User's acount dashboard",
        locatorSignature: "page.locator('body > div > div > div.md\:w-1\/5.w-0.fixed.top-3.left-50.space-y-2')",
    },
    {
        name: "Recent Release Section",
        description: "xpath of recent release Carouse ",
        locatorSignature: "/html/body/div/div/div[3]/div[2]/div/div[3]/div",
    },
    {
        name: "Top Charts Section",
        description: "Carousel for top movies",
        locatorSignature: "page.locator('body > div > div > div.relative.md\:w-1\/2.w-full.flex.flex-col.gap-2.pt-0.bg-black > div.mt-2.mb-10 > div > div.flex.flex-col.gap-1.items-stretch > div')",
    },
    
];