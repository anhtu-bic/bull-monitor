module.exports = {
  port: 3010,
  redis: {
    port: 6376,
    host: "127.0.0.1",
    password: "123456",
    tls: false,
    keyPrefix: "bull:develop",
  },
  username: "admin",
  password: "admin",
  queues: ["QuizPending"],
};
