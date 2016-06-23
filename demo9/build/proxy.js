var path = require("path");
// module.exports.proxyList = [
//   {
//     path: "/api/text",
//     target: "https://a.bolo.me/v1/openapi/app/text",
//     host: "https://a.bolo.me"
//   }
// ];


module.exports.api = function (app) {

  app.get ("/api/text",function (req,res) {
    res.sendFile(path.resolve(__dirname,"../mock/text.json"))
  });

}