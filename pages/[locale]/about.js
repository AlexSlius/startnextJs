import { useTranslation } from "next-i18next";

import { getStaticPaths, makeStaticProps } from "../../src/lib/getStatic";

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

const Homepage = () => {
    const { t } = useTranslation(['common']);

    return (
        <div>
            about
        </div>
    )
}

export default Homepage;
