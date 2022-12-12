import { useRouter } from "next/router";

/** This is a nested dynamic route */
function PortfolioProjectPage() {
    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query?.projectid);

    return (<div><h1>
        Placeholder
    </h1></div>)
}

export default PortfolioProjectPage;