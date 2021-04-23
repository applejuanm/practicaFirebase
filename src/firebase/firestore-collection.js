import { LitElement, html } from 'lit-element';
import { FirestoreMixin } from './firestore-mixin';

class FirestoreCollection extends FirestoreMixin(LitElement) {

 //si el template se actualiza dispara el changedProperties y realiza la ejecucion del ciclo if
 //y luego hace la suscripcion, primero se desuscribe y luego se suuscribe
  updated(changedProperties) {
    if(changedProperties.has('collection')) {
      this._doSubscription()
    }
  }

  _doSubscription() {
    super._doSubscription();
    if(this.collection) {
      this.unsubscribe = this.db.collection(this.collection).onSnapshot( querySnapshot => {
          const newData = [];
          querySnapshot.forEach( doc => {
            const currItem = {
              ...doc.data(),
              id: doc.id
            }
            newData.push(currItem);
          });
          this.saveData(newData);
      });
    } else {
      this.saveData([]);
    }
  }

  
}
customElements.define('firestore-collection', FirestoreCollection);