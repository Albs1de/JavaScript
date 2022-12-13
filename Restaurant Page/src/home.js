import siteTemplate from "./template";

export default function createHome() {
  const siteTemplates = siteTemplate();
  const homeTab = siteTemplates.homeTab;
  const updateContent = siteTemplates.updateContent;

  homeTab.addEventListener("click", () => {
    updateContent("<p>This is the Home Tab Content!</p>");
  });

  return homeTab;
}
//createHome();
