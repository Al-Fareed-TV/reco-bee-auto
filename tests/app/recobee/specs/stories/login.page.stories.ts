import { Story } from "@sparrowimagineers/sparrow-dev";
import { loginComponent } from "../../components/login.component";
const data = {
    phone: 7348842781,
    text: "Titanicg"
}
export const userLogin: Story = {
    title: "Test User log in",
    tag: "@smoke @login",
    description: `This story verifies user is able to log in successfully with valid credentials`,
    steps: `1. wait till page loads
        2. Click Sign Up/Login Button
        3. wait till Login form is displayed 
        4. Enter ${data.phone} in Phone number input field
        5. Click on Request OTP button
        6. Wait till the OTP form modal is loaded
        7. Wait till the Login Button is clicked
        8. Wait for the page to be loaded 
        `,

    locators: [loginComponent],
};