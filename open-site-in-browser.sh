#!/usr/bin/env node
var args = require('yargs').argv;
var openUrl = require('openurl');

if (args.staging) {
  openUrl.open('https://chalees-staging.firebaseapp.com');
} else {
  openUrl.open('https://chaleesmin.school');
}
