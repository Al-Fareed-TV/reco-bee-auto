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
        name: "Phone input field",
        description: "To enter user's phone number",
        locatorSignature: "page.getByPlaceholder('Type your Mobile Number')"
    },
    {
        name: "OTP request button",
        description: "method to request for otp",
        locatorSignature: "page.getByText('Request OTP')"
    },
    {
        name: "OTP input field",
        description: "provided css locator has 6 child div element, In each div element there is a child input element to enter otp",
        locatorSignature: "page.locator('body > div > div > div.fixed.top-0.left-0.w-screen.h-screen.flex.items-center.justify-center.z-50 > div > div > div > div > div > div > div:nth-child(1) > input')\
        body > div > div > div.fixed.top-0.left-0.w-screen.h-screen.flex.items-center.justify-center.z-50 > div > div > div > div > div > div > div:nth-child(2) > input\
        body > div > div > div.fixed.top-0.left-0.w-screen.h-screen.flex.items-center.justify-center.z-50 > div > div > div > div > div > div > div:nth-child(3) > input\
        body > div > div > div.fixed.top-0.left-0.w-screen.h-screen.flex.items-center.justify-center.z-50 > div > div > div > div > div > div > div:nth-child(4) > input\
        body > div > div > div.fixed.top-0.left-0.w-screen.h-screen.flex.items-center.justify-center.z-50 > div > div > div > div > div > div > div:nth-child(5) > input\
        body > div > div > div.fixed.top-0.left-0.w-screen.h-screen.flex.items-center.justify-center.z-50 > div > div > div > div > div > div > div:nth-child(6) > input"
    },
    
    {
        name: "Login button",
        description: "login button",
        locatorSignature: "page.getByText('Login')"
    },
];