import { useOutletContext } from "react-router-dom";
import { ResponseSearchAllFormsType } from "../../../../../modules/user/types/responseSearchAllForms";
import { RibbonLayout } from "../../../../layout/ribbonLayout/RibbonLayout";
import { InButton } from "../../../../ui-elements/button/InButton";
import { PreLoader } from "../../../preLoader/PreLoader";
import { QuestionnaireCards } from "../../questionnaireCards/QuestionnaireCards";
import s from "./questionnaireTabs.module.scss";

export const QuestionnaireTabs = () => {
 const [
  ,
  ,
  ,
  ,
  setPageFu,
  refetchFu,
  ,
  ,
  ,
  ,
  allFormsAccount,
  isLoadingAccount,
  isFetchingAccount,
 ]: [
  undefined,
  undefined,
  undefined,
  undefined,
  () => void,
  () => void,
  undefined,
  undefined,
  undefined,
  undefined,
  ResponseSearchAllFormsType,
  boolean,
  boolean
 ] = useOutletContext();

 if (isLoadingAccount) return <PreLoader />;

 console.log("2", allFormsAccount);

 return (
  <RibbonLayout setPageFu={setPageFu} isFetching={isFetchingAccount}>
   <h2 className={s.recommendations}>Рекомендации</h2>
   <div className={s.mainQuestionnaire}>
    {allFormsAccount?.results.length > 0 &&
     allFormsAccount?.results.map((x) => <QuestionnaireCards key={x.formId} x={x} />)}

    {allFormsAccount?.results.length === 0 && !isFetchingAccount && (
     <InButton textButton="Ничего не найдено. Назад" isValidInButton={false} onClick={refetchFu} />
    )}

    {/*{allFormsAccount?.results.length > 0 ? (
     allFormsAccount?.results.map((x) => <QuestionnaireCards key={x.formId} x={x} />)
    ) : isFetchingAccount ? (
     <PreLoader />
    ) : (
     <InButton textButton="Ничего не найдено. Назад" isValidInButton={false} onClick={refetchFu} />
    )}*/}
   </div>
  </RibbonLayout>
 );
};
