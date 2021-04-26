# tengri 👁‍🗨

<img src="https://i.imgur.com/n3qkLbu.png"/>


# 📝 what is tengri
tengri is a request logger for your <a href="https://www.nodejs.org" target="_blank">node js</a> web API based application that comes with an interface to visualize requests made to your server. 


# 🛠 how to use
- to use tengri run the command in the project root `yarn add tengriwatch` or `npm install tengriwatch`
- create a connection file for tengri to access your database, e.g. `connect.js` (if you are using knex.js skip this step):
 - put the code below in the js file:
 ```js
    // Update with your config settings.
    module.exports = {
        development: {
            client: 'mysql',
            connection: {
            host:'localhost',
            database: '',
            user:     '',
            password: ''
            },
        },

        staging: {
            client: 'mysql',
            connection: {
            host:'localhost',
            database: '',
            user:     '',
            password: ''
            },
            pool: {
            min: 2,
            max: 10
            },
            migrations: {
            tableName: 'knex_migrations'
            }
        },

        production: {
            client: 'mysql',
            connection: {
            host:'localhost',
            database: '',
            user:     '',
            password: ''
            },
            pool: {
            min: 2,
            max: 10
            },
            migrations: {
            tableName: 'knex_migrations'
            }
        }
    };
 ```


- in the app/index/server
    - require tengri module `var Tengri = require("tengriwatch");`
    - initialize tengri `Tengri.init('connect.js')` (if you're using knex, just pass knexfile.js)
    - require tengri server `var {tengriServer} = require("tengriwatch");`
    - require tengri `var {tengri} = require("tengriwatch");` 
    - use tengri server `app.use(tengriServer);`
    - call tengri middleware above the route you want to monitor 
        ```js
            app.use(tengri)
            app.use('/d',home)

            OR

            app.use('/d',tengri,home)
        ```
- navigate to your host or domain /tengri/tengriserver


<img src="https://i.imgur.com/3ZdjkHR.png"/>

# built by
- Chukwudi Khagan Ubah - <a href="https://www.twitter.com/chuksgpfr">twitter</a>



