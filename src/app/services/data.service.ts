import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private http: HttpClient) {
    }
    get() {
        return this.http.get('http://localhost:3000/basket');
    }
    save(product: Product) {
        return this.http.post('http://localhost:3000/basket', product);
    }
    update(product: Product) {
        return this.http.put(`http://localhost:3000/basket/${product.code}`, product);
    }
    delete(product: Product) {
        return this.http.delete(`http://localhost:3000/basket/${product.code}`);
    }
    getCategory() {
        return this.http.delete(`http://localhost:3000/category`);
    }
}