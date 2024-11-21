// lib/client-hash.ts
import { createHash } from 'crypto';
import { headers } from 'next/headers';

interface ClientIdentificationFactors {
  ip?: string;
  userAgent?: string;
  acceptLanguage?: string;
  screenInfo?: string;
  timezone?: string;
}

export async function getClientHash(
  options: {
    length?: number;
  } = {}
): Promise<string> {
  const { length = 32 } = options;

  const headersInstance = await headers();

  // Enhanced identification factors
  const factors: ClientIdentificationFactors = {
    ip:
      headersInstance.get('x-forwarded-for') ||
      headersInstance.get('x-real-ip') ||
      headersInstance.get('remote-addr') ||
      'unknown',
    userAgent: headersInstance.get('user-agent') || 'unknown',
    acceptLanguage: headersInstance.get('accept-language') || 'unknown',
  };

  // Create a more robust hash combining multiple factors
  const baseString = Object.entries(factors)
    .filter(([_, value]) => value !== 'unknown')
    .map(([key, value]) => `${key}:${value}`)
    .join('|');

  // Add a salt for additional security
  const salt = process.env.HASH_SALT || 'default-salt-change-in-production';

  return createHash('sha256')
    .update(`${baseString}|${salt}`)
    .digest('hex')
    .slice(0, length);
}
