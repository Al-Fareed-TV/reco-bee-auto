import { Story } from "@sparrowimagineers/sparrow-dev";
import { quickAccessComponent } from "../../components/common/quickacces.component";
import { validateUserLogin } from "./login.page.stories";
export const validateQuickAccessComponent: Story = {
    title: "Quick Access component test",
    tag: "@smoke",
    description: `This story tests quick access component in home page`,
    steps: `
    Verify whether Quick access section is visible,
    When clicked on Trending icon,
    Then Check whether 'This section is upcoming' text is dispayed,
    Then Click on Notification icon,
    When clicked on Settings icon
    Then verify that Update preference, Manage Friend Groups, Discover on Recobee, Customize Reco Feed, Manage Account, Invite Friends on Recobee, Import Data links are displayed,
    When the any of the links are clicked from settings icon links,
    Then verify that url contains '/settings'
        `,
    locators: [quickAccessComponent]
};

