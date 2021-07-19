// Requirements
const { CommandoClient } = require("discord.js-commando");
const path = require("path");
const Discord = require("discord.js");

// Constants
const dotenv = require("dotenv");
dotenv.config();

const PREFIX = process.env.PREFIX;
const TOKEN = process.env.TOKEN;

// Client
const owners = [ "802317699157196850", "629824127376556052"];
const link = "https://discord.gg/dFmgxrxU5A";
const client = new CommandoClient({ commandPrefix: PREFIX, owner: owners, invite: link });

// Registry
client.registry
  .registerDefaultTypes()
  .registerDefaultGroups()
  .registerDefaultCommands()

// Events
client.once("ready", () => console.log(`Logged in as ${client.user.tag}! (${client.user.id})`));
client.on("error", console.error);

client.on("message", message => {
  const rand = Math.floor(Math.random() * 200);
  if(rand === 69) message.reply("No one ever expects the Spanish Inquisition!");
})

// Login
client.login(TOKEN)

// Server
const app = require("express")();
app.get("/", (req, res) => res.send("Server is live"));
app.listen(3000, () => console.log("Listening on port 3000"));
