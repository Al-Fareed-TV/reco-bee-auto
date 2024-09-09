import { Story } from "@sparrowimagineers/sparrow-dev";
import { homeComponent } from "../../components/home.component";
const data = {
    phone:7348842781,
    text:"Titanicg"
}
export const validateHomePage: Story = {
    title: "Validate home page",
    tag: "@smoke",
    description: `This story verifies that all the components are loaded successfully`,
    steps: `1. wait till page loads, then Check the logo is visible at top left corner
        2. Verify that Search Bar is visible
        3. Enter ${data.text} in Search Bar then click Enter 
        4. Verify that Sign Up/Login Button is displayed
        5. Click Sign Up/Login Button
        6. wait till Login form is displayed
        7. Enter ${data.phone} in Phone number input field
        8. Click on Request OTP button and wait for 5000ms
        `,
        
    locators : [homeComponent] ,
  };