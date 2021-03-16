![The Old Guard Logo](banner.png)
# theOldGuard
This is the createChinaApp cli tool

# Setup

> Note this is best used on a linux enviroment
### Requirements 

The Deno runtime is required to run the old guard
Linux
`curl -fsSL https://deno.land/x/install/install.sh | sudo DENO_INSTALL=/usr/local sh`
Windows
`choco install deno`

To learn more about [Deno](https://deno.land/).   


 ### Lets begin
 This is a toolchain to setup and manage your software development

Install Deno Extension
[Deno Extension](https://www.codenewbie.org/podcast/how-to-harness-privilege-to-create-equitable-design). 


> This tool is still in development
        
To Create A app run
        
`deno run --allow-run oldguard/index.ts  createApp `
which will then create a client folder with the china framework app created, and developed on parse and react
so
`cd client\client `
and run
`npm install npm start`

## To Create A Template
`deno run --allow-run oldguard/index.ts  template {subfoldername} {foldername} {filetype} {templatename}`

`deno run --allow-run oldguard/index.ts  template server page strandard home`
[{filetype}](./io/temp/templates)

### ToDo
1. create a add to client new remote for purposes of seperating the tool and the app
2. a hook file generator based on it being the most used to start a page.
3. a components module for the components
4. create a push to vercel for deployment purposes. !still thinking about it 
5. a app template for SPA
6. packaging this in npm for ease of use maybe for now just cloning works(creating more easy way to pull cli)
7. Create A cloud flag to check if cloud cli
8. Clean up code
9. Manipulate from Browser