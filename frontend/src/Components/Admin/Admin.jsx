import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUserDataFromBackend } from "../../Redux/action.js";
import { QuizForm } from "./QuizForm.jsx";

export const Admin = () => {
  const allUsers = useSelector((state) => state.mernQuize.Alluser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addquiz = () => {
    navigate("/addquiz");
  };

  useEffect(() => {
    dispatch(getAllUserDataFromBackend());
  }, []);

  // console.log("allUsers",allUsers)
  return (
    <div>
      <div className="md:w-11/12 mx-auto bg-gray-100/10 flex p-4 my-6 mt-24">
        <div className="w-7/12 ">
          <div className="ml-32 ">
            <img className="h-[125px] w-[250px] rounded-full" src="./admin.gif" alt="" />
          </div>
          <div>
            <h1 className="title text-4xl font-semibold flex text-black pb-6 mt-8 ml-32" style={{ fontFamily: "Quicksand" }}>
              Hi Admin,
            </h1>
          </div>
          <div className=" ml-32 leading-normal"></div>
        </div>
      </div>
      <div className="border-red-500 absolute bg-orange-600 right-24 top-28 border-2 mb-8 p-1 pl-2  pr-2 ">
        <button onClick={addquiz}> ADD QUIZ </button>
      </div>
    </div>
  );
};
