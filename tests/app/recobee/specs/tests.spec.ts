import { validateLandingPage } from "./stories/landing.page.stories";
import { validateUserLogin } from "./stories/login.page.stories";
import { validateHomePage } from "./stories/home.page.stories";
import { validateQuickAccessComponent } from "./stories/quick.access.stories";
import { valdateSearchPage } from "./stories/search.stories";
import { validateMovieDescriptionPage } from "./stories/movie.description.stories";
import { sparrowStory } from "../../../fixtures/sparrow.fixture";
const stories = [
  // validateLandingPage,
  // validateLandingPage,
  // validateQuickAccessComponent,
  // validateHomePage,
  // valdateSearchPage,
  validateMovieDescriptionPage
];
sparrowStory.beforeEach(async({sparrow})=>{
 await sparrow.runStory(validateUserLogin)
});
stories.forEach((story) => {
  sparrowStory(story.title, async ({ sparrow }) => {
    await sparrow.runStory(story);
  });
});