import { useTranslation } from "next-i18next";

import ButtonTypeOne from "../ui/ButtonTypeOne";

import styled from "../../../public/styles/modules/footer.module.scss";

export const Footer = () => {
    const { t } = useTranslation(['footer']);

    return (
        <footer className={styled.footer}>
            <div className="container">
                <div className={styled.footer__row}>
                    <div className={`${styled.footer__col} ${styled.footer__col_one}`}>
                        <div className={styled.footer__title}>{t("title")}</div>
                        <div className={styled.footer__btn}>
                            <ButtonTypeOne text={t('button_request')} />
                        </div>
                    </div>
                    <div className={`${styled.footer__col} ${styled.footer__col_two}`}></div>
                    <div className={`${styled.footer__col} ${styled.footer__col_three}`}></div>
                </div>
            </div>
        </footer>
    )
}