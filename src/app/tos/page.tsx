import React from "react";

const page = () => {
  return (
    <div className="mx-auto min-h-screen max-w-3xl px-2 py-20 md:py-32">
      <h1 className="mb-10 text-2xl font-semibold md:text-3xl">
        Terms and Conditions
      </h1>
      <ul className="list-inside list-decimal space-y-5">
        <li>
          <span className="font-semibold">Partnership Agreement:</span>
          <ul>
            <li>
              By joining the MetaLogic Partner Program, you agree to abide by
              these Terms and Conditions and enter into a partnership agreement
              with MetaLogic.
            </li>
          </ul>
        </li>

        <li>
          <span className="font-semibold">Eligibility:</span>
          <ul>
            <li>
              To be eligible for partnership, individuals or entities must meet
              MetaLogic's criteria, which may include but are not limited to,
              industry experience, geographic location, and business reputation.
            </li>
          </ul>
        </li>

        <li>
          <span className="font-semibold">Responsibilities of Partners:</span>
          <ul className="list-disc pl-10">
            <li>
              Partners are responsible for actively promoting MetaLogic's
              products and services.
            </li>
            <li>
              Partners must adhere to ethical business practices and act in the
              best interests of clients and MetaLogic.
            </li>
            <li>
              Partners should maintain a positive and professional image when
              representing MetaLogic.
            </li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Commission Structure:</span>
          <ul className="list-disc pl-10">
            <li>
              Partners will receive commissions for qualified leads and
              successful conversions in accordance with the agreed-upon
              commission structure.
            </li>
            <li>
              Commission rates and payment terms will be outlined in the
              partnership agreement.
            </li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Confidentiality:</span>
          <ul className="list-disc pl-10">
            <li>
              Partners agree to maintain the confidentiality of any proprietary
              information shared by MetaLogic, including but not limited to
              product details, pricing, and business strategies.
            </li>
            <li>
              Partners shall not disclose such information to third parties
              without prior written consent from MetaLogic.
            </li>
          </ul>
        </li>

        <li>
          <span className="font-semibold">Intellectual Property:</span>
          <ul className="list-disc pl-10">
            <li>
              MetaLogic retains all rights, title, and interest in its
              intellectual property, including trademarks, copyrights, and trade
              secrets.
            </li>
            <li>
              Partners may only use MetaLogic's intellectual property as
              expressly authorized by MetaLogic and must not infringe upon any
              intellectual property rights.
            </li>
          </ul>
        </li>

        <li>
          <span className="font-semibold">Termination:</span>
          <ul className="list-disc pl-10">
            <li>
              Either party may terminate the partnership agreement with written
              notice if the other party breaches any provisions of these Terms
              and Conditions.
            </li>
            <li>
              Upon termination, all rights and obligations of the parties will
              cease, except those provisions that expressly survive termination.
            </li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Modification of Terms:</span>
          <ul className="list-disc pl-10">
            <li>
              MetaLogic reserves the right to modify these Terms and Conditions
              at any time without prior notice.
            </li>
            <li>
              Partners will be notified of any changes, and continued
              participation in the Partner Program constitutes acceptance of the
              modified terms.
            </li>
          </ul>
        </li>

        <li>
          <span className="font-semibold">Governing Law:</span>
          <ul className="list-disc pl-10">
            <li>
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of Nepal.
            </li>
            <li>
              Any disputes arising out of or in connection with these Terms and
              Conditions shall be resolved through arbitration in accordance
              with the rules of Metalogic Software Pvt. Ltd.
            </li>
          </ul>
        </li>

        <li>
          <span className="font-semibold">Entire Agreement</span>
          <ul className="list-disc pl-10">
            <li>
              These Terms and Conditions constitute the entire agreement between
              MetaLogic and its partners regarding the Partner Program and
              supersede all prior agreements and understandings, whether oral or
              written.
            </li>
          </ul>
        </li>
      </ul>
      <hr className="my-10" />
      By participating in the MetaLogic Partner Program, you acknowledge that
      you have read, understood, and agreed to these Terms and Conditions. These
      Terms and Conditions establish the guidelines and expectations for
      partners participating in the MetaLogic Partner Program, ensuring a
      mutually beneficial and transparent partnership.
    </div>
  );
};

export default page;
