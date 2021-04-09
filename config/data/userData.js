// 
// Exports user data
// userData.js
// 

require('dotenv').config()

module.exports = {

    UserEmail: 'admin@admin.com',
    UserPassword: process.env.userPass
}