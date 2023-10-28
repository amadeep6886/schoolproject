import { useRef, useState, useEffect } from "react";

// const imageMimeType = /image\/(png|jpg|jpeg)/i;
import Header from "../../components/Header";
import HeaderImage from "../../images/admissionHeaderimg.jpg";
import styles from "./Admission.module.css";
const Admission = () => {
  const [images, setImages] = useState({
    father:
      "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
    mother:
      "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
    student:
      "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
  });

  const handleImageUpload = (e, identifier) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImages({
        ...images,
        [identifier]: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <Header title="Admssion" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos voluptatum
        delectus impedit Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. In, possimus.
      </Header>

      <div className={styles.container}>
        <div className={styles.main__nav}>
          <a href="#" className={styles.company__logo}>
            <img src="/public/Logo.png" alt="Company Logo" />
          </a>
          <div className={styles.company__name}>
            <h1>ANKUR SCHOOL</h1>
          </div>
        </div>
        <div className={styles.address}>
          <p className={styles.address__one}>
            Admn Office : Qr. No 1C - 185, B.S City, Jharkhand
          </p>
          <p className={styles.address__two}>School Campus - Camp 2 Bokaro</p>
        </div>
        <div className={styles.office}>
          <div className={styles.office__container}>
            <h5>FOR OFFICE USE ONLY</h5>
            <p>Reg.No.:______________</p>
            <p>Reg. Date:____/____/____</p>
            <p>Fee:_____ Receipt:_____</p>
          </div>
          <div className={styles.addformname}>
            <h1>ADMISSION FORM</h1>
          </div>
        </div>
        <header className={styles.header}>Registration form</header>
        <form className={styles.form} action="#" method="Post">
          {[
            { type: "title", label: "personal details" },
            {
              type: "text",
              label: "name",
              required: true,
            },
            { type: "date", label: "Date of Birth", required: true },
            {
              type: "text",
              label: "Admitting in Class",
              required: true,
            },
            {
              type: "text",
              label: "Mother Tongue",
              required: true,
            },
            {
              type: "text",
              label: "Religion",
              required: true,
            },
            {
              type: "text",
              label: "Aadhar No",
              required: true,
            },
            {
              type: "text",
              label: "Category",
              required: true,
            },
            {
              type: "text",
              label: "Father's Name",
              required: true,
            },
            {
              type: "text",
              label: "Qualification",
              required: true,
            },
            {
              type: "text",
              label: "Occupation",
              required: true,
            },
            {
              type: "number",
              label: "Phone",
              required: true,
            },
            {
              type: "text",
              label: "Aadhar No",
              required: true,
            },
            {
              type: "text",
              label: "Mother's Name",
              required: true,
            },
            {
              type: "text",
              label: "Qualification",
              required: true,
            },
            {
              type: "text",
              label: "Occupation",
              required: true,
            },
            {
              type: "text",
              label: "Phone",
              required: true,
            },
            {
              type: "text",
              label: "Aadhar No",
              required: true,
            },
            {
              type: "text",
              label: "Local Guardian's Name",
              required: true,
            },
            { type: "title", label: "Contact Information" },
            {
              type: "number",
              label: "Local Guardian's Phone",
              required: true,
            },
            {
              type: "multiple",
              name: "address",
              id: "address",
              rows: "3",
              label: "Local/Current (Residing) Address",
              required: true,
            },

            {
              type: "multiple",
              name: "address",
              id: "address",
              rows: "3",
              label: "Permanent Address",
              required: true,
            },
          ].map(({ type, label, required, ...rest }, i) => {
            if (type === "title")
              return (
                <div key={i} className={styles.title}>
                  {label}
                </div>
              );

            if (type === "multiple")
              return (
                <div key={i} className={styles.formGroup}>
                  <label>{label}</label>
                  <textarea required={required} {...rest}></textarea>
                </div>
              );

            return (
              <div key={i} className={styles.formGroup}>
                <label>{label}</label>
                <input type={type} required={required} {...rest} />
              </div>
            );
          })}
        </form>
        <div className={styles.acknowleged}>
          <div className={styles.ac_container}>
            <h2
              style={{
                textAlign: "center",
                color: "black",
                fontSize: "1.2rem",
                paddingBottom: "15px",
                borderBottomStyle: "solid",
                borderBottomWidth: "3.1px",
              }}
            >
              Acknowledgement
            </h2>
            <p style={{ textAlign: "center", color: "brown" }}>
              I hereby certify that all of the information provided by me in
              this application (or any other accompanying or required documents)
              is correct. accurate and complete to the best of my knowledge
            </p>
          </div>
        </div>
        <div className={styles.passport__container}>
         <div className={styles.main_box}>
              <p>Recent Passport Size Photo Of The Father</p>
                <div className={styles.img_box}>
                  <img
                  src={images.father}
                  alt=""
                  />
                </div>
              <div className={styles.hiden_file_box}>
                <input type="file" onChange={(e) => handleImageUpload(e, "father")} />
             </div>
         </div>
         <div className={styles.main_box}>
              <p>Recent Passport Size Photo Of The Mother</p>
                <div className={styles.img_box}>
                  <img
                  src={images.mother}
                  alt=""
                  />
                </div>
                <div className={styles.hiden_file_box}>
                 <input type="file" onChange={(e) => handleImageUpload(e, "mother")} />
                </div>
                
         </div>
         <div className={styles.main_box}>
              <p>Recent Passport Size Photo Of The Student</p>
                <div className={styles.img_box}>
                  <img
                  src={images.student}
                  alt=""
                  />
                </div>
             <div className={styles.hiden_file_box}>
                <input type="file" onChange={(e) => handleImageUpload(e, "student")} />
             </div>
         </div>
          

        </div>

        <div className={styles.attach}>
          <p>Please Attach:</p>
          <ol className={styles.list}>
            <li>Aadhar Cards Of Father and Mother</li>
            <li>Aadhar Card Of Candidate</li>
            <li>Birth Certificate Of Candidate</li>
            <li>
              Transfer Certificate & Progress Report (Form the Previous School)
            </li>
          </ol>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Admission;
