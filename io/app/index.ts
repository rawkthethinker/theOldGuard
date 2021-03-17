import cmdState from '../../utils/cmd.ts'
import CraeteFolder from '../../utils/folder.ts'


const directory = "./oldguard/io/app"
// const Windowsdirectory = "C:\\Users\\Rawk\\Documents\\codebender\\sprint\\oldguard\\io\\app\\resources"
const Windowsdirectory = "C:\\Users\\Rawk\\Documents\\codebender\\sprint\\hello"
const app = async () => {


    //ensureDir("./notes").then(() => console.log('has')).catch(() => console.log("err"))
    try {
        console.log(`creating ${Deno.args}`)
        console.log(`in folder ${Deno.cwd()}`)
        //await Deno.chmod(Deno.cwd(), 0o777);
        console.log(`Creating ${name} Folder`)
        await CraeteFolder(`./test`)



        try {
            await getList(`${directory}/resources`)
        } catch {
            console.log("unable to copy files")
        }


    } catch (e) {
        console.log("unable to copy folder", e)
    }


}


async function getList(path: string, pre = " ") {
    for await (const dirEntry of Deno.readDir(path)) {

        const entryPath = `${path}/${dirEntry.name}`;
        const getPath = entryPath.split('/')

        let dest = `${pre}${dirEntry.name}`

        //console.log();
        if (dirEntry.isDirectory) {

            await CraeteFolder(`./test/${dest}`);

            await getList(entryPath, `${dest}/`);


        } else if (dirEntry.isFile) {
            await Deno.copyFile(entryPath, `./test/${dest}`);
        }
    }

}



export default app