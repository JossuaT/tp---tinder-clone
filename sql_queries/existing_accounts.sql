SELECT
    email, array_agg(id) AS ids
FROM
    users
GROUP BY
    email
ORDER BY
    ids