import { Locators } from '@sparrowimagineers/sparrow-dev'

export const landingComponent:Locators =[
    {
        name : "logo",
        description:"alt attribute of the RecoBee logo in header",
        locatorSignature:"page.getByAltText('Recobee-logo ')",
    },
    {
        name: "Search Bar",
        description:"To search Movies or Series in header",
        locatorSignature:"page.getByRole('textbox', { name: 'Search Movies or Series' })",
    },
    {
        name: "Sign Up/Login Button",
        description:"user sign up or login",
        locatorSignature:"page.getByRole('button', { name: /Sign Up/Login/i })",
    },
    {
        name:"Login form",
        description:"Modal to sign up/login user",
        locatorSignature:"page.locator('body > div > div > div.fixed.top-0.left-0.w-screen.h-screen.flex.items-center.justify-center.z-50 > div')"
    },
    {
        name:"Phone number input field",
        description:"To enter user's phone number",
        locatorSignature:"page.getByPlaceholder('Type your Mobile Number')"
    },
    {
        name:"Request OTP button",
        description:"user's request for otp",
        locatorSignature:"page.getByText('Request OTP')"
    },
    // {
    //     name:"Close login form button",
    //     description:"To close the Modal to sign up/login user",
    //     locatorSignature:"page.locator('body > div > div > div.fixed.top-0.left-0.w-screen.h-screen.flex.items-center.justify-center.z-50 > div > svg')"
    // },
    // {
    //     name:"Hero banner",
    //     description:"Hero banner Heading ",
    //     locatorSignature:"page.locator('body > div > div > div.bg-black.w-full.flex-col.flex.gap-10 > div.relative.grid.grid-cols-5.gap-x-2 > div.w-full.flex-col.gap-10.absolute.top-1\/2.left-1\/2.transform.-translate-x-1\/2.-translate-y-1\/2.flex.items-center.justify-center > h1')"
    // },
    // {
    //     name:"Top 10 movies banner",
    //     description:"Top 10 movies suggestion banner",
    //     locatorSignature:"page.locator('body > div > div > div.px-4.sm\:px-\[50px\].flex.flex-col.gap-10 > div:nth-child(1) > div > div.relative > div > div')"
    // },
    // {
    //     name:"Next Button",
    //     description:"Top 10 movies next button for scrolling left",
    //     locatorSignature:"page.locator('body > div > div > div.px-4.sm\:px-\[50px\].flex.flex-col.gap-10 > div:nth-child(1) > div > div.relative > img.absolute.top-1\/2.right-0.z-10.cursor-pointer.rounded-full.p-2.transform.-translate-y-1\/2')"
    // },
    // {
    //     name:"Previous Button",
    //     description:"Top 10 movies previous button for scrolling right",
    //     locatorSignature:"page.locator('body > div > div > div.px-4.sm\:px-\[50px\].flex.flex-col.gap-10 > div:nth-child(1) > div > div.relative > img.absolute.top-1\/2.left-0.z-10.cursor-pointer.rounded-full.p-2.rotate-180.transform.-translate-y-1\/2')"
    // },
    
];