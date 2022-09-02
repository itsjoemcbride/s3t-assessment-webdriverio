// Scenario:
//  1. Go to google site
//  2. Search for the keyword 'Test Automation Learning'
//  3. Select the link with Udemy course
//  4. Verify if the Udemy site has opened
//  5. Search for BDD with Cucumber
//  6.Click on the course with highest rating from the list of search results
// Task: Automate the above scenario given using JS and any tool (WebdriverIO or Selenium). The Project should be shared as a GitHub project. Each automation step should have assertions''

describe("Assessment", function () {
  it("checks the heading", async function () {
    await browser.url("https://inspiring-wisp-f3b8d3.netlify.app/");

    const heading = $("h1");
    await expect(heading).toHaveText("Rubric App");
  });

  it("checks the page loads with reasonable defaults", async function () {
    await browser.url("https://inspiring-wisp-f3b8d3.netlify.app/");

    const score = $("#score");
    const percent = $("#percentage");
    await expect(score).toHaveText("0");
    await expect(percent).toHaveText("0");
  });

  it("generates the right score if a project 'Meets All Expectations'", async function () {
    await browser.url("https://inspiring-wisp-f3b8d3.netlify.app/");

    const table1 = $("//td[2]");
    const table2 = $("//tr[2]/td[2]");
    const table3 = $("//tr[3]/td[2]");

    table1.click();
    table2.click();
    table3.click();

    const score = $("#score");
    const percent = $("#percentage");
    await expect(score).toHaveText("30");
    await expect(percent).toHaveText("100");
  });

  it("generates the right score if a project 'Meets Most Expectations'", async function () {
    await browser.url("https://inspiring-wisp-f3b8d3.netlify.app/");

    const table1 = $("//td[3]");
    const table2 = $("//tr[2]/td[3]");
    const table3 = $("//tr[3]/td[3]");

    table1.click();
    table2.click();
    table3.click();

    const score = $("#score");
    const percent = $("#percentage");
    await expect(score).toHaveText("24");
    await expect(percent).toHaveText("80");
  });

  it("generates the right score if a project 'Meets Some Expectations'", async function () {
    await browser.url("https://inspiring-wisp-f3b8d3.netlify.app/");

    const table1 = $("//td[4]");
    const table2 = $("//tr[2]/td[4]");
    const table3 = $("//tr[3]/td[4]");

    table1.click();
    table2.click();
    table3.click();

    const score = $("#score");
    const percent = $("#percentage");
    await expect(score).toHaveText("18");
    await expect(percent).toHaveText("60");
  });

  it("generates the right score if a project is 'Unable to Grade'", async function () {
    await browser.url("https://inspiring-wisp-f3b8d3.netlify.app/");

    const table1 = $("//td[5]");
    const table2 = $("//tr[2]/td[5]");
    const table3 = $("//tr[3]/td[5]");

    table1.click();
    table2.click();
    table3.click();

    const score = $("#score");
    const percent = $("#percentage");
    await expect(score).toHaveText("0");
    await expect(percent).toHaveText("0");
  });

  it("generates the right score when a variety of grade descriptors are selected", async function () {
    await browser.url("https://inspiring-wisp-f3b8d3.netlify.app/");

    const table1 = $("//td[2]");
    const table2 = $("//tr[2]/td[3]");
    const table3 = $("//tr[3]/td[4]");

    table1.click();
    table2.click();
    table3.click();

    const score = $("#score");
    const percent = $("#percentage");
    await expect(score).toHaveText("24");
    await expect(percent).toHaveText("80");
  });
});
