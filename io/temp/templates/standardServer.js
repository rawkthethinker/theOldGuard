import { useRouter, useEffect, Head } from 'components'


export default function Standard() {

    const router = useRouter();

    useEffect(() => {
        console.log(router.query)
        return () => {
            console.log("clean up")
        }
    }, [router])

    return (
        <div className="w-full h-full">
            <Head title={"Standard"} />


        </div>
    )
}



export async function getServerSideProps(context) {
  const { query } = context

    return {
      props: { },
    }

}
