"use client";
import React, { useState } from "react";
import {
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";

const MeetingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    websiteURL: "",
    whyInterested: "",
    timeConfirmed: false,
    additionalInfo: "",
  });

  const [questionnaireData, setQuestionnaireData] = useState({
    brandDescription: "",
    currentPriority: "",
    businessStage: "",
    budgetAllocated: "",
  });

  const [timezoneInfo, setTimezoneInfo] = useState({ name: "US/Eastern" });

  const timezones = [
    { label: "US/Eastern", value: "US/Eastern" },
    { label: "US/Central", value: "US/Central" },
    { label: "US/Pacific", value: "US/Pacific" },
    { label: "US/Mountain", value: "US/Mountain" },
    { label: "Europe/London", value: "Europe/London" },
    { label: "Europe/Berlin", value: "Europe/Berlin" },
  ];

  const timeSlots = [
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
  ];

  const priorityOptions = [
    "Establishing clarity and brand identity",
    "Expanding visibility and growth",
    "Scaling with structure and long-term systems",
  ];

  const businessStageOptions = [
    "Idea / Pre-launch",
    "Early-stage startup (0–2 years)",
    "Growing brand (2–5 years)",
    "Established business (5+ years)",
  ];

  const budgetOptions = [
    "Yes, we have resources set aside",
    "We are exploring options and planning budget",
    "Not at this time",
  ];

  const isDateAvailable = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 14);
    maxDate.setHours(0, 0, 0, 0);

    return date >= today && date <= maxDate;
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    const days = [];

    // Previous month days
    for (let i = 0; i < firstDay; i++) {
      const prevMonthDay = daysInPrevMonth - firstDay + i + 1;
      const prevMonthDate = new Date(year, month - 1, prevMonthDay);
      days.push({
        day: prevMonthDay,
        isCurrentMonth: false,
        isAvailable: false,
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(year, month, i);
      const isAvailable = isDateAvailable(currentDate);
      days.push({
        day: i,
        isCurrentMonth: true,
        isAvailable: isAvailable,
      });
    }

    return days;
  };

  const formatMonth = (date) =>
    date.toLocaleDateString("en-US", { month: "long", year: "numeric" });

  const handlePrevMonth = () => {
    const prevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1
    );
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth());
    if (prevMonth >= minDate) {
      setCurrentDate(prevMonth);
    }
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1
    );
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 14);
    const maxMonth = new Date(maxDate.getFullYear(), maxDate.getMonth());
    if (nextMonth <= maxMonth) {
      setCurrentDate(nextMonth);
    }
  };

  const handleDateSelect = (day) => {
    if (day.isCurrentMonth && day.isAvailable) {
      const selected = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day.day
      );
      setSelectedDate(selected);
      setSelectedTime(null);
    }
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setError("");
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleQuestionnaireChange = (field, value) => {
    setQuestionnaireData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNextPage = () => {
    setError("");
    if (!selectedDate || !selectedTime) {
      setError("Please select both date and time.");
      return;
    }
    setCurrentPage(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate form
    if (!formData.name || !formData.email) {
      setError("Please fill in Name and Email.");
      return;
    }

    if (!formData.timeConfirmed) {
      setError("Please confirm you've checked the time and timezone.");
      return;
    }

    if (
      !formData.phoneNumber ||
      !formData.websiteURL ||
      !formData.whyInterested
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    // Validate questionnaire - UPDATED TO 20 WORDS
    const wordCount = questionnaireData.brandDescription
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
    if (wordCount < 20) {
      setError("Please provide at least 20 words about your brand.");
      return;
    }

    if (
      !questionnaireData.currentPriority ||
      !questionnaireData.businessStage ||
      !questionnaireData.budgetAllocated
    ) {
      setError("Please answer all business information questions.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          date: selectedDate.toISOString(),
          time: selectedTime,
          timezone: timezoneInfo.name,
          questionnaire: questionnaireData,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSuccess(true);
      } else {
        setError("Failed to schedule meeting. Please try again.");
      }
    } catch {
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

  const handleBackToWebsite = () => {
    window.location.href = "/";
  };

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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Meeting Scheduled!
          </h2>
          <p className="text-gray-600 mb-6">
            Your meeting has been successfully scheduled. You'll receive a
            confirmation email shortly.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => {
                setSuccess(false);
                setCurrentPage(1);
                setSelectedDate(null);
                setSelectedTime(null);
                setFormData({
                  name: "",
                  email: "",
                  phoneNumber: "",
                  websiteURL: "",
                  whyInterested: "",
                  timeConfirmed: false,
                  additionalInfo: "",
                });
                setQuestionnaireData({
                  brandDescription: "",
                  currentPriority: "",
                  businessStage: "",
                  budgetAllocated: "",
                });
              }}
              className="w-full bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 font-semibold transition-colors"
            >
              Schedule Another Meeting
            </button>
            <button
              onClick={handleBackToWebsite}
              className="w-full flex items-center justify-center gap-2 text-gray-600 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Website
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 py-8">
      <div className="bg-white rounded-lg shadow-lg max-w-6xl w-full flex flex-col lg:flex-row min-h-[600px]">
        {/* Left Sidebar */}
        <div className="lg:w-80 p-6 border-r border-gray-300">
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={handleBackToWebsite}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors text-sm font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Website</span>
            </button>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex gap-2 items-center justify-center text-xl font-extrabold">
              <div className="border-4 px-3 py-1.5 rounded-lg border-gray-800 text-base">
                Re:
              </div>
              <div className="uppercase tracking-wider text-lg">Initiative</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-700 mb-4 text-sm">
            <Clock className="w-5 h-5" />
            <span>20 min</span>
          </div>
          <p className="text-sm text-gray-800 mb-6">
            Book a{" "}
            <span className="font-semibold">free 20-min Google Meet call</span>{" "}
            to learn more about Feedbird and get any of your questions answered.
          </p>

          <p className="text-sm text-gray-800 mb-6">
            <span className="font-semibold ">Important:</span> Ensure you select
            the correct AM/PM time to avoid mistakes, like 3am instead of 3pm.
          </p>

          {selectedDate && (
            <div className="mb-6 p-4 bg-gray-100 border-l-4 border-gray-700 rounded-lg">
              <p className="text-xs text-gray-700 mb-1">Selected Date</p>
              <p className="font-bold text-gray-900 text-sm">
                {formatSelectedDate()}
              </p>
              {selectedTime && (
                <>
                  <p className="text-xs text-gray-700 mt-2 mb-1">
                    Selected Time
                  </p>
                  <p className="font-bold text-gray-900 text-sm">
                    {selectedTime}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {timezoneInfo.name}
                  </p>
                </>
              )}
            </div>
          )}
        </div>
        {/* Right Content */}
        <div className="flex-1 p-6">
          {/* Page 1: Date & Time Selection */}
          {currentPage === 1 && (
            <>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Select a Date & Time
              </h2>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg mb-6 text-sm">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-2 gap-8">
                {/* Left: Calendar */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={handlePrevMonth}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4 text-gray-600" />
                    </button>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {formatMonth(currentDate)}
                    </h4>
                    <button
                      onClick={handleNextMonth}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(
                      (day) => (
                        <div
                          key={day}
                          className="text-center text-xs font-semibold text-gray-600 py-1"
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
                        disabled={!day.isCurrentMonth || !day.isAvailable}
                        className={`aspect-square flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
                          selectedDate?.getDate() === day.day &&
                          day.isCurrentMonth &&
                          day.isAvailable
                            ? "bg-black text-white"
                            : !day.isCurrentMonth
                            ? "text-transparent cursor-default"
                            : !day.isAvailable
                            ? "text-gray-400 cursor-not-allowed"
                            : "bg-gray-100 hover:bg-gray-800 text-gray-800 hover:text-white"
                        }`}
                      >
                        {day.day}
                      </button>
                    ))}
                  </div>

                  {/* Timezone */}
                  <div className="mt-6">
                    <label className="text-xs font-semibold mb-1 text-gray-900 flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Time zone
                    </label>
                    <select
                      value={timezoneInfo.name}
                      onChange={(e) =>
                        setTimezoneInfo({ name: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-xs bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      {timezones.map((tz) => (
                        <option key={tz.value} value={tz.value}>
                          {tz.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* Right: Time Slots */}
                <div>
                  {selectedDate ? (
                    <div className="text-sm font-semibold text-gray-900 mb-4">
                      {formatSelectedDate()}
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500 mb-4">
                      Select a date to see available times
                    </div>
                  )}
                  <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        disabled={!selectedDate}
                        className={`w-full text-center px-3 py-2 border rounded-lg text-sm font-medium transition-colors
                          ${
                            !selectedDate
                              ? "text-gray-400 cursor-not-allowed bg-gray-50 border-gray-200"
                              : selectedTime === time
                              ? "bg-black text-white border-black"
                              : "border-blue-200 bg-white text-gray-900 hover:bg-gray-50 hover:border-gray-400"
                          }
                        `}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={handleNextPage}
                className="w-full mt-8 bg-gray-800 text-white py-2.5 rounded-lg hover:bg-gray-900 font-semibold transition-colors text-sm"
              >
                Next
              </button>
            </>
          )}

          {/* Page 2: Form & Questions */}
          {currentPage === 2 && (
            <>
              <div className="flex items-center gap-3 mb-4">
                <button
                  onClick={() => setCurrentPage(1)}
                  className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 text-gray-600" />
                </button>
                <h2 className="text-lg font-bold text-gray-900">
                  Enter Details
                </h2>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg mb-4 text-sm">
                  {error}
                </div>
              )}

              <div className="space-y-5 max-w-2xl">
                {/* Basic Info */}
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium mb-1 text-gray-900">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1 text-gray-900">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="timeConfirmed"
                        checked={formData.timeConfirmed}
                        onChange={handleInputChange}
                        className="mt-0.5 text-gray-800 focus:ring-gray-500"
                      />
                      <span className="text-xs text-gray-700">
                        Please confirm you've checked the time and timezone to
                        avoid selecting a night-time slot by mistake (e.g., 3 AM
                        instead of 3 PM). *
                      </span>
                    </label>
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1 text-gray-900">
                      What's your phone number? *
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1 text-gray-900">
                      Website URL (or link to your socials) *
                    </label>
                    <input
                      type="url"
                      name="websiteURL"
                      value={formData.websiteURL}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1 text-gray-900">
                      Why are you interested in a call? *
                    </label>
                    <textarea
                      name="whyInterested"
                      value={formData.whyInterested}
                      onChange={handleInputChange}
                      required
                      rows={2}
                      className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Business Information */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-base">
                    Business Information
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium mb-1.5 text-gray-900">
                        Tell us a little about your brand. (20 words minimum) *
                      </label>
                      <textarea
                        value={questionnaireData.brandDescription}
                        onChange={(e) =>
                          handleQuestionnaireChange(
                            "brandDescription",
                            e.target.value
                          )
                        }
                        required
                        rows={3}
                        className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors"
                        placeholder="Describe your brand, products/services, target audience, and what makes you unique..."
                      />
                      <p className="text-xs text-gray-500 mt-0.5">
                        {
                          questionnaireData.brandDescription
                            .trim()
                            .split(/\s+/)
                            .filter((word) => word.length > 0).length
                        }{" "}
                        words (minimum 20 required)
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-medium mb-1.5 text-gray-900">
                        Which area best describes your current priority? *
                      </label>
                      <div className="space-y-1.5">
                        {priorityOptions.map((option) => (
                          <label
                            key={option}
                            className="flex items-center space-x-2 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="currentPriority"
                              value={option}
                              checked={
                                questionnaireData.currentPriority === option
                              }
                              onChange={(e) =>
                                handleQuestionnaireChange(
                                  "currentPriority",
                                  e.target.value
                                )
                              }
                              className="text-gray-800 focus:ring-gray-500"
                              required
                            />
                            <span className="text-xs text-gray-700">
                              {option}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium mb-1.5 text-gray-900">
                        What stage is your business at? *
                      </label>
                      <div className="space-y-1.5">
                        {businessStageOptions.map((option) => (
                          <label
                            key={option}
                            className="flex items-center space-x-2 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="businessStage"
                              value={option}
                              checked={
                                questionnaireData.businessStage === option
                              }
                              onChange={(e) =>
                                handleQuestionnaireChange(
                                  "businessStage",
                                  e.target.value
                                )
                              }
                              className="text-gray-800 focus:ring-gray-500"
                              required
                            />
                            <span className="text-xs text-gray-700">
                              {option}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium mb-1.5 text-gray-900">
                        Do you have a budget allocated for brand strategy and
                        creative direction? *
                      </label>
                      <div className="space-y-1.5">
                        {budgetOptions.map((option) => (
                          <label
                            key={option}
                            className="flex items-center space-x-2 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="budgetAllocated"
                              value={option}
                              checked={
                                questionnaireData.budgetAllocated === option
                              }
                              onChange={(e) =>
                                handleQuestionnaireChange(
                                  "budgetAllocated",
                                  e.target.value
                                )
                              }
                              className="text-gray-800 focus:ring-gray-500"
                              required
                            />
                            <span className="text-xs text-gray-700">
                              {option}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-gray-800 text-white py-2.5 rounded-lg hover:bg-gray-900 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
                >
                  {loading ? "Scheduling..." : "Schedule Meeting"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MeetingPage;
