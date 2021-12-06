const fs = require("fs");

// async
function replaceContents(file, replacement, cb) {
  fs.readFile(replacement, (err, contents) => {
    if (err) {
      return cb(err);
    }
    fs.writeFile(file, contents, cb);
  });
}

replaceContents(
  "./GoogleService-Info.plist",
  "./notification-configurations/production/GoogleService-Info.plist",
  (err) => {
    if (err) {
      // handle errors here
      throw err;
    }
    console.log("done");
  }
);

// sync - not recommended

function replaceContentsSync(file, replacement) {
  var contents = fs.readFileSync(replacement);
  fs.writeFileSync(file, contents);
}

// replaceContentsSync('../GoogleService-Info.plist', '../notification-configurations/production/GoogleService-Info.plist');
