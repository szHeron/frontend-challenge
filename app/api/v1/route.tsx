import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: 'Bem vindo! Este é seu espaço para desenvolver o desafio' });
}
