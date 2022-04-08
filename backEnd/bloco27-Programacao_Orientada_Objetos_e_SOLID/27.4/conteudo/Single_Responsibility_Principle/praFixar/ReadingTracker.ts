/* Para Fixar
  Observe o código abaixo e faça as alterações necessárias para que ele passe a respeitar o
  Princípio da Responsabilidade Única (SRP).
*/

/* problema com importação
  https://stackoverflow.com/questions/55198502/using-eslint-with-typescript-unable-to-resolve-path-to-module
*/

import Notification from './notidication';
// import Book from './Books';

class ReadingTracker {
  private readingGoal: number;

  private booksRead: number;

  constructor(readingGoal: number) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number) {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      Notification(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
    Notification(
      'There are still some books to go!',
    );
  }
}

const readTracker = new ReadingTracker(20);
readTracker.trackReadings(12);
readTracker.trackReadings(9);

// const wishlist = new Book(
//   { book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' },
// );
// wishlist.addToWishList({ book: 'Misery', author: 'Stephen King', genre: 'Thriller' });
// wishlist.showWishlist();