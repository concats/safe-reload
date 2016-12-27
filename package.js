Package.describe({
  name: "concats:safe-reload",
  version: "0.1.3",
  summary: "Provides a safety belt for recovering from a broken HCP on Cordova.",
  documentation: "README.md",
  git: "https://github.com/concats/cordova-plugin-safe-reload.git"
});

Package.onUse(function(api) {
  api.versionsFrom("1.0.3.1");
  api.addFiles("safe-reload.js", ["client"]);
  api.export(["SafeReload"], ["client"]);
});

Cordova.depends({
  "com.percolatestudio.cordova.safereload": "https://github.com/concats/cordova-plugin-safe-reload/tarball/2cd176129bc320d100425f03c84bcd9a205e7628"
});
