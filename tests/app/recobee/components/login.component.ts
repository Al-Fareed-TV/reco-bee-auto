import { Locators } from '@sparrowimagineers/sparrow-dev'

export const loginComponent: Locators = [

    {
        name: "Sign Up/Login Button",
        description: "user sign up or login",
        locatorSignature: "page.getByRole('button', { name: 'Sign Up/Login' })",
    },
    {
        name: "Login form",
        description: "Modal to sign up/login user",
        locatorSignature: "page.locator('body > div > div > div.fixed.top-0.left-0.w-screen.h-screen.flex.items-center.justify-center.z-50 > div')"
    },
    {
        name: "Email input field",
        description: "To enter user's phone number",
        locatorSignature: "page.locator('#identifierId')"
    },
    {
        name: "Next button",
        description: "user's request for otp",
        locatorSignature: "page.getByText('Next')"
    },
];