export class Singleton {

    constructor() {
      if (!Singleton.instance) {
        Singleton.instance = this;
      }
      return Singleton.instance;
    }
    
    getAddressList() {
        return this.addressList;
    }
    
    setAddressList(addressList) {
        this.addressList = addressList;
    }
}