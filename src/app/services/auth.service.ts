import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { ApiApiService } from '@api-proxy';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authenticationState = new BehaviorSubject(false);

  constructor(
    private storage: Storage,
    private plt: Platform,
    private api: ApiApiService
  ) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  private async checkToken() {
    const token = this.storage.get(TOKEN_KEY);
    if (token) {
      this.authenticationState.next(true);
    }
  }

  public getToken(): Observable<string> {
    return from(this.storage.get(TOKEN_KEY));
  }

  public async login(userName: string): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    await this.storage.set(TOKEN_KEY, `Bearer ${userName}`);
    try { await this.api.apiTokenAuthCreate({ username: 'krzychu', password: 'krzychu' }).toPromise(); } catch {}
    switch (userName) {
      case 'ewa':
      case 'kuba':
        this.authenticationState.next(true);
        return true;
      default:
        return false;
    }
  }

  public async logout() {
    await this.storage.remove(TOKEN_KEY);
    this.authenticationState.next(false);
  }

  public get isAuthenticated() {
    return this.authenticationState.value;
  }
}
