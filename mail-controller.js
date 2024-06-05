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
    subject: name + " " + phone + email + address + description,
  });
  return res.send(200);
};
