import Image from "next/image";
import "./userDetails.css";
import blueBag from "../../assets/images/blue-bag.png";
import Form from "./Form";
import profile from "../../assets/images/avatar.png";

const UserDetails = () => {
  return (
    <div className="user-details">
      <div className="top-bar flex item-center">
        <div className="img-wrapper">
          <Image src={blueBag} width={0} height={0} alt="bag image" />
        </div>
        <div className="content">
          <h3>Premium Account</h3>
          <p>
            You have a premium account, granting you access to all the
            remarkable features offered by ResumeDone. With this privilege, you
            can indulge in the freedom of downloading an unlimited number of
            resumes and cover letters in both PDF and Word formats.
          </p>
        </div>
      </div>
      <div className="personal-info">
        <h3>Personal Information</h3>
        <div className="top-content">
          <div className="left-side">
            <Form />
            <div className="flex item-center checkbox">
              <input type="checkbox" name="check1" id="check1" />
              <label htmlFor="check1">
                Show my profile to serious employers on
                <a href="https://hirethesbest.io">hirethesbest.io</a> for free
              </label>
            </div>
            <div className="delete-ac">
              <h5>Delete account</h5>
              <p>
                If you delete your account you'll be permanently removing it
                from our systems - you can't undo it.
              </p>
              <button className="confirm-btn">Yes, Delete my account</button>
            </div>
            <div className="personal-info-footer">
              <p>
                <a href="#">Get in touch with our support team</a> if you have
                any question or want to leave some feedback. We'll be happy to
                hear from you.
              </p>
              <ul className="footer-links flex item-center">
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="profile-pic">
            <Image src={profile} width={0} height={0} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
