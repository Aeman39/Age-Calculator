document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('ageForm').addEventListener('submit', function (e) {
        e.preventDefault();

        let dob = new Date(document.getElementById('dob').value);
        let today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        let monthDiff = today.getMonth() - dob.getMonth();
        let dayDiff = today.getDate() - dob.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
            monthDiff += 12;
        }

        if (dayDiff < 0) {
            let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            dayDiff += lastMonth;
            monthDiff--;
        }

        document.getElementById('result').innerText = `Your age is ${age} Years ${monthDiff} Months ${dayDiff} Days.`;
    });
});
