// import goes here
import exampleHandlerFcomposerHash from "./exampleHandler";

const handlerComposerList: Array<any> = [
  // goes here
  exampleHandlerFcomposerHash,
];

const handlerFComposerHash = {};

handlerComposerList.forEach(handler => {
  Object.assign(handlerFComposerHash, handler);
});

export default handlerFComposerHash;
