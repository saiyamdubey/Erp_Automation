const puppeteer = require("puppeteer");
const nodemailer = require("nodemailer");

const timehai = Date.now();
const nameuser = "22015001973";
const pass = "Krishna@8787";


const screenshottimetable = async () => {
  const browser = await puppeteer
  
    .launch({
      // headless: false,
      defaultViewport: null,
      args: ["--start-maximized"],
    })
    .catch((err) => {
      console.log("Error biro : ", err);
    });
  const page = await browser.newPage();
  await page.goto("https://erp.psitche.ac.in/");
  const username = 'input[name="username"]';
  await page.waitForSelector(username);
  await page.type(username, nameuser);
  const password = 'input[name="password"]';
  await page.waitForSelector(password);
  await page.type(password, pass);
  const signinbutton = ".login-buttons";
  await page.waitForSelector(signinbutton);
  await page.click(signinbutton);
  console.log("Before navigating to My TimeTable");
  const timetable = "a[href='https://erp.psitche.ac.in/Student/MyTimeTable']";
  await page.waitForSelector(timetable);
  await page.click(timetable);
  await page.waitForTimeout(6000);
  const divSelector = ".table-responsive";
  await page.waitForSelector(divSelector);
  const divHandle = await page.$(divSelector);
  const boundingBox = await divHandle.boundingBox();
  await page.setDefaultNavigationTimeout(60000);
  if (boundingBox) {
    await page.screenshot({
      path: "timetable" + timehai + ".jpeg",
      clip: {
        x: boundingBox.x,
        y: boundingBox.y,
        width: boundingBox.width,
        height: boundingBox.height,
      },
    });
    console.log("Screenshot taken successfully");
  }
};

const sendmail = async function sendMail() {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: "saiyamdubey8787@gmail.com",
      pass: "nurmmdlwtkzevaks",
    },
  });
  const mailOptions = {
    from: "saiyamdubey8787@gmail.com",
    to: ["saiyamdubey5@gmail.com","withatifansari@gmail.com","divyanshbajpai27@gmail.com"],
    subject: "😘😘💖😘😘😘",
    text: "Hello, Looking Nice ...",
    attachments: [
      {
        filename: "timetable" + timehai + ".jpeg",
        path: "./timetable" + timehai + ".jpeg",
      },
    ],
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Eamil sent successfully ☀️", result);
  } catch (error) {
    console.log("Email send failed with error:", error);
  }
};

screenshottimetable().then(() => {
  console.log("Sending Time table to all the provided mails now ");
  sendmail();
});

// follow me guys at MY GITHUB

// https://github.com/saiyamdubey
