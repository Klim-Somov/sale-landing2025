import nodemailer from 'nodemailer';
const config = useRuntimeConfig();

const transporter = nodemailer.createTransport({
  host: config.mailhost,
  port: config.mailport,
});

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    await transporter.sendMail({
      from: config.mailfrom,
      replyTo: `"${body.from}" <${body.email}> `,
      to: config.mailto,
      subject: 'Новая заявка PayTaxi Лендинг (Угрозы бизнесу)',
      text: `

      Имя: ${body.from}

      Телефон: ${body.phone}

      `,

      html: '',
    });
    return 'Отправлено';
  } catch (error) {
    sendError(
      event,
      createError({ statusCode: 400, message: `ошибка-${error}` })
    );
  }
});
