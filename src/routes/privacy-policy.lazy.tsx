import { createLazyFileRoute } from '@tanstack/react-router';

import { LandingHeader } from '~/components/common/header';
import { Footer } from '~/components/pages/home/footer';

export const Route = createLazyFileRoute('/privacy-policy')({
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <>
      <LandingHeader className="relative" />

      <main className="container my-10 flex flex-col gap-5">
        <h3 className="text-center text-4xl font-bold">
          <strong>Privacy Policy</strong>
        </h3>
        <p>
          <strong>RedDuck Privacy Policy</strong>{' '}
          <em>Effective Date: 28 June 2025</em>
        </p>
        <p>
          This Privacy Policy describes how RedDuck (&quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;) collects, uses, and discloses your
          personal information when you visit our website{' '}
          <a href="https://redduck.io">redduck.io</a>, use our services, or
          interact with us. We are committed to protecting your privacy and
          handling your personal information in a transparent and lawful manner.
        </p>
        <ol>
          <li>
            <strong> Who We Are.</strong> RedDuck, LLC Saperne Pole street 12,
            Kyiv, Ukraine{' '}
            <a href="mailto:compliance@redduck.io">compliance@redduck.io</a>,
            +380502147263.
          </li>
          <li>
            <strong> What Personal Information We Collect.</strong> We may
            collect and process various types of personal information about you,
            depending on how you interact with our website and services.
          </li>
          <li>
            <strong> Information You Provide Directly to Us</strong>
          </li>
        </ol>
        <ul>
          <li>
            <strong>Contact Information:</strong> Name, email address, Telegram
            handle, postal address, phone number.
          </li>
          <li>
            <strong>Account Information:</strong> your project details,
            documents we create as a result of research and development upon
            your request, and your payment options.
          </li>
          <li>
            <strong>Communications:</strong> Information you provide when you
            communicate with us, such as your messages to us, your product or
            project ideas, feedback or responses.
          </li>
        </ul>
        <ol>
          <li>
            <strong>
              {' '}
              Information Collected Automatically (via Cookies and Tracking
              Technologies):
            </strong>
          </li>
        </ol>
        <ul>
          <li>
            <strong>Device Information:</strong> IP address, device type,
            operating system, browser type.
          </li>
          <li>
            <strong>Usage Data: </strong>our pages visited, links clicked, time
            spent on pages, referral URL, search terms.
          </li>
          <li>
            <strong>Location Data:</strong> General geographic location derived
            from your IP address.
          </li>
          <li>
            <strong>Online Identifiers:</strong> Cookie identifiers, unique
            device identifiers.
          </li>
        </ul>
        <ol>
          <li>
            <strong> Information from Other Sources:</strong>
          </li>
        </ol>
        <ul>
          <li>
            We may receive information from third-party services, partners, or
            publicly available sources.
          </li>
        </ul>
        <ol>
          <li>
            <strong> Sensitive Personal Information (under CCPA/CPRA):</strong>{' '}
            We generally do not collect sensitive personal information (e.g.,
            social security numbers, precise geolocation, health information,
            racial or ethnic origin, religious or philosophical beliefs, union
            membership) unless explicitly provided by you for a specific purpose
            (e.g., for specific service delivery) and with your explicit consent
            where required. If we do, its use will be limited to the purposes
            for which it was collected.
          </li>
          <li>
            <strong>
              {' '}
              Purposes and Legal Bases for Processing Your Personal Information.
            </strong>{' '}
            We collect and process your personal information for the following
            purposes and under the following legal bases:
          </li>
        </ol>
        <ul>
          <li>
            <strong>To Provide and Maintain Our Services:</strong>
            <ul>
              <li>
                <em>Purpose:</em> To operate our website, deliver
                products/services, process transactions, and provide customer
                support.
              </li>
              <li>
                <em>Legal Basis (GDPR):</em> Performance of a contract with you
                or to take steps at your request before entering into a
                contract.
              </li>
            </ul>
          </li>
          <li>
            <strong>To Improve Our Website and Services:</strong>
            <ul>
              <li>
                <em>Purpose:</em> To understand how users interact with our
                website, troubleshoot issues, and enhance user experience.
              </li>
              <li>
                <em>Legal Basis (GDPR):</em> Our legitimate interests (e.g., to
                improve our offerings, understand user behavior).
              </li>
            </ul>
          </li>
          <li>
            <strong>For Marketing and Advertising:</strong>
            <ul>
              <li>
                <em>Purpose:</em> To send you promotional communications,
                personalize content, and display targeted advertisements.
              </li>
              <li>
                <em>Legal Basis (GDPR):</em> Your consent (where required), or
                our legitimate interests (e.g., to promote our business to
                existing customers, direct marketing within legal limits).
              </li>
            </ul>
          </li>
          <li>
            <strong>To Communicate with You:</strong>
            <ul>
              <li>
                <em>Purpose:</em> To respond to your inquiries, send updates,
                and provide important notices.
              </li>
              <li>
                <em>Legal Basis (GDPR):</em> Performance of a contract,
                legitimate interests, or your consent.
              </li>
            </ul>
          </li>
          <li>
            <strong>For Security and Fraud Prevention:</strong>
            <ul>
              <li>
                <em>Purpose:</em> To detect and prevent fraudulent activities,
                protect our systems, and ensure the security of our users.
              </li>
              <li>
                <em>Legal Basis (GDPR):</em> Our legitimate interests (e.g., to
                protect our business, comply with security obligations) or legal
                obligation.
              </li>
            </ul>
          </li>
          <li>
            <strong>To Comply with Legal Obligations:</strong>
            <ul>
              <li>
                <em>Purpose:</em> To meet legal, regulatory, or governmental
                requests and to enforce our terms and conditions.
              </li>
              <li>
                <em>Legal Basis (GDPR):</em> Compliance with a legal obligation.
              </li>
            </ul>
          </li>
        </ul>
        <ol>
          <li>
            <strong> How We Share Your Personal Information.</strong> We may
            share your personal information with the following categories of
            third parties:
          </li>
        </ol>
        <ul>
          <li>
            <strong>Service Providers:</strong> Third-party vendors who perform
            services on our behalf (e.g., hosting, payment processing,
            analytics, marketing, customer support). These providers are
            contractually obligated to protect your data and only use it for the
            purposes we specify.
          </li>
          <li>
            <strong>Business Partners:</strong> With whom we collaborate on
            specific products, services, or promotions.
          </li>
          <li>
            <strong>Affiliates:</strong> Other companies within our corporate
            group.
          </li>
          <li>
            <strong>Legal &amp; Regulatory Authorities:</strong> When required
            by law, court order, or to protect our rights, property, or safety.
          </li>
          <li>
            <strong>Business Transfers:</strong> In connection with a merger,
            acquisition, or sale of assets, your personal information may be
            transferred to the acquiring entity.
          </li>
          <li>
            <strong>With Your Consent:</strong> We may share your information
            for any other purpose with your explicit consent.
          </li>
        </ul>
        <p>
          <strong>For California Residents (CCPA/CPRA):</strong>
        </p>
        <ul>
          <li>
            We do not &quot;sell&quot; or &quot;share&quot; your personal
            information in exchange for monetary compensation. However, we may
            &quot;share&quot; your personal information for cross-context
            behavioral advertising, which may be considered a &quot;sale&quot;
            or &quot;sharing&quot; under California law. You have the right to
            opt-out of such sharing. Please see Section 6 for details.
          </li>
          <li>
            We disclose the following categories of personal information to
            third parties for business purposes:&nbsp;
            <ul>
              <li>Identifiers,&nbsp;</li>
              <li>Commercial Information,&nbsp;</li>
              <li>Internet Activity.&nbsp;</li>
            </ul>
          </li>
          <li>
            The categories of third parties to whom this information is
            disclosed are [e.g., analytics providers, advertising partners,
            payment processors]:
            <ul>
              <li>
                <a href="https://clutch.co/">https://clutch.co/</a>
              </li>
              <li>
                <a href="https://www.cloudflare.com/">
                  https://www.cloudflare.com/
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ol>
          <li>
            <strong> International Data Transfers (GDPR).</strong> If we
            transfer your personal information outside of the European Economic
            Area (EEA) to countries not deemed to provide an adequate level of
            data protection by the European Commission, we will do so based on:
          </li>
        </ol>
        <ul>
          <li>
            Standard Contractual Clauses (SCCs) approved by the European
            Commission.
          </li>
          <li>Binding Corporate Rules (BCRs).</li>
          <li>Your explicit consent.</li>
          <li>Other lawful mechanisms as permitted by GDPR.</li>
        </ul>
        <p>
          We ensure that such transfers comply with GDPR requirements and that
          your personal information remains protected.
        </p>
        <ol>
          <li>
            <strong> Your Data Protection Rights. </strong>You have various
            rights regarding your personal information, depending on your
            location and applicable laws.
          </li>
          <li>
            <strong> For EU/EEA Residents (GDPR Rights):</strong>
          </li>
        </ol>
        <ul>
          <li>
            <strong>Right to be Informed:</strong> You have the right to receive
            clear, transparent, and easily understandable information about how
            we use your personal information and your rights.
          </li>
          <li>
            <strong>Right of Access:</strong> You have the right to request a
            copy of the personal information we hold about you.
          </li>
          <li>
            <strong>Right to Rectification:</strong> You have the right to
            request correction of inaccurate or incomplete personal information
            we hold about you.
          </li>
          <li>
            <strong>
              Right to Erasure (&quot;Right to be Forgotten&quot;):
            </strong>{' '}
            You have the right to request the deletion of your personal
            information under certain circumstances.
          </li>
          <li>
            <strong>Right to Restrict Processing:</strong> You have the right to
            request that we limit the way we use your personal information under
            certain circumstances.
          </li>
          <li>
            <strong>Right to Data Portability:</strong> You have the right to
            receive your personal information in a structured, commonly used,
            and machine-readable format and to transmit it to another
            controller.
          </li>
          <li>
            <strong>Right to Object:</strong> You have the right to object to
            the processing of your personal information in certain situations
            (e.g., for direct marketing purposes).
          </li>
          <li>
            <strong>
              Rights in relation to Automated Decision-Making and Profiling:
            </strong>{' '}
            You have the right not to be subject to a decision based solely on
            automated processing, including profiling, which produces legal
            effects concerning you or similarly significantly affects you,
            except under certain conditions.
          </li>
          <li>
            <strong>Right to Withdraw Consent:</strong> If we are relying on
            your consent to process your personal information, you have the
            right to withdraw that consent at any time. This will not affect the
            lawfulness of processing based on consent before its withdrawal.
          </li>
          <li>
            <strong>Right to Lodge a Complaint:</strong> You have the right to
            lodge a complaint with a supervisory authority, particularly in the
            EU/EEA Member State of your habitual residence, place of work, or
            the place of the alleged infringement.
          </li>
        </ul>
        <ol>
          <li>
            <strong> For California Residents (CCPA/CPRA Rights):</strong>
          </li>
        </ol>
        <ul>
          <li>
            <strong>Right to Know:</strong> You have the right to request that
            we disclose to you the personal information we have collected, used,
            shared, or sold about you, including:
            <ul>
              <li>Categories of personal information collected.</li>
              <li>Specific pieces of personal information collected.</li>
              <li>
                Categories of sources from which personal information is
                collected.
              </li>
              <li>
                Business or commercial purpose for collecting, selling, or
                sharing personal information.
              </li>
              <li>
                Categories of third parties to whom we disclose personal
                information.
              </li>
            </ul>
          </li>
          <li>
            <strong>Right to Delete:</strong> You have the right to request the
            deletion of your personal information, subject to certain
            exceptions.
          </li>
          <li>
            <strong>Right to Opt-Out of Sale or Sharing:</strong> You have the
            right to direct us not to sell or share your personal information to
            third parties. We provide a prominent &quot;Do Not Sell or Share My
            Personal Information&quot; link on our website homepage and in our
            cookie banner for this purpose.
          </li>
          <li>
            <strong>
              Right to Limit Use and Disclosure of Sensitive Personal
              Information:
            </strong>{' '}
            You have the right to direct us to limit the use and disclosure of
            your sensitive personal information to certain purposes.
          </li>
          <li>
            <strong>Right to Correct Inaccurate Personal Information:</strong>{' '}
            You have the right to request the correction of inaccurate personal
            information we maintain about you.
          </li>
          <li>
            <strong>Right to Non-Discrimination:</strong> We will not
            discriminate against you for exercising any of your CCPA/CPRA
            rights.
          </li>
        </ul>
        <p>
          <strong>To Exercise Your Rights</strong>, please contact us using the
          contact details provided in Section 1. We will respond to your request
          in accordance with applicable laws. We may need to verify your
          identity before processing your request.
        </p>
        <ol>
          <li>
            <strong> Data Retention.</strong> We retain your personal
            information only for as long as necessary to fulfill the purposes
            for which it was collected, including for the purposes of satisfying
            any legal, accounting, or reporting requirements. To determine the
            appropriate retention period, we consider the amount, nature, and
            sensitivity of the personal information, the potential risk of harm
            from unauthorized use or disclosure, the purposes for which we
            process your personal information, and whether we can achieve those
            purposes through other means, and the applicable legal requirements.
          </li>
          <li>
            <strong> Data Security</strong> We implement appropriate technical
            and organizational measures to protect your personal information
            from unauthorized access, loss, misuse, alteration, or destruction.
            These measures include encryption, access controls, regular security
            assessments. However, please be aware that no method of transmission
            over the internet or method of electronic storage is 100% secure.
          </li>
          <li>
            <strong> Children&apos;s Privacy</strong> Our website and services
            are not intended for children under the age of 18. We do not
            knowingly collect personal information from children without
            parental consent. If we become aware that we have collected personal
            information from a child without verifiable parental consent, we
            will take steps to remove that information from our records.
          </li>
          <li>
            <strong> Changes to This Privacy Policy</strong> We may update this
            Privacy Policy from time to time to reflect changes in our practices
            or for other operational, legal, or regulatory reasons. We will
            notify you of any significant changes by posting the new Privacy
            Policy on our website and updating the &quot;Effective Date&quot; at
            the top of this policy. We encourage you to review this Privacy
            Policy periodically.
          </li>
          <li>
            <strong> Contact Us</strong> If you have any questions or concerns
            about this Privacy Policy or our data practices, please contact us
            at by email:{' '}
            <a href="mailto:compliance@redduck.io">compliance@redduck.io</a>
          </li>
        </ol>
        <h3>
          <strong>
            RedDuck Cookies and Other Local Storage Technologies Policy
          </strong>
        </h3>
        <p>
          <em>Effective Date: 28 June 2025</em>
        </p>
        <p>
          This policy explains what{' '}
          <strong>cookies and other local storage technologies</strong> are, how
          we use them, the types we use, how third-parties might use them on our
          website, and your choices regarding these technologies.
        </p>
        <ol>
          <li>
            <strong>
              {' '}
              What are Cookies and Other Local Storage Technologies?
            </strong>
          </li>
        </ol>
        <p>
          <strong>Cookies</strong> are small text files that are stored on your
          device (computer, tablet, smartphone) when you visit a website. They
          are widely used to make websites work more efficiently, as well as to
          provide reporting information and to remember your preferences.
          Cookies can be &quot;persistent&quot; or &quot;session&quot; cookies.
          Persistent cookies remain on your device when you go offline, while
          session cookies are deleted as soon as you close your web browser.
        </p>
        <p>
          <strong>Other Local Storage Technologies</strong> refer to various
          methods that websites can use to store data directly in your browser
          or on your device beyond traditional cookies. These include:
        </p>
        <ul>
          <li>
            <strong>Local Storage (Web Storage):</strong> Allows websites to
            store data persistently on your browser, meaning it remains even
            after you close your browser or restart your computer, until you
            manually clear it.
          </li>
          <li>
            <strong>Session Storage:</strong> Similar to local storage, but the
            data is cleared when you close your browser session.
          </li>
          <li>
            <strong>IndexedDB and Web SQL:</strong> More powerful client-side
            databases for storing larger amounts of structured data.
          </li>
          <li>
            <strong>Service Workers/Cache API:</strong> Used by progressive web
            apps (PWAs) to cache resources for offline access and improve
            performance.
          </li>
        </ul>
        <p>
          Like cookies, these technologies are used to make websites work
          efficiently, remember preferences, and store user-specific data. The
          principles of the ePrivacy Directive and GDPR regarding consent and
          transparency apply to the use of all these technologies.
        </p>
        <ol>
          <li>
            <strong>
              {' '}
              How We Use Cookies and Other Local Storage Technologies
            </strong>
          </li>
        </ol>
        <p>We use these technologies for various purposes, including:</p>
        <ul>
          <li>
            <strong>To enable certain functions of the website</strong>,
            ensuring core features work correctly.
          </li>
          <li>
            <strong>To provide analytics</strong> and understand how you
            interact with our website, helping us improve its performance and
            content.
          </li>
          <li>
            <strong>To store your preferences and settings</strong>, such as
            language selections or login states, for a more personalized
            experience.
          </li>
          <li>
            <strong>To enable the delivery of advertisements</strong>, including
            behavioral advertising, based on your interests.
          </li>
          <li>
            <strong>To manage your consent preferences</strong> regarding the
            use of these technologies, remembering your choices.
          </li>
          <li>
            <strong>For security purposes</strong>, protecting our website and
            users from malicious activity.
          </li>
        </ul>
        <ol>
          <li>
            <strong>
              {' '}
              Types of Cookies and Other Local Storage Technologies We Use
            </strong>
          </li>
        </ol>
        <p>
          We categorize the cookies and other storage technologies used on our
          website as follows:
        </p>
        <ol>
          <li>
            <strong> Strictly Necessary Technologies (Essential)</strong> These
            technologies are essential for the operation of our website and
            enable you to navigate around it and use its features, such as
            accessing secure areas or completing transactions. Without these,
            the website cannot function correctly.{' '}
            <strong>Consent is not required for these technologies.</strong>
          </li>
        </ol>
        <ul>
          <li>
            <strong>Examples:</strong>
            <ul>
              <li>
                <strong>Session Cookies:</strong> For user authentication and
                security.
              </li>
              <li>
                <strong>Local Storage:</strong> To store temporary session data
                or critical application states.
              </li>
              <li>
                <strong>User Consent Storage:</strong> To remember your consent
                choices regarding cookies and other local storage.
              </li>
            </ul>
          </li>
          <li>
            <strong>Data Collected:</strong> Session IDs, login status,
            application state relevant to blockchain/crypto features, logging
            preferences, consent status.
          </li>
          <li>
            <strong>Purpose:</strong> Enabling core website functionality,
            security, managing application state, and remembering user consent.
          </li>
          <li>
            <strong>Duration:</strong> Session-based or persistent as required
            for functionality.
          </li>
          <li>
            <strong>Provider:</strong> Primarily First-party
            (RedDuck),Third-Party (<a href="https://clutch.co">Clutch.co</a>,{' '}
            <a href="https://cloudflare.com">Cloudflare.com</a>).
          </li>
        </ul>
        <ol>
          <li>
            <strong> Preference Technologies (Functionality)</strong> These
            technologies allow our website to remember choices you make (such as
            your language preference or region) and provide enhanced, more
            personal features. They may also be used to provide services you
            have asked for, such as watching a video or commenting on a blog.
          </li>
        </ol>
        <ul>
          <li>
            <strong>Examples:</strong> Language preference cookies, currency
            selection cookies, local storage for UI preferences.
          </li>
          <li>
            <strong>Data Collected:</strong> Preferred language, region, display
            settings.
          </li>
          <li>
            <strong>Purpose:</strong> Remembering user settings for a customized
            experience.
          </li>
          <li>
            <strong>Duration:</strong> Persistent for a specific period.
          </li>
          <li>
            <strong>Provider:</strong> Primarily First-party (RedDuck).
          </li>
        </ul>
        <ol>
          <li>
            <strong> Analytical/Performance Technologies</strong> These
            technologies collect information about how visitors use our website,
            such as which pages are visited most often and if they encounter
            error messages. This information helps us improve how our website
            works. All information collected is aggregated and generally
            anonymous.
          </li>
        </ol>
        <ul>
          <li>
            <strong>Examples:</strong> Google Analytics cookies, other analytics
            tools that might use local storage or session storage.
          </li>
          <li>
            <strong>Data Collected:</strong> Anonymized IP addresses, pages
            visited, time spent on pages, device information.
          </li>
          <li>
            <strong>Purpose:</strong> Website traffic analysis, performance
            monitoring, improving user experience.
          </li>
          <li>
            <strong>Duration:</strong> Persistent for a specific period.
          </li>
          <li>
            <strong>Provider:</strong> Third-party providers (e.g., Google
            Analytics, <a href="https://clutch.co">Clutch.co</a>,{' '}
            <a href="https://cloudflare.com">cloudflare.com</a>).
          </li>
        </ul>
        <ol>
          <li>
            <strong> Marketing/Advertising Technologies</strong> These
            technologies are used to deliver advertisements more relevant to you
            and your interests. They are also used to limit the number of times
            you see an advertisement and help measure the effectiveness of
            advertising campaigns. They may remember that you have visited a
            website and share this information with other organizations, such as
            advertisers.
          </li>
        </ol>
        <ul>
          <li>
            <strong>Examples:</strong> Google Ads cookies, Clutch.co.
          </li>
          <li>
            <strong>Data Collected:</strong> Browse history, interests,
            demographic data (aggregated).
          </li>
          <li>
            <strong>Purpose:</strong> Targeted advertising, remarketing, ad
            campaign measurement.
          </li>
          <li>
            <strong>Duration:</strong> Persistent for a specific period.
          </li>
          <li>
            <strong>Provider:</strong> Third-party providers (e.g., Google,
            Clutch.co).
          </li>
        </ul>
        <ol>
          <li>
            <strong> Third-Party Technologies</strong> In addition to our own
            technologies, we may also use various third-party cookies and other
            local storage mechanisms. These are often related to embedded
            content, external services, or advertising partners.
          </li>
        </ol>
        <ul>
          <li>
            <strong>Examples of Third-Party Cookies identified:</strong>
            <ul>
              <li>
                __cf_bm and cf_clearance from .clutch.co: These cookies appear
                to be used for security purposes by a service like Cloudflare
                (often associated with .cf_bm and cf_clearance) to distinguish
                between legitimate users and malicious bots, enhancing website
                security and performance.
              </li>
            </ul>
          </li>
          <li>
            <strong>General Third-Party Examples:</strong>
            <ul>
              <li>
                Social media plugins (e.g., LinkedIn, Twitter) might set cookies
                or use local storage for login status or sharing.
              </li>
              <li>
                Video hosting services (e.g., YouTube, Vimeo) might use local
                storage for playback preferences.
              </li>
              <li>
                Advertising networks (e.g., LinkedIn, Youtube) for personalized
                ads.
              </li>
            </ul>
          </li>
          <li>
            We have reviewed the privacy and data handling policies of these
            third-party providers.
          </li>
        </ul>
        <ol>
          <li>
            <strong>
              {' '}
              Other Technologies (Potentially Used or Monitored for)
            </strong>
          </li>
        </ol>
        <ul>
          <li>
            <strong>Private Site Tokens (e.g., </strong>
            <a href="https://amazon.com">
              <strong>Amazon.com</strong>
            </a>
            <strong> and any other cloud services):</strong> While not actively
            used by RedDuck, these are examples of specific site-bound tokens
            that can be stored in browser storage by third-party services you
            interact with.
          </li>
          <li>
            <strong>Shared Storage:</strong> This is an emerging web platform
            API that allows cross-site storage of aggregated, privacy-preserving
            data. While &quot;Not yet created&quot; for RedDuck, its potential
            future use would also fall under these regulations.
          </li>
          <li>
            <strong>Frames (Permitted APIs):</strong> The &quot;frames&quot;
            information you provided indicates the various browser APIs that
            might be available or restricted within different contexts (e.g.,
            cross-origin isolation). While not directly a storage mechanism, the
            use of certain APIs can impact how data is handled or accessed.
          </li>
        </ul>
        <ol>
          <li>
            <strong>
              {' '}
              Your Consent (GDPR &amp; ePrivacy Directive Compliance)
            </strong>
          </li>
        </ol>
        <p>
          When you first visit our website, you will be presented with a consent
          banner. We require your explicit, opt-in consent for all non-essential
          cookies and other local storage technologies (i.e., Preference,
          Analytical, and Marketing technologies).
        </p>
        <ul>
          <li>
            <strong>Freely Given:</strong> Your choice to accept or reject is
            genuine, without pressure or manipulation.
          </li>
          <li>
            <strong>Specific &amp; Granular:</strong> You can accept or reject
            technologies by category. No non-essential categories will be
            pre-ticked.
          </li>
          <li>
            <strong>Informed:</strong> This policy provides clear and
            comprehensive information about our use of these technologies.
          </li>
          <li>
            <strong>Unambiguous:</strong> Your consent is indicated by a clear
            affirmative action (e.g., clicking &quot;Accept&quot;). Continuing
            to browse or dismissing the banner without active consent is not
            valid.
          </li>
          <li>
            <strong>Easy Withdrawal:</strong> You can change or withdraw your
            consent at any time as easily as you gave it. We provide a readily
            accessible &quot;Cookie Settings&quot; or &quot;Privacy
            Settings&quot; link on our website (e.g., in the footer).
          </li>
          <li>
            <strong>No &quot;Cookie Walls&quot;:</strong> Access to our website
            will not be denied if you choose not to consent to non-essential
            technologies.
          </li>
          <li>
            <strong>Consent Documentation:</strong> We securely record your
            consent choices for compliance.
          </li>
          <li>
            <strong>Renewal:</strong> We will periodically request your consent
            again (e.g., every 12 months) or if there are significant changes to
            our practices.
          </li>
        </ul>
        <p>
          <strong>How to Manage Your Preferences:</strong> You can manage your
          preferences directly on our website{' '}
          <a href="https://redduck.io/cookiesettings/">
            via the &quot;Cookie Settings&quot; link
          </a>
          .
        </p>
        <p>
          You can also control many types of local storage through your web
          browser settings. Most browsers allow you to:
        </p>
        <ul>
          <li>View what data is stored locally and delete it.</li>
          <li>Block third-party cookies and other storage.</li>
          <li>Block storage from particular sites.</li>
          <li>Block all storage mechanisms.</li>
          <li>Delete all stored data when you close your browser.</li>
        </ul>
        <p>
          Please note that if you disable strictly necessary technologies, some
          parts of our website may not function properly.
        </p>
        <ul>
          <li>
            <a href="https://support.google.com/chrome/answer/95647?hl=en&amp;ref_topic=14666">
              Cookie settings in Chrome
            </a>{' '}
            and{' '}
            <a href="https://support.google.com/chrome/answer/95647?hl=en">
              Chrome mobile
            </a>
          </li>
          <li>
            <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&amp;redirectslug=Cookies">
              Cookie settings in Firefox
            </a>{' '}
            and{' '}
            <a href="https://support.mozilla.org/en-US/kb/clearing-cookies-private-data-history-and-settings">
              Firefox mobile
            </a>
          </li>
          <li>
            <a href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d#ie=ie-10">
              Cookie settings in Internet Explorer
            </a>{' '}
            and{' '}
            <a href="https://support.microsoft.com/en-gb/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d">
              Microsoft Edge
            </a>
          </li>
          <li>
            <a href="https://support.apple.com/en-il/guide/safari/sfri11471/mac">
              Cookie settings in Safari
            </a>{' '}
            and{' '}
            <a href="https://support.apple.com/en-gb/105082">Safari mobile</a>
          </li>
          <li>
            <a href="https://support.apple.com/en-gb/105082">
              Cookie settings in iOS
            </a>
          </li>
          <li>
            <a href="https://help.opera.com/en/latest/web-preferences/">
              Cookie settings in Opera
            </a>
          </li>
          <li>
            <a href="https://support.apple.com/en-gb/safari">
              Cookie settings in Apple Safari
            </a>
          </li>
        </ul>
        <ol>
          <li>
            <strong> Updates to This Policy</strong>
          </li>
        </ol>
        <p>
          We may update this policy from time to time to reflect changes in our
          practices or for other operational, legal, or regulatory reasons. We
          will notify you of any significant changes by posting the new policy
          on this page and updating the &quot;Effective Date&quot; at the top of
          this policy. We encourage you to review this policy periodically.
        </p>
        <ol>
          <li>
            <strong> Contact Us</strong>
          </li>
        </ol>
        <p>
          If you have any questions about this policy, please contact us at:
        </p>
        <p>
          RedDuck, LLC Saperne Pole Street 12, Kyiv, Ukraine,{' '}
          <a href="mailto:compliance@redduck.io">compliance@redduck.io</a>
        </p>
        <h3>
          <strong>Terms and Conditions</strong>
        </h3>
        <p>
          <strong>RedDuck Website Terms and Conditions</strong>
          <em>Effective Date: 28 June 2025</em>
        </p>
        <p>
          Please read these Terms and Conditions (&quot;Terms,&quot; &quot;Terms
          and Conditions&quot;) carefully before using the{' '}
          <a href="https://redduck.io">redduck.io</a> website (the
          &quot;Service&quot;) operated by RedDuck LLC (&quot;us,&quot;
          &quot;we,&quot; or &quot;our&quot;).
        </p>
        <p>
          Your access to and use of the Service is conditioned on your
          acceptance of and compliance with these Terms. These Terms apply to
          all visitors, users, and others who access or use the Service.
        </p>
        <p>
          <strong>
            By accessing or using the Service, you agree to be bound by these
            Terms. If you disagree with any part of the terms, then you may not
            access the Service.
          </strong>
        </p>
        <ol>
          <li>
            <strong> Definitions</strong>
          </li>
        </ol>
        <ul>
          <li>
            <strong>&quot;Service&quot;</strong> refers to the{' '}
            <a href="https://redduck.io">redduck.io</a> website operated by
            RedDuck LLC.
          </li>
          <li>
            <strong>&quot;Content&quot;</strong> refers to any text, graphics,
            images, audio, video, software, data compilations, and any other
            form of information capable of being stored in a computer that
            appears on or forms part of this Website.
          </li>
          <li>
            <strong>&quot;User,&quot; &quot;You,&quot; &quot;Your&quot;</strong>{' '}
            refers to any third party that accesses the Website and is not
            either (i) employed by RedDuck and acting in the course of their
            employment or (ii) engaged as a consultant or otherwise providing
            services to RedDuck and accessing the Website in connection with the
            provision of such services.
          </li>
          <li>
            <strong>&quot;We,&quot; &quot;Us,&quot; &quot;Our&quot;</strong>{' '}
            refers to{' '}
            <strong>
              RedDuck, LLC, Saperne Pole Street 12, Kyiv, Ukraine,{' '}
            </strong>
            <a href="mailto:compliance@redduck.io">
              <strong>compliance@redduck.io</strong>
            </a>
            <strong>,</strong> a company registered in Ukraine, with its
            registered address at{' '}
            <strong>Saperne Pole Street 12, Kyiv, 01042</strong>
          </li>
        </ul>
        <ol>
          <li>
            <strong> Intellectual Property</strong> The Service and its original
            content (excluding Content provided by users), features, and
            functionality are and will remain the exclusive property of RedDuck
            and its licensors. The Service is protected by copyright, trademark,
            and other laws of both the Ukraine and foreign countries. Our
            trademarks and trade dress may not be used in connection with any
            product or service without Our prior written consent.
          </li>
          <li>
            <strong> Permitted Use</strong> You may use the Service for your
            personal, non-commercial use, or for legitimate business purposes
            related to the services or products offered by RedDuck.
          </li>
          <li>
            <strong> Prohibited Use</strong> You agree not to use the Service:
          </li>
        </ol>
        <ul>
          <li>
            In any way that violates any applicable national, regional, local or
            international law or regulation.
          </li>
          <li>
            For the purpose of exploiting, harming, or attempting to exploit or
            harm minors in any way.
          </li>
          <li>
            To transmit, or procure the sending of, any advertising or
            promotional material, including any &quot;junk mail,&quot;
            &quot;chain letter,&quot; &quot;spam,&quot; or any other similar
            solicitation.
          </li>
          <li>
            To impersonate or attempt to impersonate RedDuck, Our employee and
            contractors, another user, or any other person or entity.
          </li>
          <li>
            In any manner that could disable, overburden, damage, or impair the
            Service or interfere with any other party&apos;s use of the Service.
          </li>
          <li>
            To introduce any viruses, Trojan horses, worms, logic bombs, or
            other material that is malicious or technologically harmful.
          </li>
          <li>
            To attempt to gain unauthorized access to, interfere with, damage,
            or disrupt any parts of the Service, the server on which the Service
            is stored, or any server, computer, or database connected to the
            Service.
          </li>
          <li>
            To engage in any other conduct that restricts or inhibits
            anyone&apos;s use or enjoyment of the Service, or which, as
            determined by us, may harm Us or users of the Service or expose them
            to liability.
          </li>
        </ul>
        <ol>
          <li>
            <strong> User Accounts (if applicable)</strong> If the Service
            requires you to register for an account:
          </li>
        </ol>
        <ul>
          <li>
            When you submit a request or create an account with Us, you must
            provide Us with information that is accurate, complete, and current
            at all times. Failure to do so constitutes a breach of the Terms,
            which may result in immediate termination of your account on our
            Service.
          </li>
          <li>
            You are responsible for safeguarding the password that you use to
            access the Service and for any activities or actions under your
            password, whether your password is with our Service or a third-party
            social media service.
          </li>
          <li>
            You agree not to disclose your password or any other protected
            information that we provided to you as an identification to any
            third party. You must notify us immediately upon becoming aware of
            any breach of security or unauthorized use of your account.
          </li>
        </ul>
        <ol>
          <li>
            <strong> User-Generated Content (if applicable)</strong>
          </li>
        </ol>
        <ul>
          <li>
            If our Service allows you to post, link, store, share, and otherwise
            make available certain information, text, graphics, videos, or other
            material (&quot;Content&quot;), you are responsible for the Content
            that you post on or through the Service, including its legality,
            reliability, and appropriateness.
          </li>
          <li>
            By posting Content on or through the Service, you grant us the right
            and license to use, modify, publicly perform, publicly display,
            reproduce, and distribute such Content on and through the Service.
            You retain any and all of your rights to any Content you submit,
            post or display on or through the Service and you are responsible
            for protecting those rights.
          </li>
          <li>
            You represent and warrant that: (i) the Content is yours (you own
            it) or you have the right to use it and grant us the rights and
            license as provided in these Terms, and (ii) the posting of your
            Content on or through the Service does not violate the privacy
            rights, publicity rights, copyrights, contract rights or any other
            rights of any person.
          </li>
        </ul>
        <ol>
          <li>
            <strong> Links to Other Websites</strong> Our Service may contain
            links to third-party web sites or services that are not owned or
            controlled by RedDuck.
          </li>
        </ol>
        <p>
          RedDuck has no control over, and assumes no responsibility for, the
          content, privacy policies, or practices of any third-party web sites
          or services. You further acknowledge and agree that RedDuck shall not
          be responsible or liable, directly or indirectly, for any damage or
          loss caused or alleged to be caused by or in connection with use of or
          reliance on any such content, goods or services available on or
          through any such web sites or services.
        </p>
        <p>
          We strongly advise you to read the terms and conditions and privacy
          policies of any third-party web sites or services that you visit.
        </p>
        <ol>
          <li>
            <strong> Disclaimer of Warranties</strong> Your use of the Service
            is at your sole risk. The Service is provided on an &quot;AS
            IS&quot; and &quot;AS AVAILABLE&quot; basis. The Service is provided
            without warranties of any kind, whether express or implied,
            including, but not limited to, implied warranties of
            merchantability, fitness for a particular purpose, non-infringement
            or course of performance.
          </li>
        </ol>
        <p>
          RedDuck its subsidiaries, affiliates, and its licensors do not warrant
          that a) the Service will function uninterrupted, secure or available
          at any particular time or location; b) any errors or defects will be
          corrected; c) the Service is free of viruses or other harmful
          components; or d) the results of using the Service will meet your
          requirements.
        </p>
        <ol>
          <li>
            <strong> Limitation of Liability</strong> In no event shall RedDuck,
            nor its directors, employees, partners, agents, suppliers, or
            affiliates, be liable for any indirect, incidental, special,
            consequential or punitive damages, including without limitation,
            loss of profits, data, use, goodwill, or other intangible losses,
            resulting from (i) your access to or use of or inability to access
            or use the Service; (ii) any conduct or content of any third party
            on the Service; (iii) any content obtained from the Service; and
            (iv) unauthorized access, use or alteration of your transmissions or
            content, whether based on warranty, contract, tort (including
            negligence) or any other legal theory, whether or not we have been
            informed of the possibility of such damage, and even if a remedy set
            forth herein is found to have failed of its essential purpose.
          </li>
          <li>
            <strong> Indemnification</strong> You agree to defend, indemnify and
            hold harmless RedDuck and its licensee and licensors, and their
            employees, contractors, agents, officers and directors, from and
            against any and all claims, damages, obligations, losses,
            liabilities, costs or debt, and expenses (including but not limited
            to attorney&apos;s fees), resulting from or arising out of a) your
            use and access of the Service, by you or any person using your
            account and password; or b) a breach of these Terms.
          </li>
          <li>
            <strong> Governing Law</strong> These Terms shall be governed and
            construed in accordance with the laws of Ukraine, without regard to
            its conflict of law provisions.
          </li>
        </ol>
        <p>
          Our failure to enforce any right or provision of these Terms will not
          be considered a waiver of those rights. If any provision of these
          Terms is held to be invalid or unenforceable by a court, the remaining
          provisions of these Terms will remain in effect. These Terms
          constitute the entire agreement between us regarding our Service, and
          supersede and replace any prior agreements we might have between us
          regarding the Service.
        </p>
        <ol>
          <li>
            <strong> Dispute Resolution</strong>
          </li>
        </ol>
        <ul>
          <li>
            <strong>
              Exclusive Jurisdiction of Courts (If you prefer court litigation)
            </strong>{' '}
            Any legal action or proceeding arising out of or relating to these
            Terms or the Service shall be exclusively brought in the courts
            located in Kyiv, Ukraine and you consent to the jurisdiction of such
            courts.
          </li>
        </ul>
        <ol>
          <li>
            <strong> Severability</strong> If any provision of these Terms is
            held to be invalid or unenforceable, the remaining provisions of
            these Terms will remain in full force and effect.
          </li>
          <li>
            <strong> Changes to These Terms and Conditions</strong> We reserve
            the right, at our sole discretion, to modify or replace these Terms
            at any time. If a revision is material, we will try to provide at
            least 30 days&apos; notice prior to any new terms taking effect.
            What constitutes a material change will be determined at our sole
            discretion.
          </li>
        </ol>
        <p>
          By continuing to access or use our Service after those revisions
          become effective, you agree to be bound by the revised terms. If you
          do not agree to the new terms, please stop using the Service.
        </p>
        <ol>
          <li>
            <strong> Privacy Policy and Cookie Policy</strong> Please refer to
            our <a href="https://redduck.io/privacy-policy/">Privacy Policy</a>{' '}
            and <a href="https://redduck.io/cookie-policy/">Cookie Policy</a>{' '}
            for information on how we collect, use, and disclose your personal
            information and how we use cookies. These policies form an integral
            part of these Terms.
          </li>
          <li>
            <strong> Contact Us</strong> If you have any questions about these
            Terms, please contact us:{' '}
            <strong>
              RedDuck, LLC Saperne Pole street 12, Kyiv, Ukraine,{' '}
            </strong>
            <a href="mailto:compliance@redduck.io">
              <strong>compliance@redduck.io</strong>
            </a>
            <strong>.</strong>
          </li>
        </ol>
      </main>

      <Footer />
    </>
  );
}
