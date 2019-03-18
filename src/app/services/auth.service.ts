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
    const token = await this.storage.get(TOKEN_KEY);
    if (token) {
      this.authenticationState.next(true);
    }
  }

  public getToken(): Observable<string> {
    return from(this.storage.get(TOKEN_KEY));
  }

  public async login(userName: string, password: string): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 500));
    try {
      const token = await this.api.apiTokenAuthCreate({ username: 'kszychu', password: 'kszychu' }).toPromise();
      await this.storage.set(TOKEN_KEY, `Bearer ${token}`);
      this.authenticationState.next(true);
      return true;
    } catch {
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
