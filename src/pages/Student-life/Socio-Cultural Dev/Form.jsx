import React, { useState } from 'react';

const IIMUNForm = () => {
    const [name, setName] = useState('');
    const [class_, setClass] = useState('');
    const [phone, setPhone] = useState('');
    const [munExp, setMunExp] = useState('');
    const [busStop, setBusStop] = useState('');
    const [preference1, setPreference1] = useState('');
    const [preference2, setPreference2] = useState('');
    const [preference3, setPreference3] = useState('');
    const [attachment, setAttachment] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            name,
            class: class_,
            phone,
            munExp,
            busStop,
            preference1,
            preference2,
            preference3,
            attachment,
        });
    };

    return (
    
        <div id="form">
        <h2>Interested candidates, kindly fill the form</h2>
            <div className="form-container ">
            <h3 className="form-title">Little Scholars School IIMUN Championship Conference Form 2024</h3>
            <form onSubmit={handleSubmit} >
            <div className="form-grid">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name of Trainee"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="class">Class</label>
                    <select
                        className="form-control"
                        id="class"
                        value={class_}
                        onChange={(e) => setClass(e.target.value)}
                        required
                    >
                        <option value="">Select</option>
                        <option value="Class 1">Class 1</option>
                        <option value="Class 2">Class 2</option>
                        <option value="Class 3">Class 3</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="busstop">Bus Stop</label>
                    <input
                        type="text"
                        className="form-control"
                        id="busstop"
                        placeholder="Bus Stop"
                        value={busStop}
                        onChange={(e) => setBusStop(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="munExp">MUN Experience</label>
                    <textarea
                        className="form-control"
                        id="munExp"
                        placeholder="Describe your MUN Experience"
                        value={munExp}
                        onChange={(e) => setMunExp(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="preference1">Country Preference 1</label>
                    <input
                        type="text"
                        className="form-control"
                        id="preference1"
                        placeholder="First Preference"
                        value={preference1}
                        onChange={(e) => setPreference1(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="preference2">Country Preference 2</label>
                    <input
                        type="text"
                        className="form-control"
                        id="preference2"
                        placeholder="Second Preference"
                        value={preference2}
                        onChange={(e) => setPreference2(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="preference3">Country Preference 3</label>
                    <input
                        type="text"
                        className="form-control"
                        id="preference3"
                        placeholder="Third Preference"
                        value={preference3}
                        onChange={(e) => setPreference3(e.target.value)}
                    />
                </div>
                </div>
                <div className="form-group">
                    <label htmlFor="attachment">Attachment</label>
                    <input
                        type="file"
                        className="form-control"
                        id="attachment"
                        onChange={(e) => setAttachment(e.target.files[0])}
                    />
                </div>
                <div>
                <label htmlFor="accountNo">Account No:</label>
            <p id="accountNo">0262002100034868</p>
            <label htmlFor="ifscCode">IFSC Code:</label>
            <p id="ifscCode">PUNB0026200</p>
          </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </div>
    );
};

export default IIMUNForm;