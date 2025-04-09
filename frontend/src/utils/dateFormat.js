export function dateFormat(date) {
    // year-month-day
    const objDate = new Date(date);
    const year = objDate.getFullYear();
    const day = objDate.getDate();
    const month = objDate.toLocaleString('en-US', { month: 'long' });
    // 7 mart 2025-ci il
    return `${day} ${month} ${year}`;

}

