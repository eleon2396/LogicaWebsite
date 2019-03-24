
//Is it possible to store and then retrieve this information from another file,
// rather than have it directly in the script?
const nameToUrl = {
    "daniel bleh":"https://www.google.com",
    "david blah":"https://www.bing.com"
};

for (const [name, link] of Object.entries(nameToUrl))
{
  //console.log(name);
  document.write("<div><li><a href='" + link + "' class='developerPageLink'>" + name + "</a></li></div>"); 
}