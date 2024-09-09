import { test as base, expect } from "@playwright/test";
import { SparrowInteractiveStory } from "@sparrowimagineers/sparrow-dev";

export const sparrowStory = base.extend<{ sparrow: SparrowInteractiveStory }>({
  sparrow: async ({ page }, use) => {
    const testTimeout = 120000;
    sparrowStory.setTimeout(testTimeout);
    await page.goto(`${process.env.BASE_URL}`);
    const sparrowInteractiveStory = new SparrowInteractiveStory(page, expect, {
      timeout: testTimeout,
    });
    sparrowInteractiveStory.setup();
    await use(sparrowInteractiveStory);
    sparrowInteractiveStory.teardown();
  },
});

export { expect } from "@playwright/test";