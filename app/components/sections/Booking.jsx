// components/BookingForm.jsx

'use client'; // Yeh ek Client Component hai kyunki isme state aur event handlers hain

import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

// Stepper Component - Top par 1-2-3 dikhane ke liye
const Stepper = ({ currentStep }) => {
    const steps = [1, 2, 3];
    return (
        <div className="flex items-center justify-center space-x-2 w-full mb-8">
            {steps.map((step, index) => (
                <div key={step} className="flex items-center w-full">
                    <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${currentStep >= step ? 'bg-cyan-500 text-white' : 'bg-gray-800 text-white'
                            }`}
                    >
                        {step}
                    </div>
                    {index < steps.length - 1 && (
                        <div className="flex-grow h-1 mx-2">
                            <div className={`h-full rounded-full ${currentStep > step ? 'bg-cyan-500' : 'bg-gray-300'}`}></div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

// Main Booking Form Component
export default function BookingForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        startDate: '',
        selectedActivities: [],
        selectedExtras: [],
        numberOfPeople: 1,
        notes: '',
    });
    const [activities, setActivities] = useState([]);
    const [extras, setExtras] = useState([]);

    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    // Activities aur Extras fetch karne ke liye
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Dono requests ek saath bhejein
                const [activitiesRes, extrasRes] = await Promise.all([
                    axios.get('http://localhost:5050/api/activities'),
                    axios.get('http://localhost:5050/api/extras')
                ]);
                setActivities(activitiesRes.data);
                setExtras(extrasRes.data);
            } catch (err) {
                setError('Could not load booking options. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // Input change handle karne ke liye
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Checkbox change handle karne ke liye
    const handleCheckboxChange = (e, type) => {
        const { value, checked } = e.target;
        const currentSelection = formData[type];

        let newSelection;
        if (checked) {
            newSelection = [...currentSelection, value];
        } else {
            newSelection = currentSelection.filter(id => id !== value);
        }
        setFormData(prev => ({ ...prev, [type]: newSelection }));
    };

    // Form submit karne ke liye
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        // API ke liye data format karein
        const requestData = {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,
            startDate: formData.startDate,
            numberOfPeople: parseInt(formData.numberOfPeople, 10),
            notes: formData.notes,
            selectedActivities: formData.selectedActivities,
            selectedExtras: formData.selectedExtras,
        };

        try {
            await axios.post('http://localhost:5050/api/tours/requests', requestData);
            setSuccess(true);
        } catch (err) {
            setError('Submission failed. Please check your details and try again.');
            console.error(err);
        } finally {
            setSubmitting(false);
        }
    };

    const nextStep = () => setCurrentStep(prev => prev < 3 ? prev + 1 : prev);
    const prevStep = () => setCurrentStep(prev => prev > 1 ? prev - 1 : prev);

    if (success) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FDF8F2]">
                <div className="text-center p-10 bg-white rounded-lg shadow-xl">
                    <h2 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h2>
                    <p className="text-gray-700">Your tour request has been submitted successfully. We will get back to you shortly.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white p-4 md:p-8 flex items-center justify-center">
            <div className="w-full max-w-6xl mx-auto lg:grid lg:grid-cols-2 lg:gap-10  overflow-hidden">
                {/* Left Side: The Form */}
                <div className="p-8 md:p-12 bg-[#FDF8F2] rounded-2xl shadow-lg">
                    <Stepper currentStep={currentStep} />

                    <p className="text-sm font-bold text-gray-500 tracking-widest mb-2">BOOK NOW</p>
                    <h1 className="text-4xl font-bold text-gray-800 mb-3">Book your private tour</h1>
                    <p className="text-gray-600 mb-10">
                        Let us know what kind of trip you want to experience on Socotra and we'll make it happen. Nothing is impossible.
                    </p>

                    <form onSubmit={handleSubmit}>
                        {/* Step 1: Your Details */}
                        {currentStep === 1 && (
                            <div className="space-y-6 animate-fadeIn">
                                <h2 className="text-2xl font-semibold text-gray-800">Your Details</h2>
                                <input type="text" name="firstName" placeholder="First name*" required className="w-full p-4 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400" value={formData.firstName} onChange={handleInputChange} />
                                <input type="text" name="lastName" placeholder="Last name*" required className="w-full p-4 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400" value={formData.lastName} onChange={handleInputChange} />
                                <input type="email" name="email" placeholder="Email*" required className="w-full p-4 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400" value={formData.email} onChange={handleInputChange} />
                                <div className="flex items-center bg-white rounded-lg focus-within:ring-2 focus-within:ring-cyan-400">
                                    <span className="p-4 text-gray-500 border-r border-gray-300">+39</span>
                                    <input type="tel" name="phone" placeholder="Mobile phone number*" required className="w-full p-4 bg-transparent focus:outline-none" value={formData.phone} onChange={handleInputChange} />
                                </div>

                                <h2 className="text-2xl font-semibold text-gray-800 pt-4">Travel Date</h2>
                                <p className="text-sm text-gray-500">Only available Tuesdays and Fridays</p>
                                <input type="date" name="startDate" required className="w-full p-4 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-500" value={formData.startDate} onChange={handleInputChange} />
                            </div>
                        )}

                        {/* Step 2: Activities & Extras */}
                        {currentStep === 2 && (
                            <div className="space-y-8 animate-fadeIn">
                                {loading ? <p>Loading options...</p> :
                                    <>
                                        <div>
                                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Activities</h2>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                {activities.map(activity => (
                                                    <label key={activity._id} className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                                        <input type="checkbox" value={activity._id} onChange={(e) => handleCheckboxChange(e, 'selectedActivities')} checked={formData.selectedActivities.includes(activity._id)} className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500" />
                                                        <span>{activity.name}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Extras</h2>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                {extras.map(extra => (
                                                    <label key={extra._id} className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                                        <input type="checkbox" value={extra._id} onChange={(e) => handleCheckboxChange(e, 'selectedExtras')} checked={formData.selectedExtras.includes(extra._id)} className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500" />
                                                        <span>{extra.name}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </>}
                            </div>
                        )}

                        {/* Step 3: Final Details */}
                        {currentStep === 3 && (
                            <div className="space-y-6 animate-fadeIn">
                                <h2 className="text-2xl font-semibold text-gray-800">Number of people</h2>
                                <input type="number" name="numberOfPeople" placeholder="Number of people" min="1" required className="w-full p-4 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400" value={formData.numberOfPeople} onChange={handleInputChange} />

                                <h2 className="text-2xl font-semibold text-gray-800">Additional Information</h2>
                                <textarea name="notes" placeholder="Message" rows="5" className="w-full p-4 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400" value={formData.notes} onChange={handleInputChange}></textarea>
                                <p className="text-xs text-gray-400">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-12">
                            {currentStep > 1 && (
                                <button type="button" onClick={prevStep} className="px-8 py-3 font-bold text-gray-800 border-2 border-gray-800 rounded-full hover:bg-white transition-colors flex items-center gap-2">
                                    <FaArrowLeft /> Previous
                                </button>
                            )}
                            <div className="ml-auto">
                                {currentStep < 3 && (
                                    <button type="button" onClick={nextStep} className="px-8 py-3 font-bold text-white bg-gray-800 rounded-full hover:bg-gray-900 transition-colors flex items-center gap-2">
                                        Next <FaArrowRight />
                                    </button>
                                )}
                                {currentStep === 3 && (
                                    <button type="submit" disabled={submitting} className="px-8 py-3 font-bold text-white bg-gray-800 rounded-full hover:bg-gray-900 transition-colors disabled:bg-gray-400">
                                        {submitting ? 'Sending...' : 'Send'}
                                    </button>
                                )}
                            </div>
                        </div>
                        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
                    </form>
                </div>

                {/* Right Side: Image Gallery */}
                <div className="hidden max-h-screen lg:grid grid-cols-2 grid-rows-3 gap-4 p-4 ">
                    <img src="/4.jpg" alt="Socotra landscape 1" className="col-span-2 row-span-1 object-cover w-full h-full rounded-lg" />
                    <img src="/8.jpg" alt="Socotra landscape 2" className="col-span-1 row-span-1 object-cover w-full h-full rounded-lg" />
                    <img src="/2.jpg" alt="Socotra landscape 3" className="col-span-1 row-span-1 object-cover w-full h-full rounded-lg" />
                    <img src="/5.jpg" alt="Socotra landscape 4" className="col-span-2 row-span-1 object-cover w-full h-full rounded-lg" />
                </div>
            </div>
        </div>
    );
}

// Apne global CSS me yeh animation add karein
/* tailwind.config.js or index.css */
/*
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.5s ease-in-out;
}
*/