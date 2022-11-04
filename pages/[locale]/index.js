import { useTranslation } from "next-i18next";

import { Footer } from "../../src/components/Footer/Footer";

import { getStaticPaths, makeStaticProps } from "../../src/lib/getStatic";

const getStaticProps = makeStaticProps(['common', 'footer']);
export { getStaticPaths, getStaticProps };

const Homepage = () => {
    const { t } = useTranslation(['common']);

    return (
        <>
            <Footer/>
        </>
    )
}

export default Homepage;
