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

    getAddressRender() {
      return this.addressRender;
    }

    setAddressRender(addressRender) {
      this.addressRender = addressRender;
    }

    getSearch() {
      return this.search;
    }

    setSearch(search) {
      this.search = search;
    }

    getIsSearching() {
      return this.IsSearching;
    }

    setIsSearching(isSearching) {
      this.isSearching = isSearching;
    }

    getUpdate() {
      return this.update;
    }

    setUpdate(update) {
      this.update = update;
    }
}