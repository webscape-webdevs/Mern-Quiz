import logo from "./logo.svg";
import "./App.css";
import { QuizePage } from "./Components/QuizePage.jsx";

import { NewQuizPage } from "./Components/NewQuizPage.jsx";
import { Login } from "./Components/auth/Login.jsx";
import { Register } from "./Components/auth/Register.jsx";
import { Route, Routes } from "react-router-dom";
import { Admin } from "./Components/Admin/Admin.jsx";

import { QuizForm } from "./Components/Admin/QuizForm.jsx";
import { Profile } from "./Components/Profile/Profile.jsx";
import { ProfileMain } from "./Components/Profile/ProfileMain.jsx";
import { Quizes } from "./Components/QuizNew/Quizes.jsx";
import { Resultshow } from "./Components/Resultshow.jsx";
import { Navbarnew } from "./Components/Navbarnew.jsx";
import { ShowAllAnswers } from "./Components/ShowAllAnswers.jsx";

function App() {
  return (
    <div className="App ">
      <Navbarnew />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/HTML" element={<NewQuizPage />} />
        <Route path="/CSS" element={<NewQuizPage />} />
        <Route path="/Javascript" element={<NewQuizPage />} />
        <Route path="/React" element={<NewQuizPage />} />
        <Route path="/quiz/:id" element={<Quizes />} />
        <Route path="/Mongodb" element={<NewQuizPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/addquiz" element={<QuizForm />} />
        <Route path="/profile" element={<ProfileMain />} />
        <Route path="/result" element={<Resultshow />} />
        <Route path="/showallanswer" element={<ShowAllAnswers />} />
      </Routes>
    </div>
  );
}

export default App;
