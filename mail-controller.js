const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sixlarovtahir13@gmail.com",
    pass: "xnes lhyj uaod nnsy",
  },
});

exports.sendMail = async (req, res, next) => {
  const { name, phone, email, address, description } = req.body;
  transporter.sendMail({
    from: "sixlarovtahir13@gmail.com",
    to: "office@spectrumlawfirm.com",
    subject: "New message",
    html: ` <div
    style="
      min-height: 240px;
      min-width: 200px;
      max-width: 80%;
      background-color: rgb(141, 163, 165);
      margin: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid grey;
      cursor: default;
    "
  >
    <div
      style="
        min-height: 40px;
        margin: 0;
        padding: 15px;
        box-sizing: border-box;
        width: auto;
        overflow-wrap: break-word;
        border-bottom: 1px solid grey;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      "
    >
      <h2
        style="
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-size: 1.2rem;
        "
      >
        Name:
      </h2>
      <p>
        ${name}
      </p>
    </div>
    <div
      style="
        min-height: 40px;
        margin: 0;
        padding: 15px;
        box-sizing: border-box;
        width: auto;
        overflow-wrap: break-word;
        border-bottom: 1px solid grey;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      "
    >
      <h2
        style="
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-size: 1.2rem;
        "
      >
        Phone:
      </h2>
      <p>
        ${phone}
      </p>
    </div>
    <div
      style="
        min-height: 40px;
        margin: 0;
        padding: 15px;
        box-sizing: border-box;
        width: auto;
        overflow-wrap: break-word;
        border-bottom: 1px solid grey;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      "
    >
      <h2
        style="
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-size: 1.2rem;
        "
      >
        Email:
      </h2>
      <p>
        ${email}
      </p>
    </div>
    <div
      style="
        min-height: 40px;
        margin: 0;
        padding: 15px;
        box-sizing: border-box;
        width: auto;
        overflow-wrap: break-word;
        border-bottom: 1px solid grey;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      "
    >
      <h2
        style="
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-size: 1.2rem;
        "
      >
        Address:
      </h2>
      <p>
        ${address}
      </p>
    </div>
    <div
      style="
        min-height: 40px;
        margin: 0;
        padding: 15px;
        box-sizing: border-box;
        width: auto;
        overflow-wrap: break-word;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      "
    >
      <h2
        style="
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-size: 1.2rem;
        "
      >
        Description:
      </h2>
      <p>
        ${description}
      </p>
    </div>
  </div>`,
  });
  return res.send(200);
};
