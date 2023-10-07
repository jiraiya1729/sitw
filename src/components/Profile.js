import React, { useState, useEffect } from "react";
import axios from "axios";

function Profile(props) {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        getUsers();
    }, []);

    const email = localStorage.getItem('email');
    const name = localStorage.getItem('name');
    const age = localStorage.getItem('age');
    const number = localStorage.getItem('number');

    function getUsers() {
        // ... (rest of your axios call)
        axios({
            method: "GET",
            url:`https://check-e107.onrender.com/profile/${email}`, 
            headers: {
              Authorization: 'Bearer ' + props.token
            }
          })
          .then((response) => {
              console.log(response)
            const res =response.data
            res.access_token && props.setToken(res.access_token)
            setProfileData(({
              profile_name: res.name,
              profile_email: res.email,
              profile_number: res.number,
              profile_age: res.age,
              }))
          }).catch((error) => {
            if (error.response) {
              console.log(error.response)
              console.log(error.response.status)
              console.log(error.response.headers)
              }
          })
    }

    let imgs = [
        'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp',
    ];

    return (
        <div className="container mx-auto mt-10">
            
            <div className="flex justify-center items-center h-1/2">
                <div className="w-full lg:w-3/4">
                    <h1>hello</h1>
                    <h1>{name}-{age}-{number}</h1>
                    {profileData && <div className="flex flex-col lg:flex-row bg-white shadow rounded">
                        <div className="w-full lg:w-1/3 bg-green-500 text-center text-white p-6">
                            <img src={imgs[0]} className="mx-auto my-5 w-32 h-32 rounded-full" />
                            <h5 className="text-lg font-semibold">{profileData.profile_name}</h5>
                            <p className="text-sm">Coder</p>
                            {/* Placeholder for edit icon */}
                            {/* <i className="far fa-edit mb-5"></i> */}
                        </div>

                        <div className="w-full lg:w-2/3 p-6">
                            <h6 className="text-lg font-semibold mb-4">Your profile details:</h6>

                            <div className="flex flex-wrap -mx-2">
                                <div className="w-1/2 px-2 mb-4">
                                    <h6 className="text-sm font-semibold mb-2">Email</h6>
                                    <p className="text-gray-500">{profileData.profile_email}</p>
                                </div>
                                <div className="w-1/2 px-2 mb-4">
                                    <h6 className="text-sm font-semibold mb-2">Name</h6>
                                    <p className="text-gray-500">{profileData.profile_name}</p>
                                </div>
                                <div className="w-1/2 px-2 mb-4">
                                    <h6 className="text-sm font-semibold mb-2">Phone</h6>
                                    <p className="text-gray-500">{profileData.profile_number}</p>
                                </div>
                            </div>
                            <h6 className="text-sm font-semibold mb-2">Age</h6>
                            <p className="text-gray-600">
                                {profileData.profile_age}
                            </p>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default Profile;
