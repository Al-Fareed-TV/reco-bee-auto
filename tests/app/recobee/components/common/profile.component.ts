import { Locators } from '@sparrowimagineers/sparrow-dev'

export const profileComponent: Locators = [

    {
        name: "Account Section",
        description: "User's acount dashboard",
        locatorSignature: "page.locator('body > div > div > div.md\:w-1\/5.w-0.fixed.top-3.left-50.space-y-2')",
    },
    {
        name: "Home Link",
        description: "Takes user to the home page",
        locatorSignature: "page.getByText('Home')"
    },
    {
        name: "Social link",
        description: "Takes user to Social page",
        locatorSignature: "page.getByText('Social')"
    },
    {
        name: "Communities link",
        description: "Takes user to Communities page",
        locatorSignature: "page.getByText('Communities')"
    },
    {
        name: "My Seen Movies link",
        description: "Takes user to My Seen Movies page",
        locatorSignature: "page.getByText('My Seen Movies')"
    },
    {
        name: "My Watchlist link",
        description: "To view My Watchlist page",
        locatorSignature: "page.getByText('My Watchlist')"
    },
    {
        name: "My Reviews link",
        description: "To view users reviews page",
        locatorSignature: "page.getByText('My Reviews')"
    },
    {
        name: "Import Data Link",
        description: "To import users data from other platform",
        locatorSignature: "page.getByText('Import Data')"
    },
    
];