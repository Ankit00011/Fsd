  function calculateAge() {
      const birthDate = document.getElementById('birthdate').value;
      const result = document.getElementById('result');

      if (!birthDate) {
        result.innerHTML = "<p style='color:red;'>Please select your birth date!</p>";
        return;
      }

      const today = new Date();
      const birth = new Date(birthDate);

      let years = today.getFullYear() - birth.getFullYear();
      let months = today.getMonth() - birth.getMonth();
      let days = today.getDate() - birth.getDate();

      // Adjust months and days if needed
      if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
      }
      if (months < 0) {
        years--;
        months += 12;
      }

      result.innerHTML = `
        <p>You are <strong>${years}</strong> years,
        <strong>${months}</strong> months, and
        <strong>${days}</strong> days old.</p>
      `;
    }