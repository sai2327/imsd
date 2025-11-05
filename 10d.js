const url=require('url');
const address='https://www.google.com/search?q=google';
const parsedUrl=url.parse(address,true);
console.log('Host:',parsedUrl.host);
console.log('pathname:',parsedUrl.pathname);
console.log('Query Parameters:',parsedUrl.query);
