/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = (pgm) => {
    pgm.createTable("newsletter_subscriptions", {
        id: "id",
        email: { type: "varchar(254)", notNull: true },
        ip: {
            type: "inet",
            notNull: false,
            comment: "User IP address when subscribing",
        },
        created_at: {
            type: "timestamp",
            notNull: true,
            default: pgm.func("current_timestamp"),
        },
    })
}

exports.down = (pgm) => {
    pgm.dropTable("newsletter_subscriptions")
}
