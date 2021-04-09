# payever-qa-automation
This is used for creating 4 test cases which is my trial test.


How to clone/copy project from repo?

Check if you have nodejs and npm installed on your local mashine type in terminal node -v that shows nodejs version if installed type in terminal npm -v that shows npm version if installed
Go to this link https://github.com/Filipv95/payever-qa-automation.git
Clone/copy the repo to your local mashine
Type in terminal npm install, which will install all dependecies
How to run tests?

To run all test type: ENV=staging TAG=@trial npm run test

How to run tests in Docker?

In entrypoint.sh set test parameters (see How to run tests?)
Then type in terminal ./initiate_container.sh to run tests
