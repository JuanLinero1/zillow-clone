import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { db } from "../../../.firebase-setup";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, addDoc } from "firebase/firestore";

const signIn = (props) => {
  const [accountCondition, setAccountCondition] = useState(true);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  
  const readData = async () => {
    let result = false;

    const querySnapshot = await getDocs(collection(db, "signIn"));
    const doc = querySnapshot.forEach((doc) => {
      if(doc.data().email === user.email)
        return result = true 
    });

    if (result) {
      props.logCondition(true)
      props.setEmail  (user.email)
    } else {
      alert("We could not find the user email")
    }
  };

  const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, "signIn"), {
        email: user.email,
        password: user.password,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div
      className={`${props.condition.condition ? "active" : "inactive"} sign`}
    >
      <span
        className="sign__icon"
        onClick={() => props.condition.setCondition(false)}
      >
        <FontAwesomeIcon icon={faX} />
      </span>
      <h2>Welcome To Zillow</h2>
      <div className="sign__option">
        <button
          onClick={() => setAccountCondition(true)}
          className={`sign__option--button`}
        >
          Sign In
        </button>
        <button
          onClick={() => setAccountCondition(false)}
          className={` sign__option--button`}
        >
          New account
        </button>
        <div className="sign__option--line"></div>
      </div>
      <form
        className={`${accountCondition ? "active" : "inactive"} sign__form`}
      >
        <label htmlFor="email">Enter email </label>
        <input
          required
          className="sign__mail"
          name="email"
          type="Email"
          placeholder="Enter email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <label htmlFor="password">Enter password </label>
        <input
          required
          className="sign__password"
          name="password"
          type="Password"
          placeholder="Enter password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button
          className="sign__form--submit"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            readData();
          }}
        >
          Sign In
        </button>
        <div className="sign__link">
          <a href="#">Forgot your password?</a>
        </div>
      </form>

      <form
        className={`${!accountCondition ? "active" : "inactive"} sign__new`}
      >
        <label htmlFor="email">Enter email </label>
        <input
          required
          className="sign__new--email"
          name="email"
          type="Email"
          placeholder="Enter email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label htmlFor="password">Create password </label>
        <input
          required
          className="sign__new--password"
          name="password"
          type="Password"
          placeholder="Enter password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <ul>
          <li> At least 8 characters</li>
          <li>validation neutral Mix of letters and numbers</li>
          <li>validation neutral At least 1 special character</li>
          <li>
            validation neutral At least 1 lowercase letter and 1 uppercase
            letter
          </li>
        </ul>{" "}
        <label className="sign__new--label" htmlFor="checkbox">
          <input
            required
            type="checkbox"
            name="checkbox"
            className="sign__new--checkbox"
          />{" "}
          I am a landlord or industry professional
        </label>
        <button
          className="sign__form--submit"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            addData();
          }}
        >
          Submit
        </button>
        <div className="sign__link">
          <a href="#">Forgot your password?</a>
        </div>
      </form>
    </div>
  );
};

export default signIn;
