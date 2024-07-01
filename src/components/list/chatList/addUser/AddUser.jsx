import React, { useState } from "react";
import "./addUser.css";
import { collection, query } from "firebase/firestore";
import { db } from "../../../../lib/firebase";
const AddUser = () => {
  const [user,setUser]=useState(null)
  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const username = formData.get("username");

    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("username", "==", username))
      const querySnapshot = await getDoc(q)
      
      if (!querySnapshot.empty) {
        setUser(querySnapshot.doc[0].data());
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="addUser">
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Username" name="username" />
        <button>Search</button>
      </form>
      <div className="user">
        <div className="detail">
          <img src="./avatar.png" alt="" />
          <span>Jane Doe</span>
        </div>
        <button>Add User</button>
      </div>
    </div>
  );
};

export default AddUser;
