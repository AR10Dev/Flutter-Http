import { serve } from "https://deno.land/std/http/server.ts";
const s = serve({ port: 8000 });
console.log("https://localhost:8000/");
for await (const req of s) {
  req.respond({ body: '{"Sensore 1:["Temperatura":"22°C","Name":Sensore 1 Temp,"Ora":"12.30"]","Sensore 2:["Temperatura":"23°C","Name":Sensore 2 Temp,"Ora":"12.40"]","Sensore 3:["Temperatura":"19°C","Name":Sensore 3 Temp,"Ora":"10.00"]","Sensore 4:["Temperatura":"22°C","Name":Sensore 4 Temp,"Ora":"11.15"]"}' });
}