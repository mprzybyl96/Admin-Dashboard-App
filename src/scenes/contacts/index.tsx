import React from "react";
import ContactsInformationComponent from "../../components/DataComponents/ContactsInformationComponent";
import { TitleComponent } from "../../components/TitleComponent";

const Contacts = () => {
  return (
    <>
      <TitleComponent name="contacts" />
      <ContactsInformationComponent />
    </>
  );
};

export default Contacts;
