const http = require('http');

const server = http.createServer((req,res)=>{
if(req.url==='/')
res.end('Welcome to our home page')
if(req.url==='/about')
res.end('Welcome to our about page')
else(`
    <h1>Oops!</h1>
    <p>page not Found</p>
    <a href='/' >back home</a>
    `
)
})

server.listen(5000);
