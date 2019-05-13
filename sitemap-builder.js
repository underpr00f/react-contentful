require("babel-register")({
  presets: ["es2015", "react"]
});
const Client = require('./src/Contentful').default;
const router = require('./sitemap-routes').default;
const Sitemap = require('react-router-sitemap').default;

async function generateSitemap() {
	try {
      	let response = await Client.getEntries({
        	content_type: "beachResortRoom"
    	});
    	items = response.items
      	let slugMap = [];
	    for(var i = 0; i < items.length; i++) {
	      slugMap.push({ slug: items[i].fields.slug });
	    }

		const paramsConfig = {
		  "/rooms/:slug": slugMap
		};

	    return (
	      new Sitemap(router)
	      	.applyParams(paramsConfig)
	        .build('https://underproof-react-contentful.netlify.com')
	        .save('./public/sitemap.xml')
	    );
	} catch(e) {
		console.log(e);
	} 
}

generateSitemap();