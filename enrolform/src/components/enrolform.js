import React, { useState } from 'react';
import './style.css';
import { database } from '../firebase';
import { ref, push, child, update } from "firebase/database";
// import { useNavigate } from 'react-router-dom';


function EnrolForm() {
    // const navigate = useNavigate();

    const [email, setEmail] = useState(null);
    const [confirmEmail, setConfirmEmail] = useState(null);
    const [returningStudent, setReturningStudent] = useState('yes');
    const [classCategory, setClassCategory] = useState('Native (speak Chinese Mandarin at home)');
    const [appropriateClass, setappropriateClass] = useState('Apple(pinyin)A 14:00-15:30');
    const [FirstName, setFirstName] = useState(null);
    const [LastName, setLastName] = useState(null);
    const [ChineseName, setChineseName] = useState(null);
    const [DateofBirth, setDateofBirth] = useState(null);
    const [Gender, setGender] = useState('Female');
    const [PhoneNumber, setPhoneNumber] = useState(null);
    const [Address, setAddress] = useState(null);
    const [Donation, setDonation] = useState('$280 per Child (enrolled 1 class) (Under18 years old)');
    const [paidDonation, setpaidDonation] = useState('no');

    const [emailError, setEmailError] = useState('');
    const [confirmEmailError, setConfirmEmailError] = useState('');
    const [FirstNameError, setFirstNameError] = useState('');
    const [LastNameError, setLastNameError] = useState('');
    const [DateofBirthError, setDateofBirthError] = useState('');
    const [GenderError, setGenderError] = useState('');
    const [PhoneNumberError, setPhoneNumberError] = useState('');
    const [AddressError, setAddressError] = useState('');

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        if (id === "email") {
            setEmail(value);
        }
        if (id === "confirmEmail") {
            setConfirmEmail(value);
        }
        if (id === "returningStudent") {
            setReturningStudent(value);
        }
        if (id === "classCategory") {
            setClassCategory(value);
        }
        if (id === "appropriateClass") {
            setappropriateClass(value);
        }
        if (id === "FirstName") {
            setFirstName(value);
        }
        if (id === "LastName") {
            setLastName(value);
        }
        if (id === "ChineseName") {
            setChineseName(value);
        }
        if (id === "DateofBirth") {
            setDateofBirth(value);
        }
        if (id === "Gender") {
            setGender(value);
        }
        if (id === "PhoneNumber") {
            setPhoneNumber(value);
        }
        if (id === "Address") {
            setAddress(value);
        }

        if (id === "Donation") {
            setDonation(value);
        }
        if (id === "paidDonation") {
            setpaidDonation(value);
        }
    }

    const handleSubmit = async () => {
        let valid = true;
        const isEmailValid = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };
        if (!email || email.trim() === '' || !isEmailValid(email)) {
            setEmailError('*Email cannot be empty or enter a valid email');
            valid = false;
        }

        if (!confirmEmail || confirmEmail.trim() === '' || !isEmailValid(confirmEmail)) {
            setConfirmEmailError('*Confirm Email cannot be empty');
            valid = false;
        }
        if (email !== confirmEmail) {
            setEmailError('*Emails do not match');
            setConfirmEmailError('*Emails do not match');
            valid = false;
        }
        if (!FirstName || FirstName.trim() === '') {
            setFirstNameError('*FirstName cannot be empty');
            valid = false;
        }
        if (!LastName || LastName.trim() === '') {
            setLastNameError('*LastName cannot be empty');
            valid = false;
        }

        if (!DateofBirth || DateofBirth.trim() === '') {
            setDateofBirthError('*Date of Birth cannot be empty');
            valid = false;
        }



        if (!Address || Address.trim() === '') {
            setAddressError('*Address cannot be empty');
            valid = false;
        }

        const isPhoneNumberValid = (phoneNumber) => {
            const phoneRegex = /^[0-9]{11}$/; // 假设为10位数字的电话号码
            return phoneRegex.test(phoneNumber);
        };
        if (!PhoneNumber || PhoneNumber.trim() === '' || !isPhoneNumberValid(PhoneNumber)) {
            setPhoneNumberError('*PhoneNumber cannot be empty and will be 11 numbers');
            valid = false;
        }
        if (valid) {
            try {
                let obj = {
                    email: email,
                    confirmEmail: confirmEmail,
                    returningStudent: returningStudent,
                    classCategory: classCategory,
                    appropriateClass: appropriateClass,
                    FirstName: FirstName,
                    LastName: LastName,
                    ChineseName: ChineseName,
                    DateofBirth: DateofBirth,
                    Gender: Gender,
                    PhoneNumber: PhoneNumber,
                    Address: Address,
                    Donation: Donation,
                    paidDonation: paidDonation,
                }
                const newPostKey = push(child(ref(database), 'posts')).key;
                const updates = {};
                updates['/' + newPostKey] = obj
                // 等待数据库更新成功
                await update(ref(database), updates);

                // navigate('/success');
                //当数据库更新成功后执行页面跳转
                window.location.href = 'https://wcls-website.web.app/';

            } catch (error) {
                console.error("submit error:", error);
            }
        }
    }

    return (
        <div className="form">

            <div className="form-body">
                <label className="form__title" >Class Detail.</label>
                <label className="form__title2" >On campuslessons.Time: Every Sunday in school term.
                    Address: Victoria University Kelburn Campus</label>

                <div className="returning-student">
                    <label className="form__label" htmlFor="returningStudent">Are you a returning student?</label>
                    <select id="returningStudent" className="form__select" onChange={handleInputChange} defaultValue={returningStudent} >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="class-category">
                    <label className="form__label" htmlFor="classCategory">Class Category</label>
                    <select id="classCategory" className="form__select" onChange={handleInputChange} defaultValue={classCategory}>
                        <option value="native">Native (speak Chinese Mandarin at home)</option>
                        <option value="non-native">Non-native</option>
                        <option value="pre-school">Pre-school</option>
                    </select>
                </div>


                <div className="appropriate-class">
                    <label className="form__label" htmlFor="appropriateClass">Appropriate class</label>
                    <select id="appropriateClass" className="form__select" onChange={handleInputChange} defaultValue={appropriateClass}>
                        <option value="pinyinA">Apple(pinyin)A 14:00-15:30</option>
                        <option value="pinyinB">Apple(pinyin)B 15:45-17:15</option>
                        <option value="book1A">Book1A 14:00-15:30</option>
                        <option value="Book1B">Book1B 15:45-17:15</option>
                        <option value="Book2A">Book2A 14:00-15:30</option>
                        <option value="Book2B">Book2B 15:45-17:15</option>
                        <option value="Book3A">Book3A 14:00-15:30</option>
                        <option value="Book3B">Book3B 15:45-17:15</option>
                        <option value="Book4A">Book4A 14:00-15:30</option>
                        <option value="non-native">Book4B 15:45-17:15</option>
                        <option value="Book5A">Book5A 14:00-15:30</option>
                        <option value="Book5B">Book5B 15:45-17:15</option>
                        <option value="Book6A">Book6A 14:00-15:30</option>
                        <option value="Book67B">Book6B&7B 15:45-17:15</option>
                        <option value="Book7">Book7 14:00-15:30</option>
                        <option value="Beginner1">Beginner (for 5-15 years old students)12:15-13:45</option>
                        <option value="Elementary1">Elementary (for 5-15 years old students)12:15-13:45</option>
                        <option value="Intermediate1">Intermediate (for 5-15 years oldstudents) 12:15-13:45</option>
                        <option value="Upper1">Upper Intermediate (for 5-15 years oldstudents)12:15-13:45</option>
                        <option value="Beginner2">Beginner  (for 15 years old -- adultstudents) 12:15-13:45</option>
                        <option value="Elementary2">Elementary  (for 15 years old --adultstudents)12:15-13:45</option>
                        <option value="Intermediate2">Intermediate Intermediate (for 15 years old --adultstudents)12:15-13:45</option>
                        <option value="Upper2">Upper Intermediate  (for 15 years old --adult students)12:15-13:45</option>
                        <option value="preschoolA">Pre-schoolA 14:00-15:30</option>
                        <option value="preschoolB">Pre-schoolB 15:45-17:15</option>
                    </select>
                </div>


                <label className="form__title" >Student's Details</label>
                <label className="form__title2" >Please use one form per student.</label>

                <div className="email">
                    <label className="form__label" htmlFor="email">Email </label>
                    <input type="email" id="email" className="form__input" placeholder="aaa@aaa.com" onChange={handleInputChange} />
                    <span style={{ color: 'red' }}>{emailError}</span>
                </div>
                <div className="confirm-email">
                    <label className="form__label" htmlFor="confirmEmail">Confirm Email </label>
                    <input type="email" id="confirmEmail" className="form__input" placeholder="aaa@aaa.com" onChange={handleInputChange} />
                    <span style={{ color: 'red' }}>{confirmEmailError}</span>
                </div>
                <div className="FirstName">
                    <label className="form__label" htmlFor="FirstName">Student First Name (English Name)</label>
                    <input type="text" id="FirstName" className="form__input" placeholder="FirstName" onChange={handleInputChange} />
                    <span style={{ color: 'red' }}>{FirstNameError}</span>
                </div>
                <div className="LastName">
                    <label className="form__label" htmlFor="LastName">Student Last Name (English Name) </label>
                    <input type="text" id="LastName" className="form__input" placeholder="LastName" onChange={handleInputChange} />
                    <span style={{ color: 'red' }}>{LastNameError}</span>
                </div>
                <div className="ChineseName">
                    <label className="form__label" htmlFor="ChineseName">Student Chinese Name (if have)</label>
                    <input type="text" id="ChineseName" className="form__input" placeholder="ChineseName" onChange={handleInputChange} />
                </div>
                <div className="DateofBirth">
                    <label className="form__label" htmlFor="DateofBirth">Date of Birth</label>
                    <input type="date" id="DateofBirth" className="form__input" onChange={handleInputChange} />
                    <span style={{ color: 'red' }}>{DateofBirthError}</span>
                </div>

                <div className="Gender">
                    <label className="form__label" htmlFor="Gender">Gender</label>
                    <select id="Gender" className="form__select" onChange={handleInputChange} defaultValue={Gender}>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                    </select>

                </div>
                <div className="PhoneNumber">
                    <label className="form__label" htmlFor="PhoneNumber">Contact Phone Number</label>
                    <input type="tel" id="PhoneNumber" className="form__input" placeholder="PhoneNumber" onChange={handleInputChange} />
                    <span style={{ color: 'red' }}>{PhoneNumberError}</span>
                </div>
                <div className="Address">
                    <label className="form__label" htmlFor="Address">Address</label>
                    <input type="text" id="Address" className="form__input" placeholder="Address" onChange={handleInputChange} value={Address} />
                    <span style={{ color: 'red' }}>{AddressError}</span>
                </div>

                <label className="form__title" >Donation</label>
                <label className="form__title2" >The sameInternet banking reference should beused if you make your payment via lnternet
                    banking. Every single student needs to fill out this enrollment form.even vou are from the same family.</label>

                <div className="Donation">
                    <label className="form__label" htmlFor="Donation">Donations - Annual Amount</label>
                    <select id="Donation" className="form__select" onChange={handleInputChange} value={Donation}>
                        <option value="$280 per Child (enrolled 1 class) (Under18 years old)">$280 per Child (enrolled 1 class) (Under18 years old)</option>
                        <option value="$300 Adult">$300 Adult</option>
                        <option value="$700 Family (For nuclear familymembers, maximum 4 people and eachperson enrolled 1class)">$700 Family (For nuclear familymembers, maximum 4 people and eachperson enrolled 1class)</option>
                    </select>
                </div>

                <label className="form__title" >Payment Method</label>
                <label className="form__title2" >Our Bank Account Name is Wellington ChineseLanguage SchoolInc
                    AccountNumber is: 06-0561-0060425-00</label>
                <label className="form__title2" >nternet Banking Reference
                    Particulars: Student's full name (e.g.Andy Li)
                    Code: Class (e.g.book1 native)Reference: Phone number(e.g.0212233513)</label>

                <div className="paidDonation">
                    <label className="form__label" htmlFor="paidDonation">Have you paid donation? </label>
                    <select
                        id="paidDonation"
                        className="form__select"
                        onChange={handleInputChange}
                        value={paidDonation}  // 使用 value 来绑定 React 状态
                    >
                        <option value="no">no</option>
                        <option value="yes">yes</option>
                    </select>
                </div>

            </div>{/* end of formbody */}



            <div class="footer">
                <button type="submit" class="btn" onClick={handleSubmit}>Submit</button>
            </div>
        </div >
    )
}
export default EnrolForm;
