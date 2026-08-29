import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // Oddiy matn qaytarish
  getHello(): string {
    return 'Assalomu alaykum! NestJS Docker va AWS serverida muvaffaqiyatli ishlamoqda 🚀';
  }

  // Server va loyiha haqida JSON ma'lumot qaytarish
  getSystemInfo() {
    return {
      status: 'active',
      server: 'AWS EC2',
      container: 'Docker',
      environment: process.env.NODE_ENV || 'production',
      timestamp: new Date().toISOString(),
    };
  }

  // POST so'rovi uchun test xizmati
  processData(data: any) {
    return {
      message: "Ma'lumotlar muvaffaqiyatli qabul qilindi!",
      receivedData: data,
    };
  }
}