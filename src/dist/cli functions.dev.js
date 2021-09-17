#!/usr/bin/env node
"use strict";

var linksStats = function linksStats(array) {
  var allLinks = array.map(function (link) {
    return link.href;
  });
  var linksUnique = new Set(allLinks);
  return "Total : ".concat(allLinks.length, "\nUnique : ").concat(linksUnique.size);
};

var linksRotos = function linksRotos(array) {
  var mensajeLinks = array.map(function (link) {
    return link.message;
  });
  var rotos = mensajeLinks.filter(function (link) {
    return link.message === "FAIL";
  });
  return "Broken : ".concat(broken.length);
};