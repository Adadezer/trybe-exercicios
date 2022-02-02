SELECT * FROM hr.employees;

/* 1- Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências ( manager )
cujos departamentos ( department ) são diferentes. */
SELECT 
concat(employee.first_name, ' ', employee.last_name) AS 'colaboradores',
concat(manager.first_name, ' ', manager.last_name) AS 'gerentes'
FROM hr.employees AS employee
INNER JOIN
hr.employees AS manager ON employee.MANAGER_ID = manager.EMPLOYEE_ID
WHERE employee.DEPARTMENT_ID <> manager.DEPARTMENT_ID;

-- 2- Exiba o Nome e a quantidade de pessoas lideradas de cada gerente.
SELECT
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente",
    COUNT(*)
FROM
    hr.employees AS Manager
INNER JOIN
    hr.employees AS Employee ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
    GROUP BY
    Manager.EMPLOYEE_ID;


