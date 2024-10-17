const formatDate = (dateString) => {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
        return "Invalid Date"; // If the date is invalid
    }

    return date.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
};

export default formatDate;
