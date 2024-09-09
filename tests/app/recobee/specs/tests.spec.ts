import { validateHomePage } from "./stories/home.page.stories";
import { sparrowStory } from "../../../fixtures/sparrow.fixture";
const stories = [validateHomePage];

stories.forEach((story) => {
  sparrowStory(story.title, async ({ sparrow }) => {
    await sparrow.runStory(story);
  });
});