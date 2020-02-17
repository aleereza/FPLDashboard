// exports.onPreBootstrap = () => {
//   var fs = require("fs")

//   fs.writeFile("mynewfile3.txt", "Hello content!", function(err) {
//     if (err) throw err
//     console.log("Saved!")
//   })
// }

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/mydashboard/)) {
    page.matchPath = `/mydashboard/*`

    // Update the page.
    createPage(page)
  }
}
