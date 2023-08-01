//* api/auth/me
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import * as jose from 'jose';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bearerToken = req.headers['authorization'] as string;

  // if (!bearerToken) {
  //   return res.status(401).json({
  //     errorMessage: 'Unauthorised request!',
  //   });
  // }

  const token = bearerToken.split(' ')[1];

  // if (!token) {
  //   return res.status(401).json({
  //     errorMessage: 'Unauthorised request!',
  //   });
  // }

  // const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  // try {
  //   await jose.jwtVerify(token, secret);
  // } catch (error) {
  //   return res.status(401).json({
  //     errorMessage: 'Unauthorised request!',
  //   });
  // }

  const payload: jose.JWTPayload = jose.decodeJwt(token);

  const { email } = payload.email as { email: string };

  if (!email) {
    return res.status(401).json({
      errorMessage: 'Unauthorised user!',
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
      city: true,
      phone: true,
      password: false,
    },
  });

  if (!user) {
    return res.status(401).json({
      errorMessage: 'User not found!',
    });
  }

  return res.json({
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    phone: user.phone,
    city: user.city,
  });
}
