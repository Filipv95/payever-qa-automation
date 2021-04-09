# payever-qa-automation
This is used for creating 4 test cases which is my trial test.


### How to clone/copy project from repo?

Check if you have nodejs and npm installed on your local mashine type in terminal node -v that shows nodejs version if installed type in terminal npm -v that shows npm version if installed
Go to this link https://github.com/Filipv95/payever-qa-automation.git
Clone/copy the repo to your local mashine
Type in terminal `npm install`, which will install all dependecies

After that you need to create `.env` file and write password to use in `config/data/userData.js`

For example:

in `.env` you need write userPass=writePassword

### How to run tests?

*To run trial test on UI:*

Go to `wdio.conf.js` scroll to the `chromeOptions` and uncomment `args: ['--kiosk']`

In console run: *ENV=staging TAG=@trial npm run test*
* To choose diferent use type dev|prod instead of staging
* To choose diferent use type @smoke|@acceptance|@regression|@performance|@WIP instead of @trial

*To run trial test in Headless mode:*

Go to `wdio.conf.js` scroll to the `chromeOptions` and uncomment
`args: ['--headless', '--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage', '--window-size=1920x1080']`

In console run: **ENV=staging TAG=@trial npm run test**