const whoamiObj = {
  "message" : [
    [
      "Hi Deepak this side! My first tech crush was Python, Django was our whirlwind summer fling,",
      "Now, blockchain's the hot mess romance I can't resist, building bridges with,", 
      "Solidity and Foundry like a lovestruck bridge troll. JavaScript? The loud roommate,",
     "I endure because React, oh React, you paint the prettiest digital sunsets. But hey,", 
      "that's where Rust enters, my tech side hustle! Fast, safe, and leaves no buggy baggage like a ,",
     "one-night stand with good code hygiene. JavaScript, honey, you're fun, but Rust writes poems with its lines,",
    ]
    
  ],
}

export const createWhoami = () : string[] => {
  const whoami : string[] = [];  
  const r = Math.floor(Math.random() * whoamiObj.message.length);
  whoami.push("<br>");

  whoamiObj.message[r].forEach((ele, idx) => {
    if (idx === whoamiObj.message[r].length - 1) {
      ele += "<span class='command'>who am I?</span>";
    }
    whoami.push(ele);
  });

  whoami.push("<br>");

  return whoami
}
