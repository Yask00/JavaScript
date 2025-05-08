let Action = Object.freeze({
  deposit: 0,
  withdraw: 1,
});

class Command {
  constructor(action, amount) {
    this.action = action;
    this.amount = amount;
    this.success = false;
  }
}

class Account {
  constructor() {
    this.balance = 0;
  }

  process(cmd) {
    // todo
    switch (cmd.action) {
      case Action.deposit:
        this.balance += cmd.amount;
        cmd.success = true;
        console.log(
            `Action: ${cmd.action}, Amount: ${cmd.amount}, Success: ${cmd.success}, Balance: ${this.balance}`
          );
        break;
      case Action.withdraw:
        if (this.balance - cmd.amount >= 0) {
          this.balance -= cmd.amount;
          cmd.success = true;
        } else {
          cmd.success = false;
        }
        console.log(
            `Action: ${cmd.action}, Amount: ${cmd.amount}, Success: ${cmd.success}, Balance: ${this.balance}`
          );
        break;
    }
  }
}

let acc = new Account();
let cmd1 = new Command(Action.deposit, 100);
acc.process(cmd1);
let cmd2 = new Command(Action.withdraw, 50);
acc.process(cmd2);