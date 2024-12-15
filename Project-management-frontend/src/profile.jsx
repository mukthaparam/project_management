import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfilePage({ userId }) {
    const [studentData, setStudentData] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await fetch(`/students/${userId}`);
                if (response.ok) {
                    const data = await response.json();
                    setStudentData(data);
                } else {
                    const errorData = await response.json();
                    setError(errorData.error);
                }
            } catch (err) {
                setError("Failed to fetch student data. Please try again later.");
            }
        };

        if (userId) fetchStudentData();
    }, [userId]);

    if (error) {
        return (
            <div className="text-center text-red-500">
                <p>{error}</p>
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600"
                    onClick={() => navigate("/home")}
                >
                    Go Back
                </button>
            </div>
        );
    }

    if (!studentData) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Profile</h1>
            <div className="mb-4">
                <img
                    src={`data:image/jpeg;base64,${studentData.image}`}
                    alt="Profile"
                    className="rounded-full w-32 h-32 mx-auto mb-4"
                />
                <p className="text-lg font-semibold text-center">{studentData.name}</p>
                <p className="text-sm text-gray-500 text-center">
                    USN: {studentData.usn}
                </p>
            </div>
            <div className="text-left">
                <p>
                    <strong>Department:</strong> {studentData.department_id}
                </p>
                <p>
                    <strong>CGPA:</strong> {studentData.cgpa}
                </p>
                <p>
                    <strong>Email:</strong> {studentData.personal_email}
                </p>
                <p>
                    <strong>Phone:</strong> {studentData.phone_no}
                </p>
                <p>
                    <strong>LinkedIn:</strong>{" "}
                    <a
                        href={studentData.linkedin_profile}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {studentData.linkedin_profile}
                    </a>
                </p>
                <p>
                    <strong>GitHub:</strong>{" "}
                    <a
                        href={studentData.github_profile}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {studentData.github_profile}
                    </a>
                </p>
            </div>
        </div>
    );
}

export default ProfilePage;
