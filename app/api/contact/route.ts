import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, venue, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Brak wymaganych pól' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'Nowa Wiadomość ze Strony <onboarding@resend.dev>', // You should change this to a verified domain if possible
      to: ['zlota4dev@gmail.com'], // The email where the message will be sent
      subject: `Wiadomość ze strony od: ${name}`,
      replyTo: email,
      html: `
        <div>
          <h2>Nowe zapytanie o kontakt!</h2>
          <p><strong>Imię:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Miejsce wesela:</strong> ${venue || 'Nie podano'}</p>
          <p><strong>Wiadomość:</strong></p>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        </div>
      `,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Wystąpił błąd serwera' }, { status: 500 });
  }
}
