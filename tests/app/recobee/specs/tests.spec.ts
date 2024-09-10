import { validateLandingPage } from "./stories/landing.page.stories";
import { userLogin } from "./stories/login.page.stories";
import { sparrowStory } from "../../../fixtures/sparrow.fixture";
const stories = [
  // validateLandingPage,
  userLogin
];

stories.forEach((story) => {
  sparrowStory(story.title, async ({ sparrow }) => {
    await sparrow.runStory(story);
  });
});