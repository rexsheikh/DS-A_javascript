class CircularQueue {
  constructor(k) {
    this.storage = [];
    this.currentSize = 0;
    this.maxSize = k;
    this.front = 0;
    this.rear = -1;
  }
  enQueue(value) {
    if (this.currentSize >= this.maxSize) {
      return false;
    }

    this.rear = ++this.rear % this.maxSize;
    this.storage[this.rear] = value;
    this.currentSize++;

    return true;
  }

  deQueue() {
    if (this.currentSize === 0) {
      return false;
    }

    this.front = ++this.front % this.maxSize;
    this.currentSize--;

    return true;
  }

  front() {
    return this.currentSize === 0 ? -1 : this.storage[this.front];
  }

  rear() {
    return this.currentSize === 0 ? -1 : this.storage[this.rear];
  }

  isEmpty() {
    return this.currentSize === 0;
  }

  isFull() {
    return this.currentSize === this.maxSize;
  }
}
