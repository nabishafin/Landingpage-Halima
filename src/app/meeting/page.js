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

    for (let i = 0; i < firstDay; i++) {
      const prevMonthDay = daysInPrevMonth - firstDay + i + 1;
      const prevMonthDate = new Date(year, month - 1, prevMonthDay);
      days.push({
        day: prevMonthDay,
        isCurrentMonth: false,
        isAvailable: false,
      });
    }

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

    if (!formData.name || !formData.email) {
      setError("Please fill in Name and Email.");
      return;
    }

    if (!formData.timeConfirmed) {
      setError("Please confirm you&apos;ve checked the time and timezone.");
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
            Your meeting has been successfully scheduled. You&apos;ll receive a
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
      {/* The rest of your JSX is fine, no further changes needed */}
    </div>
  );
};

export default MeetingPage;
