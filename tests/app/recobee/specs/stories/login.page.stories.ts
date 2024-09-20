import { Story } from "@sparrowimagineers/sparrow-dev";
import { loginComponent } from "../../components/login.component";
const data = {
    phone: process.env.PHONE,
    otp: process.env.OTP
}
export const validateUserLogin: Story = {
    title: "Test User log in",
    tag: "@smoke @login",
    description: `This story verifies user is able to log in successfully with valid credentials`,
    steps: `1. wait till page loads
        2. Click Sign Up/Login Button
        3. wait till Login form is displayed 
        4. Enter ${data.phone} in Phone input field
        6. click on Request OTP Button
        7. Enter ${data.otp} in OTP input field
        `,

    locators: [loginComponent],
};