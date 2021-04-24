var {exec} = require("child_process");
require("dotenv").config()
const logError = require("./errorLogger");
var path = require("path")
var Knex = require("knex")
var {Model} = require("objection");


const initialize=(file_path)=>{
    //createMigration(file_path)
    var knexConfig = require(file_path);
    
    // Initialize knex.
    const knex = process.env.NODE_ENV === "development" ? Knex(knexConfig.development) : 
    process.env.NODE_ENV === "staging" ? Knex(knexConfig.staging) : 
    process.env.NODE_ENV === "production" ? Knex(knexConfig.production)
    : Knex(knexConfig.development); //added prodcution incase of mispelling, wont mess up production DB

    // Bind all Models to the knex instance. You only
    // need to do this once before you use any of
    // your model classes.
    Model.knex(knex);

    //create table
    createSchema(knex).then((message)=>{
        if(message){
            console.log(message)
        }
    })
}

async function createSchema(knex) {
    if (await knex.schema.hasTable('tengri_watch')) {
      return;
    }
  
    // Create database schema. You should use knex migration files
    // to do this. We create it here for simplicity.
    await knex.schema.createTable('tengri_watch', table => {
        table.increments('id').primary();
        table.string('method').notNullable();
        table.datetime('occured', {useTz:true, precision: 6 });
        table.string('route').notNullable();
        table.string('status').notNullable();
        table.string('statusMessage').notNullable();
        table.string('remoteAddress').notNullable();
        table.string('remoteFamily').notNullable();
        table.string('host').notNullable();
        table.text('payload').notNullable();
        table.text('response').notNullable();
        table.text('headers').notNullable();
        table.string('duration');
        table.datetime('started', {useTz:true, precision: 6 })
        table.datetime('finished', {useTz:true, precision: 6 })
    });

    return "tengri has created tengri watch table";
  }


module.exports = initialize;