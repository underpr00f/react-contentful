import React from "react";
import { Helmet } from 'react-helmet';

const Banner = ({ children, title, subtitle }) => {
  return (
  	<>
	  	<Helmet>
	      <title>{title.charAt(0).toUpperCase() + title.slice(1)}</title>
	      <meta charSet="utf-8" />
	      <meta name="description" content={`${subtitle}`} />
	    </Helmet>
	    <div className="banner">
	      <h1>{title}</h1>
	      <div />
	      <p>{subtitle}</p>
	      {children}
	    </div>
    </>
  );
};

export default Banner;
