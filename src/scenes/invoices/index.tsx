import ManageInvoicesComponent from "../../components/DataComponents/InvoicesBalancesComponent";
import { TitleComponent } from "../../components/TitleComponent";

const Invoices = () => {
  return (
    <>
      <TitleComponent name="invoices" />
      <ManageInvoicesComponent />
    </>
  );
};

export default Invoices;
