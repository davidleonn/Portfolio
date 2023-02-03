import React from "react";
import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";

const Contact = () => {
  const intl = useIntl();
  return (
    <section
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/d779b96d-0adf-41b9-9570-ee317e25683d"
        method="POST"
        className="p-3 border border-gray-100 flex flex-col max-w-[600px] w-full"
      >
        <header className="pb-8 h text-gray-300">
          <p className="text-4xl font-bold inline border-b-4 border-red-500 ">
            <FormattedMessage id="contact" />
          </p>
          <p className="py-4">
            <FormattedMessage id="contact-page.intro" />
          </p>
        </header>
        <input
          className="p-2 bg-[#ccd6f6]"
          type="text"
          placeholder={intl.formatMessage({ id: "contact-page.form-name" })}
          name="name"
          required={true}
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          placeholder={intl.formatMessage({ id: "contact-page.form-email" })}
          name="email"
          required={true}
        />
        <textarea
          className="p-2 bg-[#ccd6f6]"
          placeholder={intl.formatMessage({ id: "contact-page.form-message" })}
          name="message"
          required={true}
        ></textarea>
        <button className="text-white border-2 hover:bg-red-500 hover:border-red-500 px-4 py-3 my-8 mx-auto flex items-center">
          <FormattedMessage id="contact-page.form-button" />
        </button>
      </form>
    </section>
  );
};

export default Contact;
