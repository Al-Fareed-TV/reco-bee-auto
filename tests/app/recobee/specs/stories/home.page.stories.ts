import { Story } from "@sparrowimagineers/sparrow-dev";
import { allComponents } from "../../components/all.components";
import { validateUserLogin } from "./login.page.stories";
const homePageData ={
    searchItem :"Ironman 3"
}
export const validateHomePage: Story = {
    title: "Home page test",
    tag: "@smoke",
    description: `This story tests Homepage of the application`,
    steps: `
    1. Enter ${homePageData.searchItem} in Search bar
    2. Press 'Enter' from keyboard
        `,
    locators: allComponents,
};