import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../../../node_modules/angularfire2/database';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { Product } from 'shared/models/product';

@Injectable()
export class ProductService {

  constructor(private db : AngularFireDatabase) { }

  create(product){
    return this.db.list('/products').push(product);
  }

  getAll() : Observable<Product[]>{
    return this.db.list('/products');
  }

  get(productId){
    return this.db.object('/products/'+ productId);
  }

  update(product, productId){
    this.db.object('/products/' + productId).update(product);
  }

  delete(productId) {
    this.db.object('/products/'+ productId).remove();
  }
}
