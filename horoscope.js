function getZodiacSign(month) {
  const signInfo = horoscope[month.toLowerCase()];
  return signInfo ? `${signInfo.sign} ${signInfo.symbol}` : null;
}


document.getElementById("month").addEventListener("change", function(e) {
  const zodiacSign = getZodiacSign(e.target.value);
  if (zodiacSign) {
    document.getElementById("result").innerText = `Your zodiac sign is ${zodiacSign}`;
  } else {
    document.getElementById("result").innerText = "";
  }
});


const horoscope = {
  january: {
    sign: "Capricorn",
    symbol: "♑"
  },
  february: {
    sign: "Aquarius",
    symbol: "♒"
  },
  march: {
    sign: "Pisces",
    symbol: "♓"
  },
  april: {
    sign: "Aries",
    symbol: "♈"
  },
  may: {
    sign: "Taurus",
    symbol: "♉"
  },
  june: {
    sign: "Gemini",
    symbol: "♊"
  },
  july: {
    sign: "Cancer",
    symbol: "♋"
  },
  august: {
    sign: "Leo",
    symbol: "♌"
  },
  september: {
    sign: "Virgo",
    symbol: "♍"
  },
  october: {
    sign: "Libra",
    symbol: "♎"
  },
  november: {
    sign: "Scorpio",
    symbol: "♏"
  },
  december: {
    sign: "Sagittarius",
    symbol: "♐"
  }
}

