import { inject, Injectable, signal } from '@angular/core';
import { ApiService } from '../api.service';
import { Length } from '../../interfaces/get-cap-sharing.interface';

@Injectable({
  providedIn: 'root'
})
export class CapSharingLengthsService {
  api = inject(ApiService);
  list = signal<Length[]>([]);
  loading = signal(false);
  constructor() {
    this.main();
  }

  async main() {
    this.loading.set(true);
    const response = await this.api.GET_SessionLength();
    this.list.set(response.data);
    this.loading.set(false);
  }
}
