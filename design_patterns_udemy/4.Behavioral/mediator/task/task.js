class Mediator {
  // todo
  constructor() {
    this.participants = [];
  }

  register(participant) {
    this.participants.push(participant);
  }

  broadcast(sender, n) {
    for (let participant of this.participants) {
      if (participant !== sender) {
        participant.receive(n);
      }
    }
  }
}

class Participant {
  constructor(mediator) {
    // todo
    this.mediator = mediator;
    this.mediator.register(this);
    this.value = 0;
  }

  say(n) {
    // todo
    this.mediator.broadcast(this, n);
  }

  receive(n) {
    this.value += n;
  }
}

let mediator = new Mediator();
let john = new Participant(mediator);
let jane = new Participant(mediator);
john.say(3);
jane.say(4);
console.log(john.value); // 4
console.log(jane.value); // 3


// ----------------------original solution
// class Event
// {
//   constructor()
//   {
//     this.handlers = new Map();
//     this.count = 0;
//   }

//   subscribe(handler)
//   {
//     this.handlers.set(++this.count, handler);
//     return this.count;
//   }

//   unsubscribe(idx)
//   {
//     this.handlers.delete(idx);
//   }

//   fire(sender, args)
//   {
//     this.handlers.forEach(function (v, k)
//     {
//       v(sender, args);
//     });
//   }
// }

// class Mediator
// {
//   constructor()
//   {
//     this.alert = new Event();
//   }

//   broadcast(sender, n)
//   {
//     this.alert.fire(sender, n);
//   }
// }

// class Participant
// {
//   constructor(mediator)
//   {
//     this.mediator = mediator;
//     this.value = 0;
//     mediator.alert.subscribe(
//       this.alert.bind(this)
//     );
//   }

//   alert(sender, n)
//   {
//     if (sender !== this)
//       this.value += n;
//   }

//   say(n)
//   {
//     this.mediator.broadcast(this, n);
//   }
// }

// describe('mediator', function()
// {
//   it('should handle number alerts', function()
//   {
//     let mediator = new Mediator();
//     let p1 = new Participant(mediator);
//     let p2 = new Participant(mediator);

//     expect(p1.value).toEqual(0);
//     expect(p2.value).toEqual(0);

//     p1.say(2);

//     expect(p1.value).toEqual(0);
//     expect(p2.value).toEqual(2);

//     p2.say(4);

//     expect(p1.value).toEqual(4);
//     expect(p2.value).toEqual(2);
//   });
// });