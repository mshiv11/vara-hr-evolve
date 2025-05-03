
import MainLayout from "@/components/MainLayout";

const PrivacyPolicy = () => {
  return (
    <MainLayout>
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-700">
              Last Updated: May 3, 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Introduction</h2>
            <p>
              VaraHR ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, products, or services ("Services"). Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
            </p>
            
            <h2>Information We Collect</h2>
            <p>We may collect information about you in a variety of ways, including:</p>
            
            <h3>Personal Data</h3>
            <p>When you use our Services, we may collect personally identifiable information, such as:</p>
            <ul>
              <li>Name, email address, phone number</li>
              <li>Company name and job title</li>
              <li>Billing information and payment details</li>
              <li>User preferences and settings</li>
              <li>Any other information you voluntarily provide to us</li>
            </ul>
            
            <h3>Usage Data</h3>
            <p>We automatically collect certain information when you visit, use, or navigate our Services, including:</p>
            <ul>
              <li>Device type, operating system, browser type</li>
              <li>IP address and general location</li>
              <li>Pages visited and features used</li>
              <li>Time spent on pages and interaction information</li>
              <li>Other technical information about your device and internet connection</li>
            </ul>
            
            <h3>Candidate Data</h3>
            <p>If you are an employer using our Services, we may process information related to your job candidates, including:</p>
            <ul>
              <li>Resumes and application materials</li>
              <li>Assessment results and interview feedback</li>
              <li>Communication records related to the recruitment process</li>
              <li>Hiring decisions and related documentation</li>
            </ul>
            
            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul>
              <li>Provide, operate, and maintain our Services</li>
              <li>Improve, personalize, and expand our Services</li>
              <li>Understand how you use our Services</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you about our Services, updates, and other information</li>
              <li>Process transactions and send related information</li>
              <li>Send marketing communications (with your consent where required by law)</li>
              <li>Comply with legal obligations and enforce our terms</li>
              <li>Prevent fraud, detect security incidents, and debug to identify and repair errors</li>
            </ul>
            
            <h2>Disclosure of Your Information</h2>
            <p>We may share your information in the following situations:</p>
            <ul>
              <li>With service providers who help us provide and improve our Services</li>
              <li>With business partners with whom we jointly offer products or services</li>
              <li>In connection with a business transaction such as a merger,  sale of assets, or acquisition</li>
              <li>To comply with applicable laws, regulations, or legal process</li>
              <li>To protect the rights, property, and safety of our company, users, or others</li>
              <li>With your consent or at your direction</li>
            </ul>
            
            <h2>Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards, no security system is impenetrable, and we cannot guarantee the absolute security of your information.
            </p>
            
            <h2>Data Retention</h2>
            <p>
              We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy, or as needed to comply with our legal obligations, resolve disputes, and enforce our agreements.
            </p>
            
            <h2>Your Privacy Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul>
              <li>The right to access information we hold about you</li>
              <li>The right to request correction or deletion of your information</li>
              <li>The right to object to or restrict processing of your data</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent where processing is based on consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us at mshiv@varahr.com. We will respond to your request within the timeframe required by applicable law.
            </p>
            
            <h2>Children's Privacy</h2>
            <p>
              Our Services are not intended for use by children under the age of 16. We do not knowingly collect or solicit personal information from children under 16. If we learn we have collected personal information from a child under 16, we will delete that information as quickly as possible.
            </p>
            
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date, and the updated version will be effective as soon as it is accessible. We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p>
              Email: mshiv@varahr.com<br />
              VaraHR<br />
              [Address]<br />
              [City, State, Zip]
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PrivacyPolicy;
