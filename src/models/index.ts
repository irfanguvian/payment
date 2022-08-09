import order from "./order";
import orderDetail from "./order-detail";
import logEvent from "./log-event";

type ModelType = {
  order: any
  orderDetail: any
  logEvent: any
}

const models : ModelType = {
  order,
  orderDetail,
  logEvent,
};

export default models;
