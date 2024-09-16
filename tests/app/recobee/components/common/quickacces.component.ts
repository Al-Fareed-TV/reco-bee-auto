import { Locators } from '@sparrowimagineers/sparrow-dev'

export const quickAccessComponent:Locators =[
    {
        name : "Quick access section",
        description:"CSS locator of quick access to view trending movies and events",
        locatorSignature:"body > div > div > div.fixed.top-0.right-10.md\:block.hidden.md\:w-1\/5.overflow-hidden.flex-shrink-0 > div",
    },
    {
        name : "Trending icon",
        description:"Quick access to view trending movies and events",
        locatorSignature:"page.locator('body > section > div > div.fixed.top-0.right-10.md\:block.hidden.md\:w-1\/5.overflow-hidden.flex-shrink-0 > div > div > div.flex.gap-2.justify-end.items-center.relative > div:nth-child(1)')",
    },
    {
        name : "Settings icon",
        description:"CSS locator of settings page",
        locatorSignature:"page.locator('body > section > div > div.fixed.top-0.right-10.md\:block.hidden.md\:w-1\/5.overflow-hidden.flex-shrink-0 > div > div > div.flex.gap-2.justify-end.items-center.relative > div:nth-child(2)')",
    },
    {
        name : "Update preference",
        description:"Text for updating preference",
        locatorSignature:"Update preferences",
    },
    {
        name : "Manage Friend Groups",
        description:"Link for Manage Friend Groups",
        locatorSignature:"Manage Friend Groups",
    },
    {
        name : "Discover on Recobee",
        description:"Link for Discover on Recobee",
        locatorSignature:"Discover on Recobee",
    },
    {
        name : "Customize Reco Feed",
        description:"Link for Customize Reco Feed",
        locatorSignature:"Customize Reco Feed",
    },
    {
        name : "Manage Account",
        description:"Link for Manage Account",
        locatorSignature:"Manage Account",
    },
    {
        name : "Invite Friends on Recobee",
        description:"Link for Invite Friends on Recobee",
        locatorSignature:"Invite Friends on Recobee",
    },
    {
        name : "Import Data",
        description:"Link for Import Data",
        locatorSignature:"Import Data",
    },
    {
        name : "Notification icon",
        description:"Quick access to view notifications",
        locatorSignature:"page.locator('body > section > div > div.fixed.top-0.right-10.md\:block.hidden.md\:w-1\/5.overflow-hidden.flex-shrink-0 > div > div > div.flex.gap-2.justify-end.items-center.relative > div:nth-child(3)')",
    },
    
];