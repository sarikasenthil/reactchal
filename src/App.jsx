import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import User from "./Pages/User";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<User />} />
        </Routes>
    );
};

export default User;