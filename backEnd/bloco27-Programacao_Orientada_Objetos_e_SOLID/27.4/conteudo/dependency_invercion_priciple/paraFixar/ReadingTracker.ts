/* Para fixar
  Faça as adequações necessárias no construtor da classe ReadingTracker ,
  de forma que ele passe a respeitar o Princípio da Inversão de Dependência (DIP) .
*/

interface Notificator {
  sendNotification(message: string): void;
}

class ConsoleNotification implements Notificator {
  sendNotification(message: string) {
    console.log(`Aqui vamos nós novamente! - ${message}`);
  }
}

class EmailNotification implements Notificator {
  private email: string;
  constructor(email: string) {
    this.email = email;
  }
  sendNotification(message: string) {
    console.log(
      `Aqui deve ir a implementação para enviar a notificação para o e-mail: ${this.email} - ${message}`
    );
  }
}

class PhoneNotification implements Notificator {
  private phone: number;
  constructor(phone: number) {
    this.phone = phone;
  }
  sendNotification(message: string) {
    console.log(
      `Aqui deve ir a implementação para enviar a notificação para o phone ${this.phone} - ${message}`
    );
  }
}

export class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;
  // O construtor deixa de instanciar um novo objeto do tipo Notificator
  // e agora passa a receber ele como parâmetro
  constructor(readingGoal: number, public notificator: Notificator = new ConsoleNotification()) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number) {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      this.notificator.sendNotification(
        "Parabéns! Você atingiu sua meta de leitura!"
      )
      return;
    }
    this.notificator.sendNotification("Ainda faltam alguns livros!");
  }

  // Aqui viriam mais métodos, que fogem o escopo deste exercício 
}

const noticacaoEmail = new ReadingTracker(10, new EmailNotification('email@email.com'));
noticacaoEmail.trackReadings(5);

const noticacaoPhone = new ReadingTracker(10, new PhoneNotification(11945269877));
noticacaoPhone.trackReadings(15);

