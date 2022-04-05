window.onload = () => {
  let who = [" The dog ", " My granma ", " his turtle", " my bird "];
  let action = [" eat ", " pissed ", " crushed ", " broked "];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    " before the class ",
    " right on time ",
    " when I finished ",
    " during my lunch ",
    " while I was praying "
  ];

  let randomExcuseWho = who[Math.floor(who.length * Math.random())];
  let randomExcuseAction = action[Math.floor(action.length * Math.random())];
  let randomExcuseWhat = what[Math.floor(what.length * Math.random())];
  let randomExcuseWhen = when[Math.floor(when.length * Math.random())];

  let ExcuseFinal =
    randomExcuseWho + randomExcuseAction + randomExcuseWhat + randomExcuseWhen;
  document.getElementById("excuse").innerHTML = ExcuseFinal;
};
