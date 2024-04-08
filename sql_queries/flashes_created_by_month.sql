SELECT
  COUNT(*) AS number_of_flashes,
  flash_type,
  TO_CHAR(DATE_TRUNC ('month', creation_date), 'YYYY Mon') AS creation_month
FROM
  flashes
GROUP BY
  creation_month, flash_type
ORDER BY
  creation_month ASC;