class ContactBook {
  #contacts = []
  constructor(owner) {
    this.owner = owner
  }
  getAllContact() {
    return this.#contacts
  }
  setContact(...contacts) {
    for (let i = 0; i < contacts.length; i++) {
      this.#contacts.push(contacts[i]);      
    }
  }
  clearContacts() {
    this.#contacts = []
  }
}

let book1 = new ContactBook('nazala')
book1.setContact('aku', 'budi', 'ani')
book1.setContact('aku', 'budi', 'ani')
console.log( book1.getAllContact() );

ContactBook.prototype.setUniqueValues = function n(){
  let uniq = [... new Set( this.getAllContact() )];
  this.clearContacts()
  this.setContact(...uniq)
}
book1.setUniqueValues()
console.log( book1.getAllContact() );
