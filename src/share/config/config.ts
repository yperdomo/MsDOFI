import { registerAs } from '@nestjs/config';

export default registerAs('configuration', () => ({
  PORT: parseInt(process.env.PORT, 10) || 8080,
  URLJOBJENKINS: process.env.URLJOBJENKINS,
  URLCOMPLEMENT: process.env.URLCOMPLEMENT,
  USERJENKINS: process.env.USERJENKINS,
  TOKENJENKIN: process.env.TOKENJENKIN,
}));