import React from "react";
import { FormattedMessage } from "react-intl";

const Info = () => {
  return (
    <section className="flex flex-col h-[400px] justify-center bg-slate-800">
      <div className="grid sm:grid-cols-2 gap-8 px-4">
        <article className="sm:text-right text-4xl font-bold">
          <p>
            <FormattedMessage id="info-page.greet" />
          </p>
        </article>
        <aside>
          <p>
            <FormattedMessage id="info-page.description" />
          </p>
        </aside>
      </div>
    </section>
  );
};

export default Info;
