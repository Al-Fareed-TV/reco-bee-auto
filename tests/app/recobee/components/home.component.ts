import { Locators } from '@sparrowimagineers/sparrow-dev'

export const homeComponent: Locators = [

    {
        name: "Account Section",
        description: "User's acount dashboard",
        locatorSignature: "page.locator('body > div > div > div.md\:w-1\/5.w-0.fixed.top-3.left-50.space-y-2')",
    },
    {
        name: "Login form",
        description: "Modal to sign up/login user",
        locatorSignature: "page.locator('body > div > div > div.fixed.top-0.left-0.w-screen.h-screen.flex.items-center.justify-center.z-50 > div')"
    },
    {
        name: "Phone number input field",
        description: "To enter user's phone number",
        locatorSignature: "page.getByPlaceholder('Type your Mobile Number')"
    },
    {
        name: "Request OTP button",
        description: "user's request for otp",
        locatorSignature: "page.getByText('Request OTP')"
    },
    {
        name: "OTP form modal",
        description: "Input otp",
        locatorSignature: "page.locator('body > div > div > div.fixed.top-0.left-0.w-screen.h-screen.flex.items-center.justify-center.z-50 > div > div')"
    },
{
        name: "Login Button",
        description: "Input otp",
        locatorSignature: "page.getByText('Login')"
    },
];