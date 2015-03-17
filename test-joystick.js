"use strict";

var Cylon = require("cylon");
var config = __dirname + "/nyko.json";
var buttons = ["square","circle","triangle","x","left_stick","right_stick","l1","l2","r1","r2","start","select"];
Cylon
  .robot()
  .connection("joystick", { adaptor: "joystick" })
  .device("controller", { driver: "joystick", config: config })
  .on("ready", function(my) {
    buttons.forEach(function(button) {
      my.controller.on(button + ":press", function() {
        console.log("Button " + button + " pressed.");
      });

      my.controller.on(button + ":release", function() {
        console.log("Button " + button + " released.");
      });
    });

    my.controller.on("left_x:move", function(pos) {
      console.log("Left Stick - X:", pos);
    });

    my.controller.on("right_x:move", function(pos) {
      console.log("Right Stick - X:", pos);
    });

    my.controller.on("left_y:move", function(pos) {
      console.log("Left Stick - Y:", pos);
    });

    my.controller.on("right_y:move", function(pos) {
      console.log("Right Stick - Y:", pos);
    });
  });

Cylon.start();
