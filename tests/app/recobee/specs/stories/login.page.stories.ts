import { Story } from "@sparrowimagineers/sparrow-dev";
import { loginComponent } from "../../components/login.component";
const data = {
    email: process.env.USER_EMAIL,
    password: process.env.USER_PASSWORD
}
export const validateUserLogin: Story = {
    title: "Test User log in",
    tag: "@smoke @login",
    description: `This story verifies user is able to log in successfully with valid credentials`,
    steps: `1. wait till page loads
        2. Click Sign Up/Login Button
        3. wait till Login form is displayed 
        4. Click on Continue with Google
        5. Enter ${data.email} in Email input field 
        6. click on Next Button
        7. Enter ${data.password} in password input field
        8. click on Next Button
        `,

    locators: [loginComponent],
};