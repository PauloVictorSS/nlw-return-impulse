import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mailAdapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
      user: "37f58f557a55ec",
      pass: "14013a20b02147"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({subject, body}: SendMailData){
    await transport.sendMail({
      from: 'Equipe feedget <oi@feedget.com>',
      to: 'Paulo Victor <paulovictorsantos0@gmail.com>',
      subject,
      html: body
    })
  }
}