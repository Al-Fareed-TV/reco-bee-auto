import { validateLandingPage } from "./stories/landing.page.stories";
import { validateUserLogin } from "./stories/login.page.stories";
import { validateHomePage } from "./stories/home.page.stories";
import { sparrowStory } from "../../../fixtures/sparrow.fixture";
const stories = [
  // validateLandingPage,
  validateHomePage
];
sparrowStory.beforeEach(async({sparrow})=>{
 await sparrow.runStory(validateUserLogin)
});
stories.forEach((story) => {
  sparrowStory(story.title, async ({ sparrow }) => {
    await sparrow.runStory(story);
  });
});