import React from "react";

const page = () => {
  return (
    <div className="container mx-auto my-8 rounded bg-white p-8 shadow-md">
      <h1 className="mb-6 text-3xl font-bold">Cookie Policy</h1>

      <p className="mb-4">
        Welcome to our website. This page informs you of our policies regarding
        the collection, use, and disclosure of personal data when you use our
        website and the choices you have associated with that data. By using the
        website, you agree to the collection and use of information in
        accordance with this policy.
      </p>

      <h2 className="mb-4 text-xl font-semibold">What are Cookies?</h2>

      <p className="mb-4">
        Cookies are small pieces of data stored on your device (computer or
        mobile device) that are sent between your browser and a web server. They
        serve various purposes, such as remembering your preferences, improving
        user experience, and analyzing web traffic.
      </p>

      <h2 className="mb-4 text-xl font-semibold">Types of Cookies We Use</h2>

      <p className="mb-4">
        We use different types of cookies for various purposes:
      </p>

      <ul className="mb-4 list-disc pl-8">
        <li>
          <strong>Essential Cookies:</strong> These cookies are necessary for
          the website to function properly. They enable basic functionalities
          and are usually set in response to actions made by you, such as
          setting your privacy preferences or filling in forms.
        </li>
        <li>
          <strong>Analytical/Performance Cookies:</strong> These cookies allow
          us to analyze how visitors use our website, track site performance,
          and improve its functionality. The information collected is aggregated
          and anonymous.
        </li>
        <li>
          <strong>Functionality Cookies:</strong> These cookies enable enhanced
          functionality and personalization, such as remembering your
          preferences and choices.
        </li>
        <li>
          <strong>Targeting/Advertising Cookies:</strong> These cookies are used
          to deliver relevant advertisements based on your interests. They may
          also limit the number of times you see an ad and help measure the
          effectiveness of advertising campaigns.
        </li>
      </ul>

      <h2 className="mb-4 text-xl font-semibold">
        Your Choices Regarding Cookies
      </h2>

      <p className="mb-4">
        When you visit our website, you have the option to accept or decline
        cookies. Most web browsers automatically accept cookies, but you can
        modify your browser settings to decline cookies if you prefer. However,
        this may affect your experience on the website.
      </p>

      <h2 className="mb-4 text-xl font-semibold">User Consent</h2>

      <p className="mb-4">
        By using our website, you consent to the use of cookies as described in
        this Cookie Policy. If you do not agree with the practices described
        herein, you should not use the website.
      </p>

      <h2 className="mb-4 text-xl font-semibold">
        Changes to Our Cookie Policy
      </h2>

      <p className="mb-4">
        We may update our Cookie Policy from time to time. We will notify you of
        any changes by posting the new policy on this page. We advise you to
        review this policy periodically for any changes.
      </p>

      <h2 className="mb-4 text-xl font-semibold">Contact Us</h2>

      <p className="mb-4">
        If you have any questions about our Cookie Policy, please contact us.
      </p>
    </div>
  );
};

export default page;
