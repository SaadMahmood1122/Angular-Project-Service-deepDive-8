import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  log(message: string) {
    const timeStampe = new Date().toLocaleDateString();
    console.log(`[${timeStampe}] : ${message}`);
  }
}
