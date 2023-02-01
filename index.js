const http = require('http');








// function 

function respondText (req, res) {
    res.setHeader('Content-Type','text/plain');
    res.end('hi');
}

function respondJson (req, res) {
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify({name: 'errami', number: 6 }));
}

function respondNotFound (req, res) {
    res.writeHead(404, {'Content-Type':'text/plain'});
    res.end('Not Found');
}

function respondEcho (req, res) {
    const { input = '' } = querystring.parse(
        req.url
        .split('?')
        .slice(1)
        .join('')
    )
    res.setHeader('Content-Type', 'application/json')
    res.end(
        JSON.stringify({
        normal: input,
        shouty: input.toUpperCase(),
        characterCount: input.length,
        backwards: input
        .split('')
        .reverse()
        .join('')
    })
    )
    }
    

const server = http.createServer((req,res)=>{
        if(req.url === '/'){
            return respondText(req,res);
        }
        else if(req.url === '/json'){
            return respondJson(req,res);
        }
        else if (req.url.match(/^\/echo/)) return respondEcho(req, res);
        else return respondNotFound(req,res);
    }   
);

server.listen(3004,()=>console.log("hello errami"));




