import { Story } from "@sparrowimagineers/sparrow-dev";
import { allComponents } from "../../components/all.components";

const data = {
    searchedMovie:process.env.MOVIE
}

export const validateMovieDescriptionPage: Story = {
    title: "Movie description page test",
    tag: "@smoke",
    description: `This story tests movies description page of the application`,
    steps: `
    1. Click on Search bar,
    2. Then fill ${data.searchedMovie} in search bar
    3. Then verify that Search Suggestion is visible
    4. Then Hit 'Enter' key.
    5. Then verify 'Movie' text is displayed
    6. Then verify 'List' text is displayed
    7. Then verify 'Cast' text is displayed
    8. Then verify cast seetion is visible
    9. Then click on First movie listed
    10. Wait for the page to be loaded
    11. Verify the movie name ${data.searchedMovie} is visible
    `,
    locators: allComponents,
};

