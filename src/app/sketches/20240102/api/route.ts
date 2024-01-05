import { NextResponse } from 'next/server';
import { Data } from '../page';

export async function POST(request: Request) {
  const reqBody = (await request.json()) as Data;

  const receiveTime = new Date().valueOf();
  reqBody.receiveFromClient.value = receiveTime;

  const submitToClientTime = new Promise<number>((resolve) => {
    setTimeout(() => resolve(new Date().valueOf()), Math.random() * 500);
  });
  reqBody.submitToClient.value = await submitToClientTime;

  return NextResponse.json(reqBody);
}
