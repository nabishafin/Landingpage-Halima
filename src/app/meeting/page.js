"use client";
import React, { useState, useEffect } from "react";
import { Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";

const MeetingPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 9, 1));
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [hydrated, setHydrated] = useState(false); // ✅ added

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    additionalInfo: "",
  });

  useEffect(() => {
    setHydrated(true); // ✅ ensures client-only rendering for dynamic parts
  }, []);

  const timeSlots = [
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push({
        day: daysInPrevMonth - firstDay + i + 1,
        isCurrentMonth: false,
      });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, isCurrentMonth: true });
    }

    return days;
  };

  const formatMonth = (date) => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const handleDateSelect = (day) => {
    if (day.isCurrentMonth) {
      const selected = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day.day
      );
      setSelectedDate(selected);
      setSelectedTime(null);
      setShowForm(false);
    }
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.firstName || !formData.lastName || !formData.email) {
      setError(
        "Please fill in all required fields (First name, Last name, Email)."
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          date: selectedDate.toISOString(),
          time: selectedTime,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          additionalInfo: formData.additionalInfo,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          additionalInfo: "",
        });
      } else {
        setError("Failed to schedule meeting. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatSelectedDate = () => {
    if (!selectedDate) return "";
    return selectedDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const currentTime = hydrated
    ? new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    : ""; // ✅ prevents SSR mismatch

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Meeting Scheduled!</h2>
          <p className="text-gray-600 mb-6">
            Your meeting has been successfully scheduled. You'll receive a
            confirmation email shortly.
          </p>
          <button
            onClick={() => {
              setSuccess(false);
              setSelectedDate(null);
              setSelectedTime(null);
              setShowForm(false);
            }}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Schedule Another Meeting
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-6xl w-full flex flex-col lg:flex-row">
        {/* Left Sidebar */}
        <div className="lg:w-80 p-8 border-r border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Feedbird</p>
              <h1 className="text-xl font-bold">Feedbird Intro</h1>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <Clock className="w-5 h-5" />
            <span>20 min</span>
          </div>

          <p className="text-sm text-gray-700 mb-4">
            Book a{" "}
            <span className="font-semibold">free 20-min Google Meet call</span>{" "}
            to learn more about Feedbird and get any of your questions answered.
          </p>

          {selectedDate && (
            <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
              <p className="text-xs text-gray-600 mb-1">Selected Date</p>
              <p className="font-semibold text-blue-900">
                {formatSelectedDate()}
              </p>
              {selectedTime && (
                <>
                  <p className="text-xs text-gray-600 mt-2 mb-1">
                    Selected Time
                  </p>
                  <p className="font-semibold text-blue-900">{selectedTime}</p>
                  <p className="text-xs text-gray-500">{timeZone}</p>
                </>
              )}
            </div>
          )}

          <div className="mt-8">
            <p className="font-semibold text-sm mb-2">Relevant links</p>
            <ul className="text-sm text-blue-600 space-y-1">
              <li>⭐ Client Reviews</li>
              <li>📊 Pricing & Plans</li>
              <li>📸 Examples of our work</li>
            </ul>
          </div>

          <div className="mt-8">
            <p className="font-semibold text-sm mb-2">Not a good fit for:</p>
            <ul className="text-sm text-red-600 space-y-1">
              <li>❌ Coaches & Consultants</li>
              <li>❌ Personal Brands</li>
            </ul>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 p-8">
          {!showForm ? (
            <>
              <h2 className="text-2xl font-bold mb-6">Select a Date & Time</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Calendar */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={handlePrevMonth}
                      className="p-2 hover:bg-gray-100 rounded"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <h3 className="font-semibold">
                      {formatMonth(currentDate)}
                    </h3>
                    <button
                      onClick={handleNextMonth}
                      className="p-2 hover:bg-gray-100 rounded"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                      (day) => (
                        <div
                          key={day}
                          className="text-center text-xs font-semibold text-gray-600 py-2"
                        >
                          {day}
                        </div>
                      )
                    )}
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {getDaysInMonth(currentDate).map((day, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleDateSelect(day)}
                        disabled={!day.isCurrentMonth}
                        className={`aspect-square flex items-center justify-center rounded-full text-sm
                          ${
                            !day.isCurrentMonth
                              ? "text-gray-300"
                              : "text-gray-900 hover:bg-gray-100"
                          }
                          ${
                            selectedDate?.getDate() === day.day &&
                            day.isCurrentMonth
                              ? "bg-blue-600 text-white hover:bg-blue-700"
                              : ""
                          }
                        `}
                      >
                        {day.day}
                      </button>
                    ))}
                  </div>

                  <div className="mt-4">
                    <p className="text-sm font-semibold mb-2">Time zone</p>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
                      <option>
                        {hydrated
                          ? `${timeZone} (${currentTime})`
                          : `${timeZone}`}
                      </option>
                    </select>
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  {selectedDate ? (
                    <>
                      <p className="font-semibold mb-4">
                        {formatSelectedDate()}
                      </p>
                      <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => handleTimeSelect(time)}
                            className={`w-full text-left px-4 py-3 border rounded-lg font-medium transition-colors
                              ${
                                selectedTime === time
                                  ? "bg-blue-600 text-white border-blue-600"
                                  : "border-blue-600 text-blue-600 hover:bg-blue-50"
                              }
                            `}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      Select a date to see available times
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div>
              <button
                onClick={() => setShowForm(false)}
                className="flex items-center gap-2 text-blue-600 mb-6 hover:underline"
              >
                <ChevronLeft className="w-4 h-4" />
                Back to calendar
              </button>

              <h2 className="text-2xl font-bold mb-6">Enter Your Details</h2>

              {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

              <div className="space-y-4 max-w-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Additional Information
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Please share anything that will help prepare for our meeting."
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {loading ? "Scheduling..." : "Schedule Event"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MeetingPage;
