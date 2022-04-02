import Email from "./email";
import MailList from "./mailList";

// Para testar
const email1 = new Email(
  'me@personalmail.com',
  'friend@personalmail.com',
  'Car wash',
  'There\'s a new car wash in town. Did you know?'
);
const email2 = new Email(
  'friend@personalmail.com',
  'me@personalmail.com',
  'Reply - Car wash',
  'Great! My car is really dirty. How much do they charge?'
);
const email3 = new Email(
  'me@personalmail.com',
  'friend@personalmail.com',
  'Reply - Reply - Car wash',
  '$5.00, and you get a free polishing cloth'
);
const email4 = new Email(
  'me@companymail.com',
  'ceo@companymail.com',
  'Day off monday',
  `Next Tuesday is a holiday.
  Are we going to work on Monday?`
);
const email5 = new Email(
  'ceo@companymail.com',
  'me@companymail.com',
  'Reply - Day off monday',
  'The entire company will have a day off on monday =D'
);

const emailAdadezer = new Email(
  'adadezer@email.com',
  'iwazaki@email.com',
  'assunto teste',
  `email de teste para testar a problematização do email`
);

const emailIwazaki = new Email(
  'iwazaki@email.com',
  'adadezer@email.com',
  'subject test',
  `email de teste para testar teste`
);

const personalMailList = new MailList([email1, email2, email3]);
const professionalMailList = new MailList([email4, email5]);
const adadezerMailList = new MailList([emailAdadezer, emailIwazaki])

console.log('------ personalMailList.getByEmailFrom(\'me@personalmail.com\'):');
personalMailList.getByEmailFrom('me@personalmail.com').forEach(
  (mail) => console.log(mail.content)
);

const email6 = new Email(
  'me@personalmail.com',
  'friend2@personalmail.com',
  'Day off monday',
  `Oh yes!
   My boss says we\'ll have Monday off.
   Want to go to the movies?`
);

console.log(personalMailList.addEmail(email6));
personalMailList.addEmail(email5); // Adicionado erroneamente

console.log('------ personalMailList.getBySubject(\'Day off\'):');
personalMailList.getBySubject('Day off').forEach(
  (mail) => console.log(mail.content)
);
personalMailList.removeEmail(email5);

console.log('------ professionalMailList.all:');
professionalMailList.all.forEach(
  (mail) => console.log(mail.content)
);

console.log('------ personalMailList.all:');
personalMailList.all.forEach(
  (mail) => console.log(mail.content)
);
console.log();
console.log();
console.log();

console.log('------ adadezerMailList.all:');
adadezerMailList.all.forEach((email) => console.log(email.content));

console.log();
console.log('------ adadezerMailList.getByEmalFrom:');
const mailAdadezerFrom = adadezerMailList.getByEmailFrom('adadezer@email.com');
console.log(mailAdadezerFrom);

console.log();
console.log('------ adadezerMailList.getByEmalTo:');
const mailAdadezerTo = adadezerMailList.getByEmailTo('iwazaki@email.com');
console.log(mailAdadezerTo);

console.log();
console.log('------ adadezerMailList.getBySubject:');
const mailAdadezerSubject = adadezerMailList.getBySubject('subject test');
console.log(mailAdadezerSubject);

console.log();
console.log('------ adadezerMailList.addEmail:');
const adadezerAddEmail = adadezerMailList.addEmail(emailIwazaki);
console.log(personalMailList.all)
console.log(adadezerAddEmail);