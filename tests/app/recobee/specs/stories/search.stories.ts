import { Story } from "@sparrowimagineers/sparrow-dev";
import { searchBarComponent } from "../../components/common/search.component";
const data = {
    searchMovie:'Titanic'
}
export const valdateSearchPage: Story = {
    title: "Search bar test",
    tag: "@smoke",
    description: `This story tests Searchinf movies`,
    steps: `
    When Click on Search bar,
    Then fill ${data.searchMovie} in search bar
    Then verify that Search Suggestion is visible
    Then Hit 'Enter' key.
    Then verify 'Movie' text is displayed
    Then verify 'List' text is displayed
    Then verify 'Cast' text is displayed
    Then verify cast seetion is visible
    Then click on First movie listed
        `,
    locators: [searchBarComponent]
};

