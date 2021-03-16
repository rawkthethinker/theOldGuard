async function createFolder(name: string) {

    console.log(`Creating ${name} Folder`)
    try {

        await Deno.mkdir(name, { recursive: true });
        console.log("Folder Created");

        return true

    } catch (e) {

        if (Deno.errors.AlreadyExists.name == e.name) {
            console.log("Folder Already Exists")
            return (false)
        }

    }

}

export default createFolder