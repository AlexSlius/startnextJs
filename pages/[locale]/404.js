import { useTranslation } from "next-i18next";

import { getStaticPaths, makeStaticProps } from "../../src/lib/getStatic";

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

const Homepage = () => {
    const { t } = useTranslation(['common']);

    return (
        <div>
            <h1>404</h1>
        </div>
    )
}

export default Homepage;
