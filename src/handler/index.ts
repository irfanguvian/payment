// import goes here
import exampleHandlerFcomposerHash from "./exampleHandler";
import midtransHandlerHash from "./midtrans";
import notificationHandlerHash from "./notification";
import orderHandlerHash from "./order";

interface handlerComposerHash {
  getHandlerFcomposer: any
  getListHandlerFcomposer: any
  postHandlerFcomposer: any
  snapTransaction: any
  errorRedirectNotification: any
  finishRedirectNotification: any
  paymentNotification: any
  unfinishRedirectNotification: any
  createOrder: any
}

const handlerComposerList: Array<any> = [
  // goes here
  exampleHandlerFcomposerHash,
  midtransHandlerHash,
  notificationHandlerHash,
  orderHandlerHash,
];

const handlerFComposerHash : handlerComposerHash = {
  snapTransaction: undefined,
  errorRedirectNotification: undefined,
  finishRedirectNotification: undefined,
  paymentNotification: undefined,
  unfinishRedirectNotification: undefined,
  createOrder: undefined,
  getHandlerFcomposer: undefined,
  getListHandlerFcomposer: undefined,
  postHandlerFcomposer: undefined,
};

handlerComposerList.forEach(handler => {
  Object.assign(handlerFComposerHash, handler);
});

export default handlerFComposerHash;
