// export default function progressNotification(
//   message: string,
//   notificationType: string,
// ): void {
//   switch (notificationType) {
//     case 'Email':
//       console.log('Email: ', message);
//       break;
//     case 'Phone':
//       console.log('Phone: ', message);
//       break;
//     case 'Console':
//       console.log('Console: ', message);
//       break;
//     default: console.log('outra mensagem qualquer');
//       break;
//   }
// }

type Notification = {
  type: string,
  message: (_message: string) => void
};

// Criando variáveis para guardar cada tipo aceito por nossa função
const consoleNotification: Notification = {
  type: 'Console',
  message(message) {
    console.log('Console: ', message);
  },
};

const emailNotification: Notification = {
  type: 'Email',
  message(message) {
    console.log('Email: ', message);
  },
};

const phoneNotification: Notification = {
  type: 'Phone',
  message(message) {
    console.log('Phone: ', message);
  },
};

const notifications: Notification[] = [
  consoleNotification, emailNotification, phoneNotification,
];

// Agora podemos adicionar novos tipos sem modificar nossa função
export default function progressNotification(
  type_: 'Console' | 'Email' | 'Phone',
  message: string,
  notificationsArray: Notification[] = notifications,
): void {
  notificationsArray.forEach((notification) => {
    if (notification.type === type_) {
      notification.message(message);
    }
  });
}

progressNotification('Email', 'venho através deste mandar um email');
progressNotification('Console', 'venho através deste mandar um console');
progressNotification('Phone', 'venho através deste mandar um phone');