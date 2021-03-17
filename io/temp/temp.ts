import CraeteFolder from '../../utils/folder.ts'

const directory = "./oldguard/io/temp"


const template = async () => {

    console.log(`creating template ${Deno.args}`)

    let status = await CraeteFolder(`./${Deno.args[2]}/${Deno.args[1]}`)
    console.log(`Creating ./${Deno.args[2]}/${Deno.args[1]} Folder`,status)

    if (status) {

        try {
            console.log(`generating template`)

            await Deno.copyFile(`${directory}/templates/${Deno.args[3]}.js`, `./${Deno.args[2]}/${Deno.args[1]}/${Deno.args[4]}.js`);

        } catch (e) {
            console.log("Unable to generate file")
        }
    }
}




export default template