import 'dotenv/config'
import fetch from "node-fetch";

// SEE OUTPUT: https://storage.googleapis.com/test-gds-api/fruit-preference-1710194611555

async function main() {
  const res = await fetch("http://localhost:8080/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      apiKey: process.env.OPENAI_API_KEY,
      googleSheet: {
        url: "https://docs.google.com/spreadsheets/d/1jwZEyCw5SWFWVI5AGAN16WM0Swz-HcMhWIECNgKtdAY/edit?resourcekey#gid=1571085648",
        pieChartColumns: ["Do you agree with the approach presented in the blogpost? (1 is least agreement, 5 is most) "],
        //filterEmails: [
        //  "bruno1@gmail.com",
        //  "ted@gmail.com",
        //  "alice@gmail.com",
        //  "bob@gmail.com",
        //  "yannis@gmail.com",
        //],
      },
      title: "Governance Blogpost",
      question: "Do you agree with the approach presented in the governance blogpost?",
    }),
  });
  const resData = await res.json();
  console.log("The report will be generated at: ", resData.url);
}

try {
  main();
} catch (e) {
  console.error(e.message);
}

