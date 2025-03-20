import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: '全てのフィールドを入力してください。' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // 環境変数から取得
        pass: process.env.EMAIL_PASS, // 環境変数から取得
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'tw20thcenturyboy@gmail.com', // 送信先
      subject: `お問い合わせ from ${name}`,
      text: `名前: ${name}\nメール: ${email}\nメッセージ:\n${message}`,
    }

    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: 'お問い合わせが送信されました！' }, { status: 200 })
  } catch (error) {
    console.error('送信エラー:', error)
    return NextResponse.json({ error: 'メールの送信に失敗しました。' }, { status: 500 })
  }
}
