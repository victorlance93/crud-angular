import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://docs.google.com/spreadsheets/d/1Mgoy6Wd3J1OqfI96LIXCN--Uj_hx-Au1XEypKQrg00Y/edit?usp=sharing';
  htttOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpCliente: HttpClient) { }

  // C.R.U.D -  CREATE, READ , UPDATE, DELETE

  // Retorna a lista de ususarios - READ

  getUsers(): Observable<User[]>{
    return this.httpCliente.get<User[]>(this.apiUrl)
  }

  //Salva usuario no banco - CREATE

  postUser(user: User): Observable<User> {
    return this.httpCliente.post<User>(this.apiUrl, user, this.htttOptions);
  }

  // Exclui o usuario do banco - DELETE

  deleteUser(id: number): Observable<User>{
    return this.httpCliente.delete<User>(`${this.apiUrl}/id/${id}`)
  }

  // Edita o usuário - UPDATE 

  updateUser(id: string, user: User): Observable<User>{
    return this.httpCliente.put<User>(`${this.apiUrl}/id/${id}`, user, this.htttOptions);
  }

  //Lista usuário Unico 
  getUser(id: string):Observable<User[]> {
    return this.httpCliente.get<User[]>(`${this.apiUrl}/id/${id}`)
  }
}
