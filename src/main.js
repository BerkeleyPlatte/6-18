function contactFactory(contactData) {
  let contact = {
    name: null,
    title: null,
    email: null
  };
  for (let i = 0; i < contactData.length; i++) {
    // if ((i = i)) {
    //   contact.name = contactData[0];
    //   contact.title = contactData[1];
    //   contact.email = contactData[2];
    // }
    if (contactData[i].includes(" ")) {
      contact.name = contactData[i];
    } else if (contactData[i].includes("@")) {
      contact.email = contactData[i];
    } else {
      contact.title = contactData[i];
    }
  }
  return contact;
}

console.log(
  contactFactory(["Berkeley Platte", "student", "myEmail@email.com"])
);
