import { findOrderById, findAllOrders } from "./orders-db.js";

export async function loadOrders() {
  return await findAllOrders();
}

export function myOrders(orders) {
  return orders.filter(
    order => order.city === "Alexandria" && order.status === "paid"
  );
}

export function summarize(orders) {
  return orders.reduce(
    (highest, order) => Math.max(highest, order.price),
    0
  );
}

export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student} ordered ${order.quantity} x ${order.item}`;
  } catch {
    return `No order with id ${id}`;
  }
}

export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map(order => ({
      student: order.student,
      city: order.city
    }))
  );
}