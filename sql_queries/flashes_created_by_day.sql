SELECT
  COUNT(*) AS number_of_flashes,
  flash_type,
  CAST(creation_date AS date) AS creation__date
FROM
  flashes
GROUP BY
  creation__date, flash_type
ORDER BY
  creation__date ASC