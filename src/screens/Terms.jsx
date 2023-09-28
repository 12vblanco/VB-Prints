import React from "react";
import { NavLink } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import StyledContainer from "../components/StyledContainer";

const TermsAndConditions = () => {
  return (
    <MainContainer>
      <StyledContainer>
        <div style={{ marginTop: "2rem", maxWidth: "1040px" }}>
          <h1>Terms and Conditions</h1>
          <p>
            Welcome to Victor Blanco Prints.
            <br /> These terms and conditions outline the rules and regulations
            for the use of my website and services.
          </p>
          <h3>1. Privacy & Data Protection</h3>
          <p>
            By using our website, you consent to our data practices as set out
            in our Privacy Policy. We adhere to both the General Data Protection
            Regulation (GDPR) and the UK GDPR. We only collect the necessary
            personal data and ensure the utmost security in processing and
            storing this data.
          </p>
          <h3>2. Cookies</h3>
          <p>
            We employ the use of cookies on our website. By accessing our
            website, you agree to the use of cookies in agreement with our
            Privacy Policy.
          </p>
          <h3>3. License</h3>
          <p>
            Unless otherwise stated, Victor Blanco Prints owns the intellectual
            property rights for all material on the website. All intellectual
            property rights are reserved.
          </p>
          <h3>4. Payments</h3>
          <p>
            We use Stripe as our payment processing partner. By purchasing on
            our website, you agree to Stripe's terms and conditions.
          </p>
          <h3>5. Contact Forms</h3>
          <p>
            Any information you provide through our contact forms will only be
            used to address your inquiry. We do not share this information with
            third parties without your explicit consent.
          </p>
          <h3>6. Google Analytics</h3>
          <p>
            We use Google Analytics to monitor and analyse web traffic and to
            understand where our visitors are coming from. By using our website,
            you consent to the processing of data about you by Google.
          </p>
          <h3>7. Limitation of Liability</h3>
          <p>
            To the fullest extent permitted by applicable law, we exclude all
            liability for damages arising out of or in connection with your use
            of this website.
          </p>
          <h3>8. Governing Law</h3>
          <p>
            Any claim related to Victor Blanco Prints's website shall be
            governed by the laws of the UK without regard to its conflict of law
            provisions.
          </p>
          <h3>9. Changes</h3>
          <p>
            We reserve the right to amend or change these terms and conditions
            at any time without prior notice.
          </p>
          <h3>Contact</h3>
          <p>
            If you have any questions about these terms and conditions, please
            contact us using the form provided{" "}
            <NavLink to="/contact" style={{ color: "var(--red)" }}>
              here.
            </NavLink>
          </p>{" "}
        </div>
      </StyledContainer>
    </MainContainer>
  );
};

export default TermsAndConditions;
