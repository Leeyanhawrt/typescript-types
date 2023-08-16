//Unknown usually better than any, as an extra check is necessary before another variable can be assigned to a unknown type

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

const generateError = (message: string, code: number): never => {
  throw { message: message, errorCode: code };

  //while(true) {}
};

generateError("An error occured!", 500);

//Due to an error being thrown a result will NEVER be returned, will not get undefined if trying to log out the result of generate error therefore void would not work as well as well as infinite loops
