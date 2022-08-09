# RandomSteamName

This uses puppeteer to use chromium to log in onto your profile and edit your name 'automatically',
its my first time using puppeteer theres probably 1000 ways to make this better but this is what i made,

Instructions:

1. Open up index.js
2. Type the details you use to login onto steam in the quotes on line 9, 10
3. then on line 11 (profileID) go to your steam profile copy URL and copy paste whats after /id/
 - example https://steamcommunity.com/id/932109830192309213011/
 only copy 932109830192309213011
 you may have set a custom id which is words not numbers, doesnt matter
4. save file 
5. type npm i to install packages
6. type node index.js to start it


once you start it itll prompt you for your steam auth code
go on your phone type the code in
then you will get a random name from the array every 5 minutes
go to line 133 to change the number to what you want
