import figlet from "figlet";

async function doStuff() {
  const text = await figlet.text("Tejwant Kaur");
  console.log(text);
}

doStuff();