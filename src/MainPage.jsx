import React, { useState } from "react";
import axios from "axios";

const MainPage = () => {
    const [value, setValue] = useState("");

    const [data, setData] = useState("")

    const key = 'eeba2ecb69d97f5175572308c8df74bb';

    const callDisplayPreview = async () => {

        const res = await axios.post(`https://api.linkpreview.net/?key=${key}&q=${value}`)

        console.log(res.data);
        setData(res.data)

    }

    return (
        <div className="mainContainer">
            <div className="headingDiv">
                <h2>Welcome to Url Previewer</h2>
            </div>

            <div className="searchAndDisplayPreview">
                <div className="searchPreview">
                    <input
                        type="text"
                        placeholder="Enter Your URL"
                        value={value}
                        onChange={(e) => { setValue(e.target.value) }}
                        autoComplete="true"
                    />
                    <button onClick={callDisplayPreview} > Get Preview </button>
                </div>

                <div className="displayPreview">
                    {
                        data.length != 0 ? <>
                            <div className="titleDiv">
                                <h1>{data.title}</h1>
                            </div>

                            <div className="descriptionDiv">
                                <p>{data.description}</p>

                            </div>

                            <div className="imageDiv">
                                <img src={data.image} alt="" />
                            </div>

                            <div className="urlDiv">
                                <a href={data.url} target="_blank" >{data.url}</a>
                            </div>
                        </> : ''
                    }
                </div>
            </div>
        </div>
    );
};

export default MainPage;
