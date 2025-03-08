import { Routes, Route, Link } from "react-router-dom"
import ProfileDetails from "./ProfileDetails.jsx"
import ProfileSettings from "./ProfileSettings.jsx"

function Profile () {
    return (
        <div>
            <nav>
                <Link to={Details}> Profile Details</Link>
                <Link to={Settings}> Profile Details</Link>

                <Routes>
                    <Route path="details" element={ProfileDetails}>Profile Details</Route>
                    <Route path="settings" element={ProfileSettings}>Profile Settings</Route>

                </Routes>

            </nav>
        </div>
    )
}

export default Profile;