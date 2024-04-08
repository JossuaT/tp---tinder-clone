SELECT 
    trans.id AS id_transaction,
    trans.amount_in_sats,
    trans.amount_in_usd,
    from_user.id AS from_user_id,
    to_user.id AS to_user_id,
    from_user.email AS from_email_user,
    to_user.email AS to_email_user
FROM 
    new_transactions trans
        JOIN wallets from_wal
            ON trans.from_wallet_id = from_wal.id
        JOIN wallets to_wal
            ON trans.to_wallet_id = to_wal.id
        JOIN users from_user
            ON from_wal.user_public_key = from_user.public_key
        JOIN users to_user
            ON to_wal.user_public_key = to_user.public_key