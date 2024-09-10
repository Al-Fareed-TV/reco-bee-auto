import { validateHomePage } from "./stories/home.page.stories";
import { userLogin } from "./stories/login.page.stories";
import { sparrowStory } from "../../../fixtures/sparrow.fixture";
const stories = [
  // validateHomePage,
  userLogin
];

stories.forEach((story) => {
  sparrowStory(story.title, async ({ sparrow }) => {
    await sparrow.runStory(story);
  });
});