
//Is it possible to store and then retrieve this information from another file,
// rather than have it directly in the script?
const nameUrlPairs = [
    { 
      name: "daniel bleh",
      link: "https://www.google.com"
    },
    {
      name: "david blah",
      link: "https://www.bing.com"
    }
];

for (var i = 0; i < nameUrlPairs.length; i++)
{
  //console.log(nameUrlPairs[i].link);
  document.write("<div><li><a href='" + nameUrlPairs[i].link + "' class='developerPageLink'>" + nameUrlPairs[i].name + "</a></li></div>"); 
}