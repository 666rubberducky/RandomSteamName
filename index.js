const colors = require("colors");
const puppeteer = require("puppeteer");

(async () => {

/////////////////////////////////////////////////////////////////////////////////
// TYPE INFO IN THE QUOTES

  const username = ""; // steam login name
  const password = ""; // steam password
  const profileID = ""; // your profile ID (right click your profile page and copy whats after /id/ )

///////////////////////////////////////////////////////////////////////////////// 

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  try {
  await page.setDefaultNavigationTimeout(0);
  await page.goto("https://steamcommunity.com/login/home/?goto=", {
    waitUntil: "networkidle0",
  });
  await page.type("#input_username", username.toString());
  await page.type("#input_password", password.toString());
  const { prompt } = require("enquirer");

  const response = await prompt({
    type: "input",
    name: "auth",
    message: "type in your steam auth code: ",
  });

  const authString = response.auth.toString();
  console.log("you typed ".bgBlue + authString.bgBlue);
  await Promise.all([
    page.click("#login_btn_signin > button"),
    await page.waitForTimeout(2000),
    await page.type("#twofactorcode_entry", authString),
    await page.click(
      "#login_twofactorauth_buttonset_entercode > div:nth-child(1)"
    ),
    page.waitForNavigation({ waitUntil: "networkidle0" }),
  ]);
  console.log("Successfully logged in!".bgGreen);
 
  } catch (err) {
    console.log("You messed up your login details!".bgRed);
    browser.close()
  }
  ///////////////////////////////////////////////////////////////////////// LOGIN COMPLETE
  async function changeName() { // Add however many more names yo uwant
    const arrayNames = [
      "Substancelearn",
      "Chewlearn",
      "Demonicsilent",
      "Foolpark",
      "Toughpoor",
      "Defectiveappla",
      "Camptawdry",
      "Numerouscactus",
      "Greenimminent",
      "Toothbrushunke",
      "Scatteredcamer",
      "Petitetemper",
      "Roomydeserve",
      "Catgold",
      "Throneperiodic",
      "Shockingtroubl",
      "Statuesqueagre",
      "Opengreen9",
      "Workablecommit",
      "Momfoo",
      "Designframe",
      "Wonderfuldrop8",
      "Spraydysfuncti",
      "Testborder",
      "Horribleframe",
      "Farhollow",
      "Uninterestedcu",
      "Aberranteye3",
      "Imminentdiverg",
      "Fineill9",
      "Shockcalculate",
      "Maddeningsmoke",
      "Islandsmell5",
      "Viewstare6",
      "Dangeroussilk",
      "Gutturalrobin",
      "hiinthechat",
      "maso",
      "dcock",
      "mkd > all",
      "cheese",
      "coolgamer87",
      "rubberducky",
      "pop smoke",
      "kid cudi",
    ];
    const randomNumber = Math.floor(Math.random(0) * arrayNames.length);
    const randomName = arrayNames[randomNumber];
    const page2 = await browser.newPage();
    await page2.setDefaultNavigationTimeout(0);
    console.log("5 mins have passed".bgYellow);
    await page2.goto(
      "https://steamcommunity.com/id/" + profileID + "/edit/info",
      { waitUntil: "networkidle0" }
    );
    console.log("Went to your profile".bgBlue);
    await page2.type(
      "#application_root > div.profileeditshell_Shell_2kqKZ > div.profileeditshell_PageContent_23XE6 > form > div:nth-child(11) > div.profileedit_ProfileBoxContent_3s6BB > div:nth-child(1) > label > div.DialogInput_Wrapper._DialogLayout.Panel.Focusable > input",
      "1"
    );
    for (let i = 0; i < 15; i++) {
      await page2.keyboard.press("Backspace");
    }
    console.log("Deleted old name".bgBlue);
    await page2.waitForTimeout(1500);
    await page2.type(
      "#application_root > div.profileeditshell_Shell_2kqKZ > div.profileeditshell_PageContent_23XE6 > form > div:nth-child(11) > div.profileedit_ProfileBoxContent_3s6BB > div:nth-child(1) > label > div.DialogInput_Wrapper._DialogLayout.Panel.Focusable > input",
      randomName
    );
    console.log("Your new name is :".bgYellow + " " + randomName.brightRed);
    await Promise.all([
      page2.click(
        "#application_root > div.profileeditshell_Shell_2kqKZ > div.profileeditshell_PageContent_23XE6 > form > div.profileedit_SaveCancelButtons_2KJ8a > button.DialogButton._DialogLayout.Primary.Focusable"
      ),
      page2.waitForNavigation({ waitUntil: "networkidle0" }),
    ]);
  }
  changeName();
  setInterval(async () => {
    changeName();
  }, 300000); // Change this number to what you want its set to 300000ms which is 5 minutes
})();
//
