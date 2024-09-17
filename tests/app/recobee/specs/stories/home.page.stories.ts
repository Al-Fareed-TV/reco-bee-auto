import { Story } from "@sparrowimagineers/sparrow-dev";
import { allComponents } from "../../components/all.components";
import { validateUserLogin } from "./login.page.stories";
const homePageData = {
    searchItem: "Iron Man 3"
}
export const validateHomePage: Story = {
    title: "Home page test",
    tag: "@smoke",
    description: `This story tests Homepage of the application`,
    steps: `
    1. Wait for the page to be loaded
    2. Verify 'Recommendations Generator' text is visible
    3. Check Recent Release Section is visible
    4. Scroll left to 100 on Recent Release Section
    5. Scroll up till Top Charts Section is visible
        `,
    locators: allComponents,
};

