import { serve, ServerRequest, Response} from "https://deno.land/std/http/server.ts";
import { serveFile } from "https://deno.land/std/http/file_server.ts";


const server = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of server) {
  
    let response: Response | undefined;
    response =  await serveFile(req, './index.html');

    req.respond(response);
    serverLog(req,response!);
    
}





function serverLog(req: ServerRequest, res: Response): void {
    const d = new Date().toISOString();
    const dateFmt = `[${d.slice(0, 10)} ${d.slice(11, 19)}]`;
    const s = `${dateFmt} "${req.method} ${req.url} ${req.proto}" ${res.status}`;
    console.log(s);
}